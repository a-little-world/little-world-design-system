import React, { SVGProps } from 'react';

import { Illustration } from './Illustration';
import { createReactSvg } from '../../utils/createReactSvg';
import {
  Gradients,
  SvgFactoryOptions,
} from '@a-little-world/little-world-design-system-core';

type IllustrationComponentProps = SVGProps<SVGSVGElement> & {
  backgroundColor?: string;
  borderColor?: string;
  circular?: boolean;
  color?: string;
  gradient?: Gradients;
  label?: string;
  labelTop?: number | string;
  labelVisible?: boolean;
  size?: number | string;
};

export const createIllustrationComponent = ({
  name,
  svgData,
}: SvgFactoryOptions) => {
  const Component = ({
    backgroundColor: _backgroundColor,
    borderColor: _borderColor,
    circular: _circular,
    className,
    color,
    gradient: _gradient,
    height,
    label,
    labelTop,
    labelVisible,
    size: _size,
    style: _style,
    width,
    children: _children,
    ...svgProps
  }: IllustrationComponentProps) => {
    return (
      <Illustration
        label={label}
        labelVisible={labelVisible}
        labelTop={labelTop}
      >
        {createReactSvg(svgData, {
          className,
          label,
          labelVisible,
          width,
          height,
          color,
          ...svgProps,
        })}
      </Illustration>
    );
  };

  Component.displayName = `${name}Image`;

  return Component;
};
