export const ProgressBarVariations = {
  Basic: 'basic',
  Scale: 'scale',
} as const;

export type ProgressBarVariation =
  (typeof ProgressBarVariations)[keyof typeof ProgressBarVariations];

export const ProgressBarSizes = {
  Small: 'small',
  Large: 'large',
} as const;

export type ProgressBarSize =
  (typeof ProgressBarSizes)[keyof typeof ProgressBarSizes];

/** Pixel heights: `small` / `large` mean different things per variation. */
export const PROGRESS_BAR_HEIGHTS = {
  basic: {
    small: 8,
    large: 16,
  },
  scale: {
    small: 32,
    large: 48,
  },
} as const;

export const calculateProgress = (max: number, value: number) => {
  if (max <= 0) {
    return 0;
  }
  return (value / max) * 100;
};

export type ProgressBarMarker = {
  value: number;
  percent: number;
};

const nearlyDivides = (value: number, divisor: number) => {
  if (divisor === 0) {
    return false;
  }
  const quotient = value / divisor;
  return Math.abs(quotient - Math.round(quotient)) < 1e-8;
};

/**
 * Tick positions between 0 and max (exclusive). Used by both the track
 * markers and the number row so they cannot drift out of alignment.
 */
export const getMarkers = (max: number, step: number): ProgressBarMarker[] => {
  if (!(max > 0) || !(step > 0) || step >= max) {
    return [];
  }

  const markers: ProgressBarMarker[] = [];
  const last = max - step;

  for (let value = step; value <= last; value += step) {
    markers.push({
      value,
      percent: (value / max) * 100,
    });
  }

  return markers;
};

/**
 * Max labels (including 0 and max) for the scale number row.
 * The visible set is the densest even subdivision of `max` that stays
 * on the `step` grid without exceeding the cap.
 */
export const SCALE_LABEL_MAX = {
  /** Below `small` */
  base: 3,
  /** `small` and up */
  small: 6,
  /** `medium` and up — every step label */
  medium: Number.POSITIVE_INFINITY,
} as const;

export type ScaleLabelBand = 'base' | 'small' | 'medium';

/**
 * Interval between visible labels for a given cap. Always a multiple of
 * `step` that divides `max` when possible, so 0 … max is evenly spaced.
 */
export const getScaleLabelStep = (
  max: number,
  step: number,
  maxLabels: number,
): number => {
  if (!(max > 0) || !(step > 0)) {
    return max;
  }

  const maxIntervals = Number.isFinite(maxLabels)
    ? Math.max(1, Math.floor(maxLabels) - 1)
    : Number.POSITIVE_INFINITY;

  if (nearlyDivides(max, step)) {
    const units = Math.round(max / step);
    const cap = Number.isFinite(maxIntervals)
      ? Math.min(maxIntervals, units)
      : units;

    for (let intervals = cap; intervals >= 1; intervals -= 1) {
      if (units % intervals === 0) {
        return (units / intervals) * step;
      }
    }
  }

  const cap = Number.isFinite(maxIntervals) ? maxIntervals : 1;
  for (let intervals = cap; intervals >= 1; intervals -= 1) {
    const labelStep = max / intervals;
    if (nearlyDivides(labelStep, step) || intervals === 1) {
      return labelStep;
    }
  }

  return max;
};

const isScaleLabelOnGrid = (
  value: number,
  max: number,
  step: number,
  maxLabels: number,
) => {
  if (value === 0 || value === max) {
    return true;
  }
  const labelStep = getScaleLabelStep(max, step, maxLabels);
  return value > 0 && value < max && nearlyDivides(value, labelStep);
};

/**
 * Which width bands include this label. Bands do not nest: a midpoint
 * used on the coarse set is hidden on the 6-label set if it is not on
 * that grid.
 */
export const getScaleLabelBands = (
  value: number,
  max: number,
  step: number,
): Record<ScaleLabelBand, boolean> => ({
  base: isScaleLabelOnGrid(value, max, step, SCALE_LABEL_MAX.base),
  small: isScaleLabelOnGrid(value, max, step, SCALE_LABEL_MAX.small),
  medium: isScaleLabelOnGrid(value, max, step, SCALE_LABEL_MAX.medium),
});

export interface ProgressBarBaseProps {
  max: number;
  value: number;
  variation?: ProgressBarVariation;
  /**
   * Bar thickness. Heights differ by variation:
   * basic `small` 8px / `large` 16px (default `small`);
   * scale `small` 32px / `large` 48px (default `large`).
   */
  size?: ProgressBarSize;
}
