import { withThemeFromJSXProvider } from '@storybook/addon-styling';

import GlobalStyle from '../src/globalStyles';
import { CustomThemeProvider, ThemeVariants, themes } from '../src/theme';

//👇 Configures Storybook to log the actions in the UI.
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes,
    defaultTheme: ThemeVariants.light,
    Provider: CustomThemeProvider,
    GlobalStyles: GlobalStyle,
  }),
];
