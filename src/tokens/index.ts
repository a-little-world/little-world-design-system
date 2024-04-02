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
  radius: {
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
          bold: coreColors.blue20,
          selected: coreColors.orange20,
          contrast: coreColors.black,
          reversed: coreColors.white,
          error: coreColors.red20,
          disabled: coreColors.gray20,
        },
        surface: {
          background: coreColors.white,
          primary: coreColors.white,
          secondary: coreColors.gray10,
          tertiary: coreColors.gray50,
          contrast: coreColors.black,
          bold: coreColors.blue10,
          message: coreColors.orange10,
          indicator: coreColors.green20,
          highlight: coreColors.orange20,
          disabled: coreColors.gray10,
          error: coreColors.red10,
          success: coreColors.green10,
        },
        text: {
          primary: coreColors.black,
          secondary: coreColors.gray40,
          tertiary: coreColors.gray30,
          title: coreColors.orange20,
          heading: coreColors.blue20,
          link: coreColors.blue20,
          button: coreColors.white,
          error: coreColors.red20,
          success: coreColors.green30,
          highlight: coreColors.orange20,
          bold: coreColors.black,
          disabled: coreColors.gray30,
          reversed: coreColors.white,
        },
        status: {
          info: coreColors.blue10,
          warning: coreColors.orange20,
          error: coreColors.red20,
          success: coreColors.green10,
        },
        gradient: {
          blue10: `linear-gradient(50.19deg, ${coreColors.blue10} 2.84%, #0367b2 106.82%)`,
          orange10: `linear-gradient(43.07deg, ${coreColors.orange30} -3.02%, ${coreColors.orange20} 93.96%)`,
          orange20: `linear-gradient(225.88deg, ${coreColors.orange30} 7.79%, ${coreColors.orange40} 104.6%);
          `,
        },
      },
      dark: {
        border: {
          minimal: coreColors.gray10,
          subtle: coreColors.gray20,
          moderate: coreColors.gray30,
          selected: coreColors.orange20,
          contrast: coreColors.white,
          reversed: coreColors.black, //
          error: coreColors.red20,
          disabled: coreColors.gray20,
        },
        surface: {
          background: coreColors.black, //
          primary: coreColors.gray60, //
          secondary: coreColors.gray50,
          contrast: coreColors.white,
          bold: coreColors.blue10,
          message: coreColors.orange10,
          indicator: coreColors.green20,
          highlight: coreColors.orange20,
          disabled: coreColors.gray10,
          error: coreColors.red10,
          success: coreColors.green10,
        },
        text: {
          primary: coreColors.white, //
          secondary: coreColors.gray40,
          tertiary: coreColors.gray30,
          title: coreColors.orange20,
          heading: coreColors.blue20,
          link: coreColors.blue20,
          button: coreColors.black, //
          error: coreColors.red20,
          success: coreColors.green30,
          highlight: coreColors.orange20,
          bold: coreColors.white, //
          disabled: coreColors.gray30,
          reversed: coreColors.black, //
        },
        status: {
          info: coreColors.blue10,
          warning: coreColors.orange20,
          error: coreColors.red20,
          success: coreColors.green10,
        },
        gradient: {
          blue10: `linear-gradient(50.19deg, ${coreColors.blue10} 2.84%, #0367b2 106.82%)`,
          orange10: `linear-gradient(43.07deg, ${coreColors.orange30} -3.02%, ${coreColors.orange20} 93.96%)`,
          orange20: `linear-gradient(225.88deg, ${coreColors.orange30} 7.79%, ${coreColors.orange40} 104.6%);
          `,
        },
      },
    },
  },
};
