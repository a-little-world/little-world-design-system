import { tokens } from '@a-little-world/little-world-design-system-core';

/**
 * Distance from the fill's leading edge (`spacing.small`).
 * Inside the fill the label is inset by this; outside it sits this far
 * past the fill.
 */
export const FILL_LABEL_GAP_PX = tokens.spacing.small;

/** White text starts here: earlier, the green gradient is still too light. */
export const FILL_LABEL_ON_FILL_MIN_PERCENT = 60;

/**
 * Extra space around the label so a tick does not sit against the glyphs.
 * Markers are 2px wide and centred on their percent.
 */
export const FILL_LABEL_MARKER_CLEARANCE_PX = 6;

export type FillLabelPlacement = {
  /** White on the fill. Dark green while the label sits on the empty track. */
  onFill: boolean;
  startPx: number;
  endPx: number;
};

/**
 * Place the label against the leading edge of the fill.
 * Below 60% it sits just past the fill, in dark green. From 60%, once the
 * fill is wide enough, it sits inside the fill with its right edge
 * `gapPx` short of the fill's end, in white.
 * If it fits on neither side, it goes on the side with more room. The
 * colour follows where the label's centre lands after clamping to the
 * track, so the text always contrasts with what is mostly behind it.
 */
export const getFillLabelPlacement = (
  percent: number,
  trackWidth: number,
  labelWidth: number,
  gapPx = FILL_LABEL_GAP_PX,
): FillLabelPlacement => {
  const clampedPercent = Math.min(Math.max(percent, 0), 100);
  const fillWidth = (clampedPercent / 100) * trackWidth;
  const fitsInside = fillWidth >= labelWidth + gapPx * 2;
  const fitsOutside = fillWidth + gapPx + labelWidth <= trackWidth;
  const darkEnough = clampedPercent >= FILL_LABEL_ON_FILL_MIN_PERCENT;
  const inside =
    fitsInside || fitsOutside
      ? fitsInside && (darkEnough || !fitsOutside)
      : fillWidth > trackWidth - fillWidth;

  let startPx = inside ? fillWidth - gapPx - labelWidth : fillWidth + gapPx;
  const maxStart = Math.max(trackWidth - labelWidth, 0);
  startPx = Math.min(Math.max(startPx, 0), maxStart);
  const onFill = startPx + labelWidth / 2 < fillWidth;

  return {
    onFill,
    startPx,
    endPx: startPx + labelWidth,
  };
};

/** True when a tick's centre falls inside the label, plus a small gap. */
export const markerOverlapsFillLabel = (
  markerPercent: number,
  placement: Pick<FillLabelPlacement, 'startPx' | 'endPx'>,
  trackWidth: number,
  clearancePx = FILL_LABEL_MARKER_CLEARANCE_PX,
): boolean => {
  if (!(trackWidth > 0)) {
    return false;
  }

  const markerX = (markerPercent / 100) * trackWidth;
  return (
    markerX >= placement.startPx - clearancePx &&
    markerX <= placement.endPx + clearancePx
  );
};
