import React from 'react';
import { ViewStyle } from 'react-native';

import { Illustration, SvgProps } from './Illustration';
import { createReactNativeSvg } from '../../utils/createReactNativeSvg';
import { SvgFactoryOptions, SvgTransformOptions } from '@a-little-world/little-world-design-system-core';

export const createIllustrationComponent = ({ 
  name, 
  svgData, 
  labelText 
}: SvgFactoryOptions) => {
  const LABEL_ID = `${labelText || name} Illustration`;
  
  const Component = ({ 
    height = 24, 
    width = 24, 
    style, 
    color 
  }: SvgProps & { style?: ViewStyle, color?: string }) => {
    // Create the transform options for React Native SVG
    const svgOptions: SvgTransformOptions = {
      width,
      height,
      style,
      color,
      labelId: LABEL_ID
    };
    
    return (
      <Illustration labelId={LABEL_ID} label={LABEL_ID} labelVisible={false}>
        {createReactNativeSvg(svgData, svgOptions)}
      </Illustration>
    );
  };

  Component.displayName = `${name}Image`;
  
  return Component;
}; 