import { DefaultTheme } from "styled-components/native";
export declare const getAccordionStyles: ({ theme }: {
    theme: DefaultTheme;
}) => {
    root: {
        borderWidth: number;
        borderRadius: number;
        borderColor: string;
        width: number;
    };
    item: {
        borderBottomWidth: number;
        borderColor: string;
        margin: number;
        paddingVertical: number;
        paddingHorizontal: number;
        paddingBottom: number;
        width: number;
    };
    itemLastChild: {
        borderTopWidth: number;
        borderBottomWidth: number;
    };
    header: {
        margin: number;
        width: number;
    };
    content: {
        width: number;
        backgroundColor: string;
        borderRadius: number;
        padding: number;
        marginBottom: number;
    };
    trigger: {
        display: "flex";
        alignItems: "flex-start";
        justifyContent: "space-between";
        backgroundColor: string;
        paddingVertical: number;
        paddingHorizontal: number;
        gap: number;
        width: number;
        textAlign: "left";
    };
    triggerIcon: {
        flexShrink: number;
        marginTop: number;
    };
};
