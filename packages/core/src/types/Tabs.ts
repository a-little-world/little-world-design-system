import type { ReactNode } from 'react';

export type TabItem = {
  value: string;
  label: ReactNode;
  content: ReactNode;
};

type TabsBaseProps = {
  /** Tab triggers and panels; each `value` must be unique. */
  items: TabItem[];
  /** Uncontrolled: initially selected tab value. Defaults to first item’s `value`. */
  defaultValue?: string;
  /** Controlled: selected tab value. */
  value?: string;
  /** Called when the selected tab changes (controlled and uncontrolled). */
  onValueChange?: (value: string) => void;
  className?: string;
};

/**
 * Tab list must have an accessible name: pass `ariaLabel`, `ariaLabelledBy`, or both.
 * Use `ariaLabelledBy` with a visible heading’s `id` when you have a section title.
 */
type TabsAccessibleName =
  | { ariaLabel: string; ariaLabelledBy?: string }
  | { ariaLabel?: string; ariaLabelledBy: string };

export type TabsProps = TabsBaseProps & TabsAccessibleName;
