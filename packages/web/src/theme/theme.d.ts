import 'styled-components';

export interface ThemeShallow {
  breakpoints: any;
  color: any;
  spacing: any;
  radius: any;
}
export interface Theme {
  breakpoints: {
    xsmall: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
  };
  radius: {
    xxxsmall: string;
    xxsmall: string;
    xsmall: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
    massive: string;
    half: string;
    full: string;
  };
  spacing: {
    xxxxsmall: string;
    xxxsmall: string;
    xxsmall: string;
    xsmall: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
    massive: string;
  };
  color: {
    theme: {
      light: {
        border: {
          minimal: string;
          subtle: string;
          moderate: string;
          bold: string;
          selected: string;
          contrast: string;
          reversed: string;
          error: string;
          disabled: string;
        };
        surface: {
          background: string;
          primary: string;
          secondary: string;
          tertiary: string;
          contrast: string;
          bold: string;
          selected: string;
          accent: string;
          message: string;
          indicator: string;
          highlight: string;
          disabled: string;
          error: string;
          success: string;
        };
        text: {
          primary: string;
          secondary: string;
          tertiary: string;
          quaternary: string;
          title: string;
          heading: string;
          link: string;
          button: string;
          control: string;
          error: string;
          success: string;
          highlight: string;
          bold: string;
          disabled: string;
          reversed: string;
        };
        status: {
          info: string;
          warning: string;
          error: string;
          success: string;
        };
        gradient: {
          blue10: string;
          orange10: string;
          orange20: string;
        };
      };
      dark: {
        border: {
          minimal: string;
          subtle: string;
          moderate: string;
          bold: string;
          selected: string;
          contrast: string;
          reversed: string;
          error: string;
          disabled: string;
        };
        surface: {
          background: string;
          primary: string;
          secondary: string;
          tertiary: string;
          contrast: string;
          bold: string;
          selected: string;
          accent: string;
          message: string;
          indicator: string;
          highlight: string;
          disabled: string;
          error: string;
          success: string;
        };
        text: {
          primary: string;
          secondary: string;
          tertiary: string;
          quaternary: string;
          title: string;
          heading: string;
          link: string;
          button: string;
          control: string;
          error: string;
          success: string;
          highlight: string;
          bold: string;
          disabled: string;
          reversed: string;
        };
        status: {
          info: string;
          warning: string;
          error: string;
          success: string;
        };
        gradient: {
          blue10: string;
          orange10: string;
          orange20: string;
        };
      };
    };
  };
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeShallow {}
}
