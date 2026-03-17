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
    disabled: string;
    contrast: string;
    reversed: string;
    accent: string;
    bold: string;
    selected: string;
    message: string;
    indicator: string;
    highlight: string;
    error: string;
    success: string;
    warning: string;
    info: string;
    on: string;
    confirm: string;
    reject: string;
  };
  surface: {
    background: string;
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    dim: string;
    disabled: string;
    contrast: string;
    accent: string;
    bold: string;
    selected: string;
    subtle: string;
    message: string;
    indicator: string;
    highlight: string;
    error: string;
    success: string;
    warning: string;
    info: string;
    on: string;
    confirm: string;
    reject: string;
    elevated: string;
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
    warning: string;
    info: string;
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

/** Layering scale for overlay/stacking. Use these so stacking order is visible in one place. */
export interface ThemeZIndex {
  /** In-component stacking (e.g. icon over input) */
  above: number;
  control: number;
  controlRaised: number;
  /** Dropdowns, selects */
  dropdown: number;
  /** Sticky nav, popovers, menu content */
  sticky: number;
  /** Modal backdrop and dialog */
  modal: number;
  /** Toasts (above modals so notifications show on top) */
  toast: number;
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
  zIndex: ThemeZIndex;
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
  zIndex: ThemeZIndex;
}

export enum ThemeVariants {
  light = 'light',
  dark = 'dark',
}

export interface ThemeContextType {
  toggleMode: () => void;
  setMode: (mode: ThemeVariants) => void;
  currentMode: ThemeVariants;
}

export const defaultThemeVariant = ThemeVariants.light;

export const themes = {
  light: 'light',
  dark: 'dark',
} as const;
