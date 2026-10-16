import { ReactNode } from 'react';

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

/** Progress as a 0–100 percentage. Values outside 0…max are clamped. */
export const calculateProgress = (max: number, value: number) => {
  if (!(max > 0)) {
    return 0;
  }
  return (Math.min(Math.max(value, 0), max) / max) * 100;
};

export type ProgressBarMarker = {
  value: number;
  percent: number;
};

const EPSILON = 1e-8;

const nearlyDivides = (value: number, divisor: number) => {
  if (divisor === 0) {
    return false;
  }
  const quotient = value / divisor;
  return Math.abs(quotient - Math.round(quotient)) < EPSILON;
};

/** Drop float noise from repeated multiplication, e.g. 0.30000000000000004. */
const roundFloat = (value: number) => Number(value.toPrecision(12));

/**
 * Tick positions between 0 and max (exclusive). Used by both the track
 * markers and the number row so they cannot drift out of alignment.
 */
export const getMarkers = (max: number, step: number): ProgressBarMarker[] => {
  if (!(max > 0) || !(step > 0) || step >= max) {
    return [];
  }

  const intervals = max / step;
  const count = nearlyDivides(max, step)
    ? Math.round(intervals) - 1
    : Math.floor(intervals);

  const markers: ProgressBarMarker[] = [];
  for (let i = 1; i <= count; i += 1) {
    const value = roundFloat(i * step);
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

export type ScaleLabelBand = keyof typeof SCALE_LABEL_MAX;

/**
 * Interval between visible labels for a given cap. Always a multiple of
 * `step`. When `step` divides `max` it also divides `max`, so 0 … max is
 * evenly spaced; otherwise it is the smallest multiple of `step` that
 * fits the cap.
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
    const cap = Math.min(maxIntervals, units);

    for (let intervals = cap; intervals >= 1; intervals -= 1) {
      if (units % intervals === 0) {
        return (units / intervals) * step;
      }
    }
    return max;
  }

  // Interior labels allowed besides 0 and max.
  const maxInterior = maxIntervals - 1;
  for (let multiple = 1; multiple * step < max; multiple += 1) {
    const labelStep = multiple * step;
    const interior = Math.ceil(max / labelStep - EPSILON) - 1;
    if (interior <= maxInterior) {
      return labelStep;
    }
  }

  return max;
};

export type ScaleLabelSteps = Record<ScaleLabelBand, number>;

/** Label interval per width band. Compute once per bar, not per marker. */
export const getScaleLabelSteps = (
  max: number,
  step: number,
): ScaleLabelSteps => ({
  base: getScaleLabelStep(max, step, SCALE_LABEL_MAX.base),
  small: getScaleLabelStep(max, step, SCALE_LABEL_MAX.small),
  medium: getScaleLabelStep(max, step, SCALE_LABEL_MAX.medium),
});

const isScaleLabelOnGrid = (value: number, max: number, labelStep: number) => {
  if (value === 0 || value === max) {
    return true;
  }
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
  labelSteps: ScaleLabelSteps,
): Record<ScaleLabelBand, boolean> => ({
  base: isScaleLabelOnGrid(value, max, labelSteps.base),
  small: isScaleLabelOnGrid(value, max, labelSteps.small),
  medium: isScaleLabelOnGrid(value, max, labelSteps.medium),
});

/** Props shared by every platform's ProgressBar. */
export interface ProgressBarBaseProps {
  max: number;
  /** @default 0 */
  value?: number;
}

/** Props for platforms that support the basic and scale variations. */
export interface ProgressBarVariationProps extends ProgressBarBaseProps {
  /** @default 'basic' */
  variation?: ProgressBarVariation;
  /**
   * Bar thickness. Heights differ by variation (see PROGRESS_BAR_HEIGHTS):
   * basic `small` 8px / `large` 16px (default `small`);
   * scale `small` 32px / `large` 48px (default `large`).
   */
  size?: ProgressBarSize;
  /**
   * Accessible name. Required when `variation` is `scale`; overrides the
   * visible label on the basic variation.
   */
  label?: string;
}

/** Props that only apply to the `scale` variation. */
export interface ProgressBarScaleProps {
  /**
   * Marker interval.
   * @default 30
   */
  step?: number;
  /**
   * Show the number row under the bar.
   * @default true
   */
  showScale?: boolean;
  /** Optional heading on the left of the header. */
  title?: ReactNode;
  /**
   * Smaller copy after the large current value, e.g. "von 300 Minuten".
   * The current value is rendered by the component; pass units and
   * translation here. The header shows when `title` and/or `scoreRest`
   * is set.
   */
  scoreRest?: ReactNode;
  /** Right-side label (e.g. "300 Min"). Defaults to the formatted max. */
  endLabel?: ReactNode;
  /** Spoken value override. */
  ariaValueText?: string;
}
