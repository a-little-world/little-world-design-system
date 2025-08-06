import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import GlobalStyle from '../src/globalStyles';
import { CustomThemeProvider, themes } from '../src/theme';
import { ThemeVariants } from '@a-little-world/little-world-design-system-core';
import '../src/theme/theme';

export const decorators = [
  withThemeFromJSXProvider({
    themes,
    defaultTheme: ThemeVariants.light,
    Provider: CustomThemeProvider,
    GlobalStyles: GlobalStyle,
  }),
];
export const tags = ['autodocs'];
