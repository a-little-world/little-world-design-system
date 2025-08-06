import React, { SVGProps } from 'react';

import { Illustration } from './Illustration';
import { createReactSvg } from '../../utils/createReactSvg';
import { SvgFactoryOptions } from '@a-little-world/little-world-design-system-core';

export const createIllustrationComponent = ({
  name,
  svgData,
}: SvgFactoryOptions) => {
  const Component = ({
    className,
    color,
    height,
    width,
    label,
    labelVisible,
  }: SVGProps<SVGElement> & {
    label: string;
    labelVisible?: boolean;
    color?: string;
  }) => {
    return (
      <Illustration label={label} labelVisible={labelVisible}>
        {createReactSvg(svgData, {
          className,
          label,
          width,
          height,
          color,
        })}
      </Illustration>
    );
  };

  Component.displayName = `${name}Image`;

  return Component;
};
