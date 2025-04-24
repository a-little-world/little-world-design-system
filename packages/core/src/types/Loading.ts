import { ReactNode } from 'react';

// Use the actual values as enum values, eliminating the need for a separate mapping
export enum LoadingSizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

// Map size names to actual dimensions for direct use
export const LoadingDimensions = {
  [LoadingSizes.Small]: '18px',
  [LoadingSizes.Medium]: '32px',
  [LoadingSizes.Large]: '56px',
};

export interface LoadingBaseProps {
  align?: string;
  color?: string;
  inline?: boolean;
  size?: LoadingSizes;
  children?: ReactNode;
} 