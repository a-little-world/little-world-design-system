export type TextStyleType = 'body' | 'heading';

export interface TextStyle {
  fontSize: number;
  desktopFontSize?: number;
  lineHeight?: number;
  fontWeight?: 'normal' | 'bold';
  styleType: TextStyleType;
} 