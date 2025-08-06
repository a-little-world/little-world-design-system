import { ReactNode } from 'react';

export enum WidgetSizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export const WidgetDimensions = {
  [WidgetSizes.Small]: '180px',
  [WidgetSizes.Medium]: '240px',
  [WidgetSizes.Large]: '320px',
};

export interface WidgetBaseProps {
  borderColor?: string;
  children: ReactNode;
  height?: string;
  width?: WidgetSizes;
  header?: string | ReactNode;
  footer?: string | ReactNode;
  padding?: string;
}

export interface WidgetHeaderProps {
  align?: string;
  children: ReactNode;
  textColor?: string;
}

export interface WidgetFooterProps {
  align?: string;
  children: ReactNode;
}
