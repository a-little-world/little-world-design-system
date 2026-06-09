import { ReactNode } from 'react';

export interface FileUploaderBaseProps {
  onFilesSelected: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  label?: string;
  error?: string;
  maxFileSize?: number;
  maxFiles?: number;
  className?: string;
  icon?: ReactNode;
  dragAndDrop?: boolean;
}
