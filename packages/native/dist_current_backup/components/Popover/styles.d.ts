import { PopoverSizes } from "@a-little-world/little-world-design-system-core";
import { DefaultTheme } from "styled-components/native";
export declare const getPopoverContentStyles: ({ theme, width, extraPaddingTop, asToolTip, }: {
    theme: DefaultTheme;
    width?: number | undefined;
    extraPaddingTop?: boolean | undefined;
    asToolTip?: boolean | undefined;
}) => {
    content: {
        paddingTop?: number | undefined;
        display: "flex";
        flexDirection: "column";
        position: "absolute";
        zIndex: number;
        borderRadius: number;
        padding: number;
        width: number | undefined;
        maxWidth: PopoverSizes;
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        elevation: number;
        backgroundColor: string;
        paddingRight: number;
    };
};
export declare const getPopoverCloseStyles: ({ theme, asToolTip, }: {
    theme: DefaultTheme;
    asToolTip?: boolean | undefined;
}) => {
    close: {
        position: "absolute";
        top: number;
        right: number;
        width: number;
        height: number;
        color: string;
    };
};
export declare const getPopoverArrowStyles: ({ theme, asToolTip, }: {
    theme: DefaultTheme;
    asToolTip?: boolean | undefined;
}) => {
    arrow: {
        backgroundColor: string;
    };
};
