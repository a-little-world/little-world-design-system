import { ReactNode } from 'react';

import { ButtonAppearance, ButtonSizes } from './Button';
import { TextTypes } from './Text';

export interface LinkBaseProps {
  active?: boolean;
  backgroundColor?: string;
  bold?: boolean;
  buttonAppearance?: ButtonAppearance;
  buttonSize?: ButtonSizes;
  children: ReactNode;
  color?: string;
  href?: string;
  onClick?: () => void;
  state?: any;
  textDecoration?: boolean;
  textType?: TextTypes;
  to?: string;
}
