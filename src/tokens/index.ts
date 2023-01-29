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
        text: {
          primary: coreColors.black,
          secondary: coreColors.gray20,
          tertiary: coreColors.gray10,
          title: coreColors.orange,
          link: coreColors.blue20,
          button: coreColors.white,
        },
      },
    },
  },
};
