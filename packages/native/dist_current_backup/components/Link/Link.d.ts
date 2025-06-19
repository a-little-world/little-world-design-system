import { LinkBaseProps } from "@a-little-world/little-world-design-system-core";
import React from "react";
import { TouchableOpacityProps } from "react-native";
export type LinkProps = Omit<TouchableOpacityProps, "onPress"> & LinkBaseProps & {
    params?: Record<string, any>;
};
/**
 * Link component for React Native
 * - Uses React Navigation for internal navigation (to)
 * - Uses Linking API for external links (href)
 */
declare const Link: React.ForwardRefExoticComponent<Omit<TouchableOpacityProps, "onPress"> & LinkBaseProps & {
    params?: Record<string, any> | undefined;
} & React.RefAttributes<any>>;
export default Link;
