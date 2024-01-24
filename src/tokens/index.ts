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
    xxxxsmall: coreSpacing.space025,
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
          error: coreColors.red20,
          disabled: coreColors.gray20,
        },
        surface: {
          primary: coreColors.white,
          secondary: coreColors.gray50,
          bold: coreColors.blue10,
          indicator: coreColors.green20,
          highlight: coreColors.orange,
          disabled: coreColors.gray10,
          error: coreColors.red10,
          success: coreColors.green10,
        },
        text: {
          primary: coreColors.black,
          secondary: coreColors.gray40,
          tertiary: coreColors.gray30,
          title: coreColors.orange,
          link: coreColors.blue20,
          button: coreColors.white,
          error: coreColors.red20,
          success: coreColors.green30,
          highlight: coreColors.orange,
          disabled: coreColors.gray30,
          reversed: coreColors.white,
        },
        status: {
          info: coreColors.blue10,
          warning: coreColors.orange,
          error: coreColors.red20,
          success: coreColors.green10,
        },
        gradient: {
          blue10: 'linear-gradient(50.19deg, #36a9e0 2.84%, #0367b2 106.82%)',
          orange: `linear-gradient(43.07deg, #db590b -3.02%, ${coreColors.orange} 93.96%)`,
        },
      },
      dark: {},
    },
  },
};
