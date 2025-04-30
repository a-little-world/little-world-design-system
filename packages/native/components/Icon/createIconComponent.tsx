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
  labelText,
}: SvgFactoryOptions) => {
  const LABEL_ID = `${labelText || name} Icon`;

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
  }: IconSvgProps & { style?: ViewStyle; color?: string }) => {
    // Create the transform options for React Native SVG
    const svgOptions: SvgTransformOptions = {
      width,
      height,
      style,
      color,
      labelId: LABEL_ID,
      gradient,
      gradientId: LABEL_ID,
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

  Component.displayName = `${name}Image`;

  return Component;
};
