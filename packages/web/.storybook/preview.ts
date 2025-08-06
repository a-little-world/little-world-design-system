import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import { GlobalStyles } from '../src/index';
import { CustomThemeProvider, themes } from '../src/theme';
import { ThemeVariants } from '@a-little-world/little-world-design-system-core';

export const decorators = [
  withThemeFromJSXProvider({
    themes,
    defaultTheme: ThemeVariants.light,
    Provider: CustomThemeProvider,
    GlobalStyles: GlobalStyles,
  }),
];
export const tags = ['autodocs'];
