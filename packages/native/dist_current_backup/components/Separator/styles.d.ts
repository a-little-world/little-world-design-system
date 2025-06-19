import { DefaultTheme } from "styled-components/native";
export declare const getSeparatorStyles: ({ theme, background, spacing }: {
    theme: DefaultTheme;
    background?: string | undefined;
    spacing?: number | undefined;
}) => {
    wrapper: {
        backgroundColor: string;
        height: number;
        width: "100%";
    };
    vertical: {
        height: "100%";
        width: number;
        marginHorizontal: number;
    };
    horizontal: {
        height: number;
        width: "100%";
        marginVertical: number;
    };
};
