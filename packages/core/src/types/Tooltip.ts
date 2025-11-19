import { ReactNode } from 'react';

export interface TooltipBaseProps {
  text: string;
  trigger?: ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
}
