import { ReactNode } from 'react';
import { ButtonAppearance, ButtonSizes } from './Button';

export interface LinkBaseProps {
  active?: boolean;
  bold?: boolean;
  href?: string;
  onClick?: () => void;
  to?: string;
  buttonAppearance?: keyof typeof ButtonAppearance;
  buttonSize?: keyof typeof ButtonSizes;
  textDecoration?: boolean;
  children: ReactNode;
} 