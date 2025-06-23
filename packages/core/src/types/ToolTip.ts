import { ReactNode } from 'react';

export interface ToolTipBaseProps {
  text: string;
  trigger?: ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
} 