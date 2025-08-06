import { ReactNode } from 'react';

export enum TagAppearance {
  filled = 'filled',
  outline = 'outline',
  error = 'error',
  success = 'success',
}

export enum TagSizes {
  small = 'small',
  large = 'large',
}

export interface TagBaseProps {
  bold?: boolean;
  appearance?: TagAppearance;
  size?: TagSizes;
  color?: string;
  children?: ReactNode;
}

export interface TagsBaseProps extends TagBaseProps {
  content: string[];
}
