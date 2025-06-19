import { ButtonAppearance, ButtonSizes, ButtonVariations } from "@a-little-world/little-world-design-system-core";
import { ViewStyle, TextStyle } from "react-native";
export declare const getButtonStyles: ({ appearance, color, variation, size, backgroundColor, borderColor, theme, }: {
    appearance: ButtonAppearance;
    color?: string | undefined;
    variation: ButtonVariations;
    size: ButtonSizes;
    backgroundColor?: string | undefined;
    borderColor?: string | undefined;
    theme: any;
}) => ViewStyle;
export declare const gradientStyles: {
    fullSize: {
        position: "absolute";
        left: number;
        right: number;
        top: number;
        bottom: number;
    };
};
export declare const getButtonTextStyles: ({ color, variation, appearance, theme, }: {
    color?: string | undefined;
    variation: ButtonVariations;
    appearance: ButtonAppearance;
    theme: any;
}) => TextStyle;
export declare const OPTION_BUTTON_CSS: import("styled-components/native/dist/types").RuleSet<{
    $appearance?: ButtonAppearance | undefined;
    $backgroundColor?: string | undefined;
    $color?: string | undefined;
}>;
