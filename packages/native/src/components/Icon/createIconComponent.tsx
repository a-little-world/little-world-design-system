import React from "react";
import { ViewStyle } from "react-native";

import { Icon, IconSvgProps } from "./Icon";
import { createReactNativeSvg } from "../../utils/createReactNativeSvg";
import {
  SvgFactoryOptions,
  SvgTransformOptions,
} from "@a-little-world/little-world-design-system-core";

export const createIconComponent = ({
  name,
  svgData,
  iconHeight = 24,
  iconWidth = 24,

}: SvgFactoryOptions
  & {
    iconHeight?: number;
    iconWidth?: number;
  }
) => {
  const gradientId = `${name} gradientId`;

  const Component = ({
    height = iconHeight,
    width = iconWidth,
    style,
    color,
    backgroundColor,
    gradient,
    borderColor,
    circular,
    label,
    labelVisible,
  }: IconSvgProps & { style?: ViewStyle; color?: string }) => {
    // Create the transform options for React Native SVG
    const svgOptions: SvgTransformOptions = {
      width,
      height,
      style,
      label,
      color,
      gradient,
      gradientId,
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
        {createReactNativeSvg(svgData, svgOptions)}
      </Icon>
    );
  };

  Component.displayName = `${name}Icon`;

  return Component;
};
