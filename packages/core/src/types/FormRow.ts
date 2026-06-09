import { ReactNode } from 'react';

export interface FormRowBaseProps {
  children: ReactNode;
  gap?: 'small' | 'medium' | 'large';
  columns?: number;
  className?: string;
}

// Alias
export type FieldGridBaseProps = FormRowBaseProps;
