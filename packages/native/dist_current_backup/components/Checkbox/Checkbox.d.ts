import * as CheckboxPrimitive from "@rn-primitives/checkbox";
import React from "react";
import { StyleProp, ViewStyle } from "react-native";
type CheckboxProps = {
    style?: StyleProp<ViewStyle>;
    color?: string;
    error?: string;
    id?: string;
    inputRef?: React.RefObject<HTMLButtonElement>;
    label?: string;
    readOnly?: boolean;
    required?: boolean;
} & CheckboxPrimitive.RootProps;
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
