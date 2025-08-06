import { ReactNode } from 'react';

export interface InputErrorBaseProps {
  children: ReactNode;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  visible: boolean;
  textAlign?: 'left' | 'center' | 'right';
}
