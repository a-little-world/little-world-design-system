import type { ReactNode } from 'react';

export enum TabsVariations {
  /** Pill-shaped triggers with gap between (default). */
  Pill = 'pill',
  /** Traditional underline tabs: full-width row, bottom border, active indicator line. */
  Underline = 'underline',
}

export type TabItem = {
  value: string;
  label: ReactNode;
  content: ReactNode;
};

type TabsBaseProps = {
  /** Color of the tab triggers. Defaults to `text.color.primary`. */
  activeColor?: string;
  /** Tab triggers and panels; each `value` must be unique. */
  items: TabItem[];
  /** Visual style of tab triggers. Defaults to `Underline`. */
  variation?: TabsVariations;
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
