import { InputHeight } from '@a-little-world/little-world-design-system-core';
import { DefaultTheme } from 'styled-components/native';
export declare const DROPDOWN_MAX_WIDTH = 300;
export declare const getDropdownStyles: ({ theme, maxWidth, height, hasError }: {
    theme: DefaultTheme;
    maxWidth: number;
    height: InputHeight;
    hasError: boolean;
}) => {
    wrapper: {
        position: "relative";
        maxWidth: number;
        width: "100%";
    };
    trigger: {
        alignItems: "center";
        justifyContent: "space-between";
        paddingVertical: number;
        paddingHorizontal: number;
        lineHeight: number;
        height: number;
        gap: number;
        backgroundColor: string;
        borderRadius: number;
        borderWidth: number;
        borderColor: string;
        width: "100%";
        color: string;
        marginBottom: number;
    };
    triggerWithError: {};
};
