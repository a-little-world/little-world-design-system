import { ViewStyle } from "react-native";
import { IconSvgProps } from "./Icon";
import { SvgFactoryOptions } from "@a-little-world/little-world-design-system-core";
export declare const createIconComponent: ({ name, svgData, }: SvgFactoryOptions) => {
    ({ height, width, style, color, backgroundColor, gradient, borderColor, circular, label, labelVisible, }: Omit<import("@a-little-world/little-world-design-system-core").IconBaseProps, "children"> & {
        gradient?: import("@a-little-world/little-world-design-system-core").Gradients | undefined;
        width?: string | number | undefined;
        height?: string | number | undefined;
        viewBox?: string | undefined;
    } & {
        style?: ViewStyle | undefined;
        color?: string | undefined;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
