import { TextStyle } from "react-native";
import { DefaultTheme } from "styled-components/native";
export declare const getLabelStyles: ({ theme, bold, inline, marginBottom, }: {
    theme: DefaultTheme;
    bold?: boolean | undefined;
    children?: any;
    inline?: boolean | undefined;
    marginBottom?: number | undefined;
}) => TextStyle;
