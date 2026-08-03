export interface FileUploaderProps {
  accept?: string;
  disabled?: boolean;
  error?: string;
  maxFiles?: number;
  maxSizeBytes?: number;
  multiple?: boolean;
  name?: string;
  onFilesChange?: (files: File[]) => void;
  onError?: (error: string) => void;
  label?: string;
  hint?: string;
  required?: boolean;
}
