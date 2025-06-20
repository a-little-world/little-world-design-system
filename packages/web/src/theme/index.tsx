import React, {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { ThemeVariants, ThemeContextType, defaultThemeVariant, tokensPixelated } from '@a-little-world/little-world-design-system-core';

export const lightTheme: DefaultTheme = {
  ...tokensPixelated,
  color: tokensPixelated.color.theme.light,
};

export const darkTheme: DefaultTheme = {
  ...tokensPixelated,
  color: tokensPixelated.color.theme.dark,
};

export const defaultTheme = lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
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

  useEffect(() => {
    // disable dark mode until palette ready
    // const savedTheme = localStorage.getItem('theme') as ThemeVariants;
    // const prefersDark =
    //   window.matchMedia &&
    //   window.matchMedia('(prefers-color-scheme: dark)').matches;
    // if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
    //   setCurrentMode(savedTheme);
    // } else if (prefersDark) {
    //   setCurrentMode(ThemeVariants.dark);
    // }
  }, []);

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
