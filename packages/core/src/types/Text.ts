import { ReactNode } from 'react';

export type TextStyleType = 'body' | 'heading';

export interface TextStyle {
  fontSize: number;
  desktopFontSize?: number;
  lineHeight?: number;
  fontWeight?: 'normal' | 'bold';
  styleType: TextStyleType;
}

export interface TextBaseProps {
  bold?: boolean;
  center?: boolean;
  color?: string;
  children: ReactNode;
  type?: keyof typeof TextTypes;
} 

export enum TextTypes {
  Heading1 = 'Heading1',
  Heading2 = 'Heading2',
  Heading3 = 'Heading3',
  Heading4 = 'Heading4',
  Heading5 = 'Heading5',
  Heading6 = 'Heading6',
  Body1 = 'Body1',
  Body2 = 'Body2',
  Body3 = 'Body3',
  Body4 = 'Body4',
  Body5 = 'Body5',
  Body6 = 'Body6',
  Body7 = 'Body7',
}