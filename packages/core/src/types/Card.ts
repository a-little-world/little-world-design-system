import { ReactNode } from 'react';

import { FlexAlignType, JustifyContentType } from './styles';
import { TextTypes } from './Text';

export enum CardSizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  FullWidth = 'fullWidth',
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
  center?: boolean;
  /**
   * When true, `CardHeader` renders a container (div) instead of a `Text` element.
   */
  asContainer?: boolean;
  className?: string;
  marginBottom?: string | number;
  align?: FlexAlignType;
  children: ReactNode;
  textColor?: string;
  textType?: keyof typeof TextTypes;
}

export interface CardFooterProps {
  align?: JustifyContentType;
  children: ReactNode;
  className?: string;
}

export interface CardContentProps {
  align?: FlexAlignType;
  textAlign?: string;
  gap?: string | number;
  marginBottom?: string | number;
  children: ReactNode;
}
