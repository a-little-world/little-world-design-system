export interface ThemeShallow {
  breakpoints: any;
  color: any;
  spacing: any;
  radius: any;
}

export interface Colors {
  border: {
    minimal: string;
    subtle: string;
    moderate: string;
    accent: string;
    bold: string;
    selected: string;
    contrast: string;
    reversed: string;
    error: string;
    success: string;
    disabled: string;
  };
  surface: {
    background: string;
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    contrast: string;
    bold: string;
    selected: string;
    subtle: string;
    accent: string;
    message: string;
    indicator: string;
    highlight: string;
    disabled: string;
    error: string;
    success: string;
    on: string;
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
    accent: string;
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
}

export interface ThemeWeb {
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
  color: Colors;
}

export interface ThemeNative {
  breakpoints: {
    xsmall: number;
    small: number;
    medium: number;
    large: number;
    xlarge: number;
    xxlarge: number;
  };
  radius: {
    xxxsmall: number;
    xxsmall: number;
    xsmall: number;
    small: number;
    medium: number;
    large: number;
    xlarge: number;
    xxlarge: number;
    massive: number;
    half: string;
    full: string;
  };
  spacing: {
    xxxxsmall: number;
    xxxsmall: number;
    xxsmall: number;
    xsmall: number;
    small: number;
    medium: number;
    large: number;
    xlarge: number;
    xxlarge: number;
    massive: number;
  };
  color: Colors;
}

export enum ThemeVariants {
  light = 'light',
  dark = 'dark',
}

export interface ThemeContextType {
  toggleMode: () => void;
  currentMode: ThemeVariants;
}

export const defaultThemeVariant = ThemeVariants.light;

export const themes = {
  light: 'light',
  dark: 'dark',
} as const;
