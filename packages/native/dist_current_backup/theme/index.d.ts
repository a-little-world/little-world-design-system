import React, { ReactNode } from "react";
import { ThemeVariants, ThemeContextType } from "@a-little-world/little-world-design-system-core";
import { DefaultTheme } from "styled-components/native";
export declare const lightTheme: DefaultTheme;
export declare const darkTheme: DefaultTheme;
export declare const defaultTheme: DefaultTheme;
export declare const themes: {
    readonly light: DefaultTheme;
    readonly dark: DefaultTheme;
};
export interface ThemeProviderProps {
    children: ReactNode;
    defaultMode?: ThemeVariants;
}
export declare const themeContext: React.Context<ThemeContextType>;
export declare const CustomThemeProvider: ({ children, defaultMode, }: ThemeProviderProps) => import("react/jsx-runtime").JSX.Element;
