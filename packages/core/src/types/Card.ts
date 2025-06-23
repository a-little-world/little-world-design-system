import { ReactNode } from 'react';
import { TextTypes } from './Text';
import { FlexAlignType, JustifyContentType } from './styles';

export enum CardSizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export const CardDimensions = {
  [CardSizes.Small]: 360,
  [CardSizes.Medium]: 560,
  [CardSizes.Large]: 720,
};

export interface CardBaseProps {
  borderColor?: string;
  children: ReactNode;
  height?: string | number;
  width?: CardSizes;
}

export interface CardHeaderProps {
  align?: FlexAlignType;
  children: ReactNode;
  textColor?: string;
  textType?: keyof typeof TextTypes;
}

export interface CardFooterProps {
  align?: JustifyContentType;
  children: ReactNode;
}

export interface CardContentProps {
  align?: FlexAlignType;
  textAlign?: string;
  gap?: string | number;
  marginBottom?: string | number;
  children: ReactNode;
} 