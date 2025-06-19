import { Gradients, IconBaseProps } from "@a-little-world/little-world-design-system-core";
export declare const ImageLabel: ({ children, top }: {
    children: string;
    top: number;
}) => import("react/jsx-runtime").JSX.Element;
export type IconSvgProps = Omit<IconBaseProps, "children"> & {
    gradient?: Gradients;
    width?: number | string;
    height?: number | string;
    viewBox?: string;
};
export declare const Icon: ({ backgroundColor, borderColor, children, circular, style, label, labelVisible, labelTop, }: Omit<IconBaseProps, "className"> & {
    style?: any;
}) => import("react/jsx-runtime").JSX.Element;
export default Icon;
