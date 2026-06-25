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

  const validate = useCallback(
    (incoming: File[]): File[] => {
      if (maxSizeBytes) {
        const oversized = incoming.find((f) => f.size > maxSizeBytes);
        if (oversized) {
          onError?.(`File "${oversized.name}" exceeds the size limit.`);
          return [];
        }
      }
      return [...files, ...incoming].slice(0, maxFiles);
    },
    [files, maxFiles, maxSizeBytes, onError],
  );

  const handleFiles = useCallback(
    (incoming: FileList | null) => {
      if (!incoming) return;
      const validated = validate(Array.from(incoming));
      setFiles(validated);
      onFilesChange?.(validated);
    },
    [validate, onFilesChange],
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

  const removeFile = (index: number) => {
    const next = files.filter((_, i) => i !== index);
    setFiles(next);
    onFilesChange?.(next);
  };

  return (
    <div>
      <DropZone
        $dragging={isDragging}
        $disabled={disabled}
        onClick={() => !disabled && inputRef.current?.click()}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={() => setIsDragging(false)}
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
          onChange={(e) => handleFiles(e.target.files)}
        />
        <DropZoneLabel>{label}</DropZoneLabel>
        {hint && <HintText>{hint}</HintText>}
      </DropZone>
      {files.length > 0 && (
        <FileList>
          {files.map((file, i) => (
            <FileListItem key={`${file.name}-${i}`}>
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
