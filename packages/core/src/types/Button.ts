import { ComponentPropsWithoutRef, ReactNode } from 'react';

export enum ButtonVariations {
  Basic = 'basic',
  Option = 'option',
  Circle = 'circle',
  Icon = 'icon',
  Inline = 'inline',
}

export enum ButtonAppearance {
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum ButtonSizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  Stretch = 'stretch', // default
}

export interface ButtonBaseProps {
  appearance?: ButtonAppearance;
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
  children?: ReactNode;
  loading?: boolean;
  size?: ButtonSizes;
  variation?: ButtonVariations;
} 