import { DefaultTheme } from 'styled-components/native';
export declare const getRadioGroupStyles: ({ theme }: {
    theme: DefaultTheme;
}) => {
    root: {
        display: "flex";
        flexDirection: "column";
        gap: number;
        alignItems: "flex-start";
    };
    itemContainer: {
        display: "flex";
        alignItems: "center";
    };
    item: {
        backgroundColor: string;
        borderWidth: number;
        borderColor: string;
        borderRadius: string;
        width: number;
        height: number;
        marginRight: number;
        boxShadow: string;
    };
    indicator: {
        display: "flex";
        alignItems: "center";
        justifyContent: "center";
        width: "100%";
        height: "100%";
    };
};
