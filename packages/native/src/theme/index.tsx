import React, {
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";
import {
  ThemeVariants,
  ThemeContextType,
  defaultThemeVariant,
  designTokens,
} from "@a-little-world/little-world-design-system-core";
import { ThemeProvider } from "styled-components/native";

export const lightTheme = {
  ...designTokens,
  color: designTokens.color.theme.light,
};

export const darkTheme = {
  ...designTokens,
  color: designTokens.color.theme.dark,
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

  const toggleMode = useCallback(() => {
    setCurrentMode((currentMode: ThemeVariants) =>
      currentMode === ThemeVariants.light
        ? ThemeVariants.dark
        : ThemeVariants.light
    );
  }, []);

  const contextValue = useMemo(
    () => ({
      currentMode,
      toggleMode,
    }),
    [currentMode, toggleMode]
  );

  return (
    <Provider value={contextValue}>
      <ThemeProvider theme={themes[currentMode]}>{children}</ThemeProvider>
    </Provider>
  );
};
