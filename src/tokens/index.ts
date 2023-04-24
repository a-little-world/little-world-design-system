import { coreColors } from './core';

export default {
  breakpoints: {
    small: 500,
    large: 700,
    xlarge: 880,
    xxlarge: 900,
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
        },
        surface: {
          primary: coreColors.white,
          secondary: coreColors.gray20,
          indicator: coreColors.green,
        },
        text: {
          primary: coreColors.black,
          secondary: coreColors.gray40,
          tertiary: coreColors.gray30,
          title: coreColors.orange,
          link: coreColors.blue20,
          button: coreColors.white,
        },
      },
    },
  },
};
