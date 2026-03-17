import { colors } from './colors';
import { coreSpacing, pixelateObjValues } from './core';

const breakpoints = {
  xsmall: 360,
  small: 500,
  medium: 700,
  large: 900,
  xlarge: 1200,
  xxlarge: 1600,
} as const;

const radius = {
  xxxsmall: coreSpacing.space05,
  xxsmall: coreSpacing.space10,
  xsmall: coreSpacing.space15,
  small: coreSpacing.space20,
  medium: coreSpacing.space25,
  large: coreSpacing.space30,
  xlarge: coreSpacing.space40,
  xxlarge: coreSpacing.space50,
  massive: coreSpacing.space125,
  half: '50%',
  full: '100%',
};

const spacing = {
  xxxxsmall: coreSpacing.space025,
  xxxsmall: coreSpacing.space05,
  xxsmall: coreSpacing.space10,
  xsmall: coreSpacing.space15,
  small: coreSpacing.space20,
  medium: coreSpacing.space30,
  large: coreSpacing.space40,
  xlarge: coreSpacing.space50,
  xxlarge: coreSpacing.space80,
  xxxlarge: coreSpacing.space100,
  xxxxlarge: coreSpacing.space125,
  massive: coreSpacing.space150,
};

/** Layering scale: one place to see and adjust stacking order. Toast > Modal > overlay UI > dropdown. */
const zIndex = {
  above: 1,
  control: 2,
  controlRaised: 3,
  dropdown: 100,
  sticky: 200,
  modal: 1000,
  toast: 1100,
} as const;

export const tokensPixelated = {
  breakpoints: pixelateObjValues(breakpoints),
  radius: pixelateObjValues(radius),
  spacing: pixelateObjValues(spacing),
  color: colors,
  zIndex,
};

export const tokens = {
  breakpoints,
  radius,
  spacing,
  color: colors,
  zIndex,
};
