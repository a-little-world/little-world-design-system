import { ButtonAppearance } from "@a-little-world/little-world-design-system-core";
import { DefaultTheme } from "styled-components/native";
export declare const getLinkStyles: ({ theme }: {
    theme: DefaultTheme;
}) => {};
export declare const getLinkTextStyles: ({ theme, buttonAppearance, color, textDecoration, }: {
    theme: DefaultTheme;
    buttonAppearance?: ButtonAppearance | undefined;
    color?: string | undefined;
    textDecoration?: boolean | undefined;
}) => {
    color: string;
    textDecorationLine: "none" | "underline";
};
