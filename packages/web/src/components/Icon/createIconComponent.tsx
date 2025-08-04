import React, { CSSProperties } from "react";

import { Icon, IconSvgProps } from "./Icon";

import {
  GradientTypes,
  SvgFactoryOptions,
  SvgTransformOptions,
} from "@a-little-world/little-world-design-system-core";
import { createReactSvg } from "../../utils/createReactSvg";

export const createIconComponent = ({
  name,
  svgData,
  gradientType,
}: SvgFactoryOptions) => {
  const gradientId = `gradient-${name}`;

  const Component = ({
    height = 24,
    width = 24,
    style,
    color,
    backgroundColor,
    gradient,
    borderColor,
    circular,
    label,
    labelVisible,
  }: IconSvgProps & { style?: CSSProperties; color?: string }) => {
    
    const svgOptions: SvgTransformOptions = {
      width,
      height,
      style,
      label,
      color,
      gradient,
      gradientId,
      gradientType
    };
  
    return (
      <Icon
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        circular={circular}
        style={style}
        color={color}
        label={label}
        labelVisible={labelVisible}
      >
        {createReactSvg(svgData, svgOptions)}
      </Icon>
    );
  };

  Component.displayName = `${name}Icon`;

  return Component;
};
