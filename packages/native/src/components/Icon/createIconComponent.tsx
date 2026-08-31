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
    displayNumber,
    displayNumberRight,
    displayNumberTop,
    gradient,
    borderColor,
    circular,
    label,
    labelVisible,
    size,
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
        displayNumber={displayNumber}
        displayNumberRight={displayNumberRight}
        displayNumberTop={displayNumberTop}
        height={height}
        size={size}
        width={width}
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
