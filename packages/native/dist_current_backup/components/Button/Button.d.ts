import { ButtonAppearance, ButtonBaseProps, ButtonSizes, ButtonVariations } from "@a-little-world/little-world-design-system-core";
import React from "react";
import { StyleProp, ViewStyle } from "react-native";
export { ButtonAppearance, ButtonSizes, ButtonVariations };
export interface ButtonProps extends ButtonBaseProps {
    onPress?: () => void;
    disabled?: boolean;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<import("react-native").View>>;
export default Button;
