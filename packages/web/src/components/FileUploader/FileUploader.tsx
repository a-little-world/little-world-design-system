import React, { useCallback, useRef, useState } from 'react';
import {
  DropZone,
  DropZoneLabel,
  HintText,
  FileList,
  FileListItem,
  RemoveButton,
} from './styles';

export interface FileUploaderProps {
  accept?: string;
  disabled?: boolean;
  maxFiles?: number;
  maxSizeBytes?: number;
  multiple?: boolean;
  onFilesChange?: (files: File[]) => void;
  onError?: (error: string) => void;
  label?: string;
  hint?: string;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  accept,
  disabled = false,
  maxFiles = 10,
  maxSizeBytes,
  multiple = true,
  onFilesChange,
  onError,
  label = 'Drag & drop files here, or click to browse',
  hint,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = useCallback(
    (incoming: FileList | null) => {
      if (!incoming) return;
      const incomingArr = Array.from(incoming);

      const oversized = maxSizeBytes
        ? incomingArr.filter(f => f.size > maxSizeBytes)
        : [];
      if (oversized.length > 0) {
        oversized.forEach(f =>
          onError?.(`File "${f.name}" exceeds the size limit.`),
        );
      }

      const valid = maxSizeBytes
        ? incomingArr.filter(f => f.size <= maxSizeBytes)
        : incomingArr;

      setFiles(prev => {
        const merged = [...prev, ...valid];
        if (merged.length > maxFiles) {
          onError?.(
            `Only ${maxFiles} file${maxFiles !== 1 ? 's' : ''} can be uploaded at a time.`,
          );
        }
        const next = merged.slice(0, maxFiles);
        onFilesChange?.(next);
        return next;
      });
    },
    [maxFiles, maxSizeBytes, onError, onFilesChange],
  );

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);
      if (disabled) return;
      handleFiles(e.dataTransfer.files);
    },
    [disabled, handleFiles],
  );

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!disabled) setIsDragging(true);
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDragging(false);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => {
      const next = prev.filter((_, i) => i !== index);
      onFilesChange?.(next);
      return next;
    });
  };

  return (
    <div>
      <DropZone
        $dragging={isDragging}
        $disabled={disabled}
        onClick={() => !disabled && inputRef.current?.click()}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        aria-disabled={disabled}
        role="button"
        tabIndex={disabled ? -1 : 0}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          hidden
          onChange={e => handleFiles(e.target.files)}
        />
        <DropZoneLabel>{label}</DropZoneLabel>
        {hint && <HintText>{hint}</HintText>}
      </DropZone>
      {files.length > 0 && (
        <FileList>
          {files.map((file, i) => (
            <FileListItem
              key={`${file.name}-${file.size}-${file.lastModified}`}
            >
              <span>{file.name}</span>
              <RemoveButton type="button" onClick={() => removeFile(i)}>
                Remove
              </RemoveButton>
            </FileListItem>
          ))}
        </FileList>
      )}
    </div>
  );
};

export default FileUploader;
