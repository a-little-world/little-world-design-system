import { ReactNode } from 'react';

export interface TooltipBaseProps {
  text: string;
  trigger?: ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
}

// Extended with additional properties for FieldHint use case
export interface TooltipExtendedProps extends TooltipBaseProps {
  icon?: ReactNode;
  className?: string;
}

// Alias for semantic field hint use
export type FieldHintTooltipProps = TooltipExtendedProps;
