export const ProgressRingSizes = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
  XLarge: 'xlarge',
} as const;

export type ProgressRingSize =
  (typeof ProgressRingSizes)[keyof typeof ProgressRingSizes];

export const ProgressRingTones = {
  Accent: 'accent',
  Success: 'success',
} as const;

export type ProgressRingTone =
  (typeof ProgressRingTones)[keyof typeof ProgressRingTones];

export const ProgressRingAppearances = {
  Default: 'default',
  Complete: 'complete',
  Inactive: 'inactive',
} as const;

export type ProgressRingAppearance =
  (typeof ProgressRingAppearances)[keyof typeof ProgressRingAppearances];

export type ProgressRingStrokeWidth = {
  stroke: number;
};

export const ProgressRingStrokeWidths: Record<
  ProgressRingSize,
  ProgressRingStrokeWidth
> = {
  small: { stroke: 5 },
  medium: { stroke: 6 },
  large: { stroke: 8 },
  xlarge: { stroke: 10 },
};

export interface ProgressRingBaseProps {
  /** Accessible name for the progress indicator. */
  label: string;
  /**
   * Current progress value. Optional when `appearance` is `complete` or
   * `inactive` (badge-style states without a progress track).
   */
  value?: number;
  /**
   * Maximum progress value. Optional when `appearance` is `complete` or
   * `inactive`.
   */
  max?: number;
  /** Optional center caption under the fraction (medium and up). */
  caption?: string;
  size?: ProgressRingSize;
  tone?: ProgressRingTone;
  /**
   * Visual mode. Use `complete` / `inactive` for badge-style filled circles
   * without a progress track.
   */
  appearance?: ProgressRingAppearance;
}
