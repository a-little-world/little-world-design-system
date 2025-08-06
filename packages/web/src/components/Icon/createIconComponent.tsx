import React, { CSSProperties } from "react";

import { Icon, IconSvgProps } from "./Icon";

import {
  SvgFactoryOptions,
  SvgTransformOptions,
} from "@a-little-world/little-world-design-system-core";
import { createReactSvg } from "../../utils/createReactSvg";

export const createIconComponent = ({
  name,
  svgData,
  gradientType,
}: SvgFactoryOptions) => {
  const Component = ({
    backgroundColor,
    borderColor,
    circular,
    className,
    color,
    gradient,
    height = 24,
    label,
    labelVisible,
    style,
    width = 24,
  }: IconSvgProps & { style?: CSSProperties; color?: string }) => {
    const gradientId = `gradient-${label.replace(/\s/g, '')}`;
    const svgOptions: SvgTransformOptions = {
      color,
      className: circular ? undefined : className,
      gradient,
      gradientId,
      gradientType,
      height,
      label,
      style,
      width,
    };
  
    return (
      <Icon
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        circular={circular}
        className={className}
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
