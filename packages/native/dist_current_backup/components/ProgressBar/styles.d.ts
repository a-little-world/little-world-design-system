import { DefaultTheme } from "styled-components/native";
export declare const getProgressBarStyles: ({ theme }: {
    theme: DefaultTheme;
}) => {
    wrapper: {
        display: "flex";
        alignItems: "center";
        justifyContent: "center";
        gap: number;
    };
    root: {
        position: "relative";
        overflow: "hidden";
        borderRadius: string;
        backgroundColor: string;
        width: number;
        height: number;
    };
    indicator: {
        backgroundColor: string;
        width: "100%";
        height: "100%";
    };
};
