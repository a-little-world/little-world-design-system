import { DropdownBaseProps } from "@a-little-world/little-world-design-system-core";
import React from "react";
import { StyleProp, ViewStyle } from "react-native";
export type DropdownProps = DropdownBaseProps & {
    style?: StyleProp<ViewStyle>;
    inputRef?: React.RefObject<HTMLButtonElement>;
};
declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
