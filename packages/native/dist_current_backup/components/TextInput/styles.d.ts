import { View, TextInput as RNTextInput } from 'react-native';
import { InputHeight, InputWidth } from '@a-little-world/little-world-design-system-core';
export declare const createStyles: (theme: any) => {
    inputWrapper: {
        display: "flex";
        flexDirection: "column";
        width: "100%";
        maxWidth: InputWidth;
    };
    inputContainer: {
        position: "relative";
        width: "100%";
    };
    input: {
        width: "100%";
        borderWidth: number;
        borderColor: any;
        borderRadius: number;
        padding: any;
        marginBottom: any;
        fontSize: number;
        lineHeight: number;
    };
    inputSmall: {
        padding: number;
    };
    inputError: {
        borderColor: any;
    };
    showPasswordToggle: {
        position: "absolute";
        right: any;
        top: any;
    };
};
export declare const InputWrapper: ({ children, width, style }: {
    children: React.ReactNode;
    width?: InputWidth | undefined;
    style?: any;
}) => import("react/jsx-runtime").JSX.Element;
export declare const InputContainer: ({ children, style }: {
    children: React.ReactNode;
    style?: any;
}) => import("react/jsx-runtime").JSX.Element;
export declare const Input: ({ hasError, height, style, ...props }: {
    hasError?: boolean | undefined;
    height?: InputHeight | undefined;
    style?: any;
} & import("react-native").TextInputProps) => import("react/jsx-runtime").JSX.Element;
export declare const ShowPasswordToggle: ({ children, style, ...props }: {
    children: React.ReactNode;
    style?: any;
} & import("react-native").ViewProps) => import("react/jsx-runtime").JSX.Element;
