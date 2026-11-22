import React, { CSSProperties, useId } from 'react';

import { Icon, IconSvgProps } from './Icon';

import {
  SvgFactoryOptions,
  SvgTransformOptions,
} from '@a-little-world/little-world-design-system-core';
import { createReactSvg } from '../../utils/createReactSvg';

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
    labelTop,
    labelVisible,
    size: _size,
    style,
    width = 24,
    children: _children,
    ...svgProps
  }: IconSvgProps & { style?: CSSProperties; color?: string }) => {
    // useId() is `:r0:`, `«r0»` or `_r_0_` across React 19. Keep a DOM-safe id.
    const gradientId = `gradient-${useId().replace(/[^A-Za-z0-9_-]/g, '')}`;
    const svgOptions: SvgTransformOptions = {
      color,
      className: circular ? undefined : className,
      gradient,
      gradientId,
      gradientType,
      height,
      label,
      labelVisible,
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
        labelTop={labelTop}
      >
        {createReactSvg(svgData, { ...svgOptions, ...svgProps })}
      </Icon>
    );
  };

  Component.displayName = `${name}Icon`;

  return Component;
};
