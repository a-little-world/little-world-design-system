import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../src/globalStyles';
import { ThemeVariants, themes } from '../src/theme';
import './global.css';

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
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyle,
  }),
];
