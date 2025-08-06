import React, {
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';
import {
  ThemeVariants,
  ThemeContextType,
  defaultThemeVariant,
  tokens,
} from '@a-little-world/little-world-design-system-core';
import { DefaultTheme, ThemeProvider } from 'styled-components/native';

export const lightTheme: DefaultTheme = {
  ...tokens,
  color: tokens.color.theme.light,
};

export const darkTheme: DefaultTheme = {
  ...tokens,
  color: tokens.color.theme.dark,
};

export const defaultTheme = lightTheme;

export const themes = {
  [ThemeVariants.light]: lightTheme,
  [ThemeVariants.dark]: darkTheme,
} as const;

export interface ThemeProviderProps {
  children: ReactNode;
  defaultMode?: ThemeVariants;
}

export const themeContext = createContext<ThemeContextType>({
  toggleMode: () => {},
  currentMode: defaultThemeVariant,
});

const { Provider } = themeContext;

export const CustomThemeProvider = ({
  children,
  defaultMode = defaultThemeVariant,
}: ThemeProviderProps) => {
  const [currentMode, setCurrentMode] = useState<ThemeVariants>(defaultMode);

  const toggleMode = useCallback(() => {
    setCurrentMode((currentMode: ThemeVariants) =>
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
