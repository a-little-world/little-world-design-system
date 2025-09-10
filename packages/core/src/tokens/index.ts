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

export const tokensPixelated = {
  breakpoints: pixelateObjValues(breakpoints),
  radius: pixelateObjValues(radius),
  spacing: pixelateObjValues(spacing),
  color: colors,
};

export const tokens = {
  breakpoints,
  radius,
  spacing,
  color: colors,
};
