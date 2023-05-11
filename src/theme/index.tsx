import React, {
  createContext,
  useState,
  ReactNode,
  useCallback,
  useMemo,
} from 'react';
import { ThemeProvider } from 'styled-components';
import type { ThemeProps } from 'styled-components';
import tokens from '../tokens';
import type { Theme } from './theme';

export enum ThemeVariants {
  light = 'light',
  dark = 'dark',
}

export const lightTheme = {
  color: tokens.color.theme.light,
};

export const darkTheme = {
  color: tokens.color.theme.dark,
};

export const defaultTheme = lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export interface ThemeProviderProps extends Partial<ThemeProps<Theme>> {
  children: ReactNode;
  defaultMode?: ThemeVariants;
}

export const themeContext = createContext({
  toggleMode: () => {},
  currentMode: ThemeVariants.light,
});

const { Provider } = themeContext;

export const CustomThemeProvider = ({
  children,
  defaultMode = ThemeVariants.light,
}: ThemeProviderProps) => {
  const [currentMode, setCurrentMode] = useState(defaultMode);

  const toggleMode = useCallback(() => {
    setCurrentMode(currentMode =>
      currentMode === ThemeVariants.light
        ? ThemeVariants.dark
        : ThemeVariants.light,
    );
  }, []);

  const contextValue = useMemo(
    () => ({
      currentMode,
      toggleMode,
    }),
    [currentMode, toggleMode],
  );

  return (
    <Provider value={contextValue}>
      <ThemeProvider theme={themes[currentMode]}>{children}</ThemeProvider>
    </Provider>
  );
};
