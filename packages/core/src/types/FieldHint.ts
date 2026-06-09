import { ReactNode } from 'react';

export interface FieldHintBaseProps {
  text: string;
  trigger?: ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
  icon?: ReactNode;
  className?: string;
}

// Alias for Tooltip
export type FieldTooltipBaseProps = FieldHintBaseProps;
