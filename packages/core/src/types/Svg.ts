export enum Gradients {
  Blue = "blue",
  Orange = "orange",
}

export enum GradientTypes {
  v1 = "v1",
  v2 = "v2",
  v3 = "v3",
  v4 = "v4",
}

export const GradientVariations = {
  blue: ["#36A9E0", "#0367B2", "#2c9cd7", "#1f8acb", "#1881c4", "#127abf"],
  orange: ["#F28D00", "#f6cf87", "#F49718", "#F6AA47", "#F8B663", "#F9BA6E"],
};

export interface IconBaseProps {
  backgroundColor?: string;
  borderColor?: string;
  children?: React.ReactNode;
  circular?: boolean;
  className?: string;
  color?: string;
  gradient?: Gradients;
  height?: number | string;
  label?: string;
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
  labelTop?: string;
  labelVisible?: boolean;
  children: any;
  labelId: string;
};

export type SvgFactoryOptions = {
  name: string;
  svgData: ParsedSvg;
  labelText?: string;
  gradient?: GradientTypes;
};


export interface SvgTransformOptions {
  className?: string;
  color?: string;
  gradient?: string;
  gradientId?: string;
  height?: number | string;
  labelId?: string;
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
}
