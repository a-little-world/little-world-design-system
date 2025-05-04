import { ReactNode } from 'react';

// Use the actual values as enum values, eliminating the need for a separate mapping
export enum LoadingSizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

// Map size names to actual dimensions for direct use
export const LoadingDimensions = {
  [LoadingSizes.Small]: 18,
  [LoadingSizes.Medium]: 32,
  [LoadingSizes.Large]: 56,
};

export interface LoadingBaseProps {
  align?: string;
  color?: string;
  inline?: boolean;
  size?: LoadingSizes;
  children?: ReactNode;
} 