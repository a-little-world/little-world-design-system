import React from 'react';
import type { Decorator } from '@storybook/react-webpack5';
import { DecoratorHelpers } from '@storybook/addon-themes';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../src/globalStyles';
import { themes } from '../src/theme';
import { ThemeVariants } from '@a-little-world/little-world-design-system-core';

DecoratorHelpers.initializeThemeState(
  Object.keys(themes),
  ThemeVariants.light,
);

const withStyledTheme: Decorator = (Story, { globals, parameters }) => {
  const themeOverride = parameters.themes?.themeOverride;
  const selectedTheme =
    themeOverride ?? globals.theme ?? ThemeVariants.light;
  const theme =
    themes[selectedTheme as keyof typeof themes] ?? themes.light;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withStyledTheme];
export const tags = ['autodocs'];
