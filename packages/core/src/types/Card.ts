import { ReactNode } from 'react';
import { TextTypes } from './Text';

export enum CardSizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export const CardDimensions = {
  [CardSizes.Small]: '360px',
  [CardSizes.Medium]: '560px',
  [CardSizes.Large]: '720px',
};

export interface CardBaseProps {
  borderColor?: string;
  children: ReactNode;
  height?: string;
  width?: CardSizes;
}

export interface CardHeaderProps {
  align?: string;
  children: ReactNode;
  textColor?: string;
  textType?: keyof typeof TextTypes;
}

export interface CardFooterProps {
  align?: string;
  children: ReactNode;
}

export interface CardContentProps {
  align?: string;
  textAlign?: string;
  gap?: string;
  marginBottom?: string;
  children: ReactNode;
  $align?: string;
  $textAlign?: string;
  $gap?: string;
  $marginBottom?: string;
} 