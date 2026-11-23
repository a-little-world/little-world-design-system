export type FileUploaderErrorCode = 'invalid-type' | 'too-large' | 'too-many';

export interface FileUploaderError {
  code: FileUploaderErrorCode;
  file?: File;
}

export interface FileUploaderProps {
  accept?: string;
  disabled?: boolean;
  maxFiles?: number;
  maxSizeBytes?: number;
  multiple?: boolean;
  onFilesChange?: (files: File[]) => void;
  onError?: (message: string, error: FileUploaderError) => void;
  label?: string;
  hint?: string;
  chooseFileLabel?: string;
  addFilesLabel?: string;
  removeFileLabel?: (fileName: string) => string;
  maxFilesLabel?: (maxFiles: number) => string;
  fileCountLabel?: (count: number, maxFiles: number) => string;
}
