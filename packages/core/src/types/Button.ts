import { ReactNode } from 'react';

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

export const BUTTON_DIMENSIONS = {
  [ButtonSizes.Small]: {
    height: 28,
    minWidth: 110,
    padding: { horizontal: 12, vertical: 8 },
  },
  [ButtonSizes.Medium]: {
    height: 36,
    minWidth: 160,
    padding: { horizontal: 16, vertical: 12 },
  },
  [ButtonSizes.Large]: {
    height: 44,
    minWidth: 240,
    padding: { horizontal: 20, vertical: 16 },
  },
  [ButtonSizes.Stretch]: {
    height: 44,
    minWidth: undefined,
    width: '100%',
    padding: { horizontal: 20, vertical: 16 },
  },
} as const;

export const CIRCLE_DIMENSIONS = {
  [ButtonSizes.Small]: { width: 28, height: 28 },
  [ButtonSizes.Medium]: { width: 36, height: 36 },
  [ButtonSizes.Large]: { width: 44, height: 44 },
  [ButtonSizes.Stretch]: { width: 44, height: 44 },
} as const;

export const ICON_DIMENSIONS = {
  [ButtonSizes.Small]: { width: 16, height: 16 },
  [ButtonSizes.Medium]: { width: 24, height: 24 },
  [ButtonSizes.Large]: { width: 32, height: 32 },
  [ButtonSizes.Stretch]: { width: 32, height: 32 },
} as const;
