import { ReactNode } from 'react';

export interface TooltipBaseProps {
  text: string;
  trigger?: ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
}

/**
 * Inline field help text — a more prominent, always-visible alternative to a
 * hover {@link TooltipBaseProps tooltip}. Use for guidance that should not be
 * hidden behind a hover/click interaction.
 */
export interface FieldHintBaseProps {
  /** The hint text shown inline with the field. */
  text: string;
  /**
   * Render the leading info icon.
   * @default true
   */
  withIcon?: boolean;
}
