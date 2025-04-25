import { ReactNode } from 'react';
import { ButtonAppearance, ButtonSizes } from './Button';
import { TextTypes } from './Text';

export interface LinkBaseProps {
  active?: boolean;
  bold?: boolean;
  buttonAppearance?: keyof typeof ButtonAppearance;
  buttonSize?: keyof typeof ButtonSizes;
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  state?: any;
  textDecoration?: boolean;
  textType?: TextTypes;
  to?: string;
} 