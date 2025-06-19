import React from "react";
import { TextStyle, StyleProp } from "react-native";
export interface LabelProps {
    style?: StyleProp<TextStyle>;
    bold?: boolean;
    children?: any;
    nativeId?: string;
    inline?: boolean;
    marginBottom?: number;
}
export declare const Label: React.FC<LabelProps>;
export default Label;
