import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import GlobalStyle from '../src/globalStyles';
import { CustomThemeProvider, ThemeVariants, themes } from '../src/theme';

export const decorators = [
  withThemeFromJSXProvider({
    themes,
    defaultTheme: ThemeVariants.light,
    Provider: CustomThemeProvider,
    GlobalStyles: GlobalStyle,
  }),
];
export const tags = ['autodocs'];
