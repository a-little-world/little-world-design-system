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
