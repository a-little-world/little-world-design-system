import React from 'react';
import { View } from 'react-native';
import { SvgProps as RNSvgProps } from 'react-native-svg';
import { IllustrationProps } from '@a-little-world/little-world-design-system-core';

import { ImageLabel } from '../Icon/Icon';

// Export SvgProps that's compatible with react-native-svg
export type SvgProps = RNSvgProps;

export const Illustration = ({
  children,
  label,
  labelVisible,
  labelTop = '56px',
  labelId,
}: IllustrationProps) => (
  <View>
    {children}
    <ImageLabel id={labelId} $visible={labelVisible} $top={labelTop}>
      {label}
    </ImageLabel>
  </View>
);
