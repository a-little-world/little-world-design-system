import { Property } from 'csstype';

export interface ThemeShallow {
  breakpoints: any;
  color: any;
  spacing: any;
}
export interface Theme {
  color: {
    theme: {
      light: {
        border: {
          minimal: Property.Color;
          subtle: Property.Color;
          moderate: Property.Color;
          selected: Property.Color;
          contrast: Property.Color;
          reversed: Property.Color;
          error: Property.Color;
        };
        surface: {
          primary: Property.Color;
          secondary: Property.Color;
          indicator: Property.Color;
        };
        text: {
          primary: Property.Color;
          secondary: Property.Color;
          tertiary: Property.Color;
          title: Property.Color;
          link: Property.Color;
          button: Property.Color;
          error: Property.Color;
        };
      };
      dark: {};
    };
  };
}
