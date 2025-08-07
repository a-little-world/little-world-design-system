import React from 'react';
import { ViewStyle } from 'react-native';

import { Icon, IconSvgProps } from './Icon';
import { createReactNativeSvg } from '../../utils/createReactNativeSvg';
import {
  SvgFactoryOptions,
  SvgTransformOptions,
} from '@a-little-world/little-world-design-system-core';

export const createIconComponent = ({
  name,
  svgData,
  gradientType,
}: SvgFactoryOptions) => {
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
    const gradientId = label
      ? `gradient-${label.replace(/\s/g, '')}`
      : 'gradient-icon-needs-label';
    const svgOptions: SvgTransformOptions = {
      width,
      height,
      style,
      label,
      color,
      gradient,
      gradientId,
      gradientType,
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
