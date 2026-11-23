import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';
import {
  ButtonAppearance,
  ButtonSizes,
  FileUploaderError,
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

export { FileUploaderError, FileUploaderProps };

function matchesAccept(file: File, accept?: string): boolean {
  if (!accept) return true;
  return accept.split(',').some(token => {
    const t = token.trim();
    if (t.startsWith('.'))
      return file.name.toLowerCase().endsWith(t.toLowerCase());
    if (t.endsWith('/*')) return file.type.startsWith(t.slice(0, -1));
    return file.type === t;
  });
}

const fileKey = (file: File) =>
  `${file.name}-${file.size}-${file.lastModified}`;

const defaultRemoveFileLabel = (fileName: string) => `Remove ${fileName}`;

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
  chooseFileLabel = 'Choose file',
  addFilesLabel = 'Add more files',
  removeFileLabel = defaultRemoveFileLabel,
}) => {
  const theme = useTheme();
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFilesState] = useState<File[]>([]);
  const filesRef = useRef<File[]>([]);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const fileLimit = multiple ? maxFiles : 1;
  const canPickFiles = !disabled && (!multiple || files.length < fileLimit);
  const pickFilesLabel = multiple ? addFilesLabel : chooseFileLabel;

  const setFiles = useCallback((next: File[]) => {
    filesRef.current = next;
    setFilesState(next);
  }, []);

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
      const valid = Array.from(incoming).filter(file => {
        if (!matchesAccept(file, accept)) {
          onError?.(`File "${file.name}" is not an accepted file type.`, {
            code: 'invalid-type',
            file,
          });
          return false;
        }
        if (maxSizeBytes && file.size > maxSizeBytes) {
          onError?.(`File "${file.name}" exceeds the size limit.`, {
            code: 'too-large',
            file,
          });
          return false;
        }
        return true;
      });

      // single mode replaces the current file
      const current = multiple ? filesRef.current : [];
      const seen = new Set(current.map(fileKey));
      const added = valid.filter(file => {
        if (seen.has(fileKey(file))) return false;
        seen.add(fileKey(file));
        return true;
      });
      if (!added.length) return;

      const merged = [...current, ...added];
      if (merged.length > fileLimit) {
        onError?.(
          `Only ${fileLimit} file${fileLimit !== 1 ? 's' : ''} can be uploaded at a time.`,
          { code: 'too-many' },
        );
      }
      const next = merged.slice(0, fileLimit);
      setFiles(next);
      onFilesChange?.(next);
    },
    [
      accept,
      fileLimit,
      maxSizeBytes,
      multiple,
      onError,
      onFilesChange,
      setFiles,
    ],
  );

  const removeFile = (index: number) => {
    const next = filesRef.current.filter((_, i) => i !== index);
    setFiles(next);
    onFilesChange?.(next);
  };

  const openPicker = () => {
    if (canPickFiles) inputRef.current?.click();
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

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    if (e.key !== 'Enter' && e.key !== ' ') return;
    e.preventDefault();
    openPicker();
  };

  const pickFilesButton = canPickFiles && (
    <Button
      appearance={ButtonAppearance.Secondary}
      size={ButtonSizes.Small}
      onClick={e => {
        e.stopPropagation();
        openPicker();
      }}
    >
      {pickFilesLabel}
    </Button>
  );

  const renderContent = () => {
    if (files.length === 0) {
      return (
        <EmptyState>
          <DropZoneIcon>
            <UploadIcon
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
            {previewUrl && (
              <PreviewImage src={previewUrl} alt={files[0].name} />
            )}
            <RemoveImageButton
              type="button"
              aria-label={removeFileLabel(files[0].name)}
              disabled={disabled}
              onClick={e => {
                e.stopPropagation();
                removeFile(0);
              }}
            >
              <CloseIcon height="16" width="16" color="white" />
            </RemoveImageButton>
          </PreviewArea>
          <PreviewFooter>
            <PreviewCaption title={files[0].name}>
              {files[0].name}
            </PreviewCaption>
            {pickFilesButton}
          </PreviewFooter>
        </PreviewColumn>
      );
    }

    return (
      <>
        <InlineFileList>
          {files.map((file, i) => (
            <InlineFileItem key={fileKey(file)}>
              <span>{file.name}</span>
              <RemoveFileButton
                type="button"
                aria-label={removeFileLabel(file.name)}
                disabled={disabled}
                onClick={e => {
                  e.stopPropagation();
                  removeFile(i);
                }}
              >
                <CloseIcon
                  height="12"
                  width="12"
                  color={theme.color.text.error}
                />
              </RemoveFileButton>
            </InlineFileItem>
          ))}
        </InlineFileList>
        {pickFilesButton && <InlineFooter>{pickFilesButton}</InlineFooter>}
      </>
    );
  };

  const isEmpty = files.length === 0;

  return (
    <DropZone
      $dragging={isDragging}
      $disabled={disabled}
      onClick={isEmpty ? openPicker : undefined}
      onKeyDown={isEmpty ? onKeyDown : undefined}
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      aria-disabled={isEmpty ? disabled : undefined}
      role={isEmpty ? 'button' : undefined}
      tabIndex={isEmpty && !disabled ? 0 : undefined}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        hidden
        onClick={e => e.stopPropagation()}
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
