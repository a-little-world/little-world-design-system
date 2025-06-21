import { ComponentPropsWithoutRef } from 'react';

export enum TextAreaSize {
  Xsmall = 'xsmall',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export const TextAreaDimensions = {
  [TextAreaSize.Xsmall]: '44px',
  [TextAreaSize.Small]: '80px',
  [TextAreaSize.Medium]: '120px',
  [TextAreaSize.Large]: '160px',
};

export interface TextAreaBaseProps extends Omit<ComponentPropsWithoutRef<'textarea'>, 'onChange' | 'ref'> {
  displayCount?: boolean;
  error?: string;
  expandable?: boolean;
  id?: string;
  label?: string;
  labelTooltip?: string;
  maxLength?: number;
  onChange?: (e: any) => void;
  onSubmit?: () => boolean | Promise<boolean>;
  size?: TextAreaSize;
  value?: string;
} 