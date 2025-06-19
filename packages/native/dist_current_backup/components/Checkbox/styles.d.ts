import { DefaultTheme } from 'styled-components/native';
export declare const getContainerStyles: ({ theme }: {
    theme: DefaultTheme;
}) => {
    container: {
        display: "flex";
        alignItems: "center";
        marginVertical: number;
    };
};
export declare const getCheckboxStyles: ({ theme, hasError, color, checked }: {
    theme: DefaultTheme;
    hasError: boolean;
    color?: string | undefined;
    checked: boolean;
}) => {
    checkbox: {
        backgroundColor: string | undefined;
        borderColor: string;
        color: string;
        width: number;
        height: number;
        display: "flex";
        alignItems: "center";
        justifyContent: "center";
        borderRadius: number;
        borderWidth: number;
    };
};
export declare const indicatorStyles: {
    indicator: {
        display: "flex";
        alignItems: "center";
        justifyContent: "center";
    };
};
