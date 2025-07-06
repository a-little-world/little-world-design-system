import React from 'react';
import { ViewStyle } from 'react-native';

import { Illustration } from './Illustration';
import { createReactNativeSvg } from '../../utils/createReactNativeSvg';
import { IllustrationProps, SvgFactoryOptions, SvgTransformOptions } from '@a-little-world/little-world-design-system-core';
import { SvgProps } from 'react-native-svg';

export const createIllustrationComponent = ({ 
  name, 
  svgData,
}: SvgFactoryOptions) => {
  const Component = ({ 
    height = 24, 
    width = 24, 
    style, 
    color,
    label,
    labelVisible
  }: SvgProps & { style?: ViewStyle, color?: string } & IllustrationProps) => {
    // Create the transform options for React Native SVG
    const svgOptions: SvgTransformOptions = {
      width,
      height,
      style,
      color,
      label
    };
    
    return (
      <Illustration label={label} labelVisible={labelVisible}>
        {createReactNativeSvg(svgData, svgOptions)}
      </Illustration>
    );
  };

  Component.displayName = `${name}Image`;
  
  return Component;
}; 