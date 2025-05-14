import { ReactNode } from "react";
export declare enum Gradients {
    Blue = "blue",
    Orange = "orange"
}
export declare enum GradientTypes {
    v1 = "v1",
    v2 = "v2",
    v3 = "v3",
    v4 = "v4"
}
export declare const GradientVariations: {
    blue: string[];
    orange: string[];
};
export interface IconBaseProps {
    backgroundColor?: string;
    borderColor?: string;
    children?: ReactNode;
    circular?: boolean;
    className?: string;
    color?: string;
    gradient?: Gradients;
    height?: number | string;
    label: string;
    labelTop?: number | string;
    labelVisible?: boolean;
    size?: number | string;
    style?: any;
    width?: number | string;
}
export type IconGradientProps = {
    id: string;
    variation: Gradients;
    type?: GradientTypes;
};
export type IconPathData = {
    path: string;
    fillRule?: "nonzero" | "evenodd" | "inherit";
    clipRule?: string;
};
export type IllustrationProps = {
    label: string;
    labelTop?: number | string;
    labelVisible?: boolean;
    children: any;
};
export type SvgFactoryOptions = {
    name: string;
    svgData: ParsedSvg;
    gradient?: GradientTypes;
};
export interface SvgTransformOptions {
    className?: string;
    color?: string;
    colorAttr?: string;
    gradient?: string;
    gradientId?: string;
    height?: number | string;
    label: string;
    style?: any;
    width?: number | string;
    accessible?: boolean;
    accessibilityLabel?: string;
}
export interface ParsedSvg {
    viewBox: string;
    elements: Array<SvgElement>;
}
export interface SvgElement {
    type: string;
    attributes: {
        [key: string]: string | number | undefined;
    };
    children: SvgElement[];
    colorAttribute?: string;
}
//# sourceMappingURL=Svg.d.ts.map