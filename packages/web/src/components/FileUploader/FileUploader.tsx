import React, { useCallback, useRef, useState } from 'react';

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
      const next = [...files, ...incoming].slice(0, maxFiles);
      return next;
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

  const onDragLeave = () => setIsDragging(false);

  const removeFile = (index: number) => {
    const next = files.filter((_, i) => i !== index);
    setFiles(next);
    onFilesChange?.(next);
  };

  return (
    <div>
      <div
        onClick={() => !disabled && inputRef.current?.click()}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        aria-disabled={disabled}
        role="button"
        tabIndex={disabled ? -1 : 0}
        data-dragging={isDragging}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          hidden
          onChange={(e) => handleFiles(e.target.files)}
        />
        <span>{label}</span>
        {hint && <span>{hint}</span>}
      </div>
      {files.length > 0 && (
        <ul>
          {files.map((file, i) => (
            <li key={`${file.name}-${i}`}>
              <span>{file.name}</span>
              <button type="button" onClick={() => removeFile(i)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileUploader;
