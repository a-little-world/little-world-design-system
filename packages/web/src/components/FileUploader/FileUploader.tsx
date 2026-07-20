import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';
import {
  ButtonAppearance,
  ButtonSizes,
  FileUploaderProps,
} from '@a-little-world/little-world-design-system-core';
import Button from '../Button/Button';
import { CloseIcon, UploadIcon } from '../Icon';
import {
  DropZone,
  DropZoneIcon,
  EmptyState,
  EmptyTitle,
  HintText,
  InlineFileItem,
  InlineFileList,
  InlineFooter,
  PreviewArea,
  PreviewCaption,
  PreviewColumn,
  PreviewFooter,
  PreviewImage,
  RemoveFileButton,
  RemoveImageButton,
} from './styles';

export { FileUploaderProps };

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
  const theme = useTheme();
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const isSingleImagePreview =
    files.length === 1 && files[0].type.startsWith('image/');

  useEffect(() => {
    if (!isSingleImagePreview) {
      setPreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(files[0]);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [files, isSingleImagePreview]);

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

  const removeFile = (index: number) => {
    setFiles(prev => {
      const next = prev.filter((_, i) => i !== index);
      onFilesChange?.(next);
      return next;
    });
  };

  const openPicker = () => {
    if (!disabled) inputRef.current?.click();
  };

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

  const renderContent = () => {
    if (files.length === 0) {
      return (
        <EmptyState>
          <DropZoneIcon>
            <UploadIcon
              label=""
              height="40"
              width="40"
              color={theme.color.surface.bold}
            />
          </DropZoneIcon>
          <EmptyTitle>{label}</EmptyTitle>
          {hint && <HintText>{hint}</HintText>}
        </EmptyState>
      );
    }

    if (isSingleImagePreview) {
      return (
        <PreviewColumn>
          <PreviewArea onClick={openPicker}>
            <PreviewImage src={previewUrl ?? ''} alt={files[0].name} />
            <RemoveImageButton
              type="button"
              aria-label="Remove image"
              onClick={e => {
                e.stopPropagation();
                removeFile(0);
              }}
            >
              <CloseIcon label="Remove" height="16" width="16" color="white" />
            </RemoveImageButton>
          </PreviewArea>
          <PreviewFooter>
            <PreviewCaption title={files[0].name}>
              {files[0].name}
            </PreviewCaption>
            <Button
              appearance={ButtonAppearance.Secondary}
              size={ButtonSizes.Small}
              onClick={e => {
                e.stopPropagation();
                openPicker();
              }}
            >
              Choose file
            </Button>
          </PreviewFooter>
        </PreviewColumn>
      );
    }

    return (
      <>
        <InlineFileList>
          {files.map((file, i) => (
            <InlineFileItem
              key={`${file.name}-${file.size}-${file.lastModified}`}
            >
              <span>{file.name}</span>
              <RemoveFileButton
                type="button"
                aria-label={`Remove ${file.name}`}
                onClick={e => {
                  e.stopPropagation();
                  removeFile(i);
                }}
              >
                <CloseIcon
                  label="Remove"
                  height="12"
                  width="12"
                  color={theme.color.text.error}
                />
              </RemoveFileButton>
            </InlineFileItem>
          ))}
        </InlineFileList>
        <InlineFooter>
          <Button
            appearance={ButtonAppearance.Secondary}
            size={ButtonSizes.Small}
            onClick={e => {
              e.stopPropagation();
              openPicker();
            }}
          >
            Add more files
          </Button>
        </InlineFooter>
      </>
    );
  };

  return (
    <DropZone
      $dragging={isDragging}
      $disabled={disabled}
      onClick={() => files.length === 0 && openPicker()}
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
        onChange={e => {
          handleFiles(e.target.files);
          e.target.value = '';
        }}
      />
      {renderContent()}
    </DropZone>
  );
};

export default FileUploader;
