import { coreColors, coreSpacing } from './core';

export default {
  breakpoints: {
    xsmall: '360px',
    small: '500px',
    medium: '700px',
    large: '900px',
    xlarge: '1200px',
    xxlarge: '1600px',
  },
  spacing: {
    xxxsmall: coreSpacing.space05,
    xxsmall: coreSpacing.space10,
    xsmall: coreSpacing.space15,
    small: coreSpacing.space20,
    medium: coreSpacing.space30,
    large: coreSpacing.space40,
    xlarge: coreSpacing.space50,
    xxlarge: coreSpacing.space80,
    massive: coreSpacing.space150,
  },
  color: {
    theme: {
      light: {
        border: {
          minimal: coreColors.gray10,
          subtle: coreColors.gray20,
          moderate: coreColors.gray30,
          selected: coreColors.orange,
          contrast: coreColors.black,
          reversed: coreColors.white,
          error: coreColors.red10,
        },
        surface: {
          primary: coreColors.white,
          secondary: coreColors.gray20,
          indicator: coreColors.green,
          error: coreColors.red10,
        },
        text: {
          primary: coreColors.black,
          secondary: coreColors.gray40,
          tertiary: coreColors.gray30,
          title: coreColors.orange,
          link: coreColors.blue20,
          button: coreColors.white,
          error: coreColors.red20,
          highlight: coreColors.orange,
        },
      },
      dark: {},
    },
  },
};
