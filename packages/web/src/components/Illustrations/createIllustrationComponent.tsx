import React from 'react';

import { Illustration, SvgProps } from './Illustration';
import { createReactSvg } from '../../utils/createReactSvg';
import { SvgFactoryOptions } from '@a-little-world/little-world-design-system-core';

export const createIllustrationComponent = ({ 
  name, 
  svgData, 
  labelText 
}: SvgFactoryOptions) => {
  const LABEL_ID = `${labelText || name} Illustration`;
  
  const Component = ({ height, width }: SvgProps) => {
    return (
      <Illustration labelId={LABEL_ID} label={LABEL_ID} labelVisible={false}>
        {createReactSvg(svgData, {
          width,
          height,
        })}
      </Illustration>
    );
  };

  Component.displayName = `${name}Image`;
  
  return Component;
}; 