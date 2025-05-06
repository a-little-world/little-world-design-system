import React from 'react';
import { View } from 'react-native';
import { IllustrationProps } from '@a-little-world/little-world-design-system-core';

import { ImageLabel } from '../Icon/Icon';

export const Illustration = ({
  children,
  label,
  labelVisible,
  labelTop = '56px',
}: IllustrationProps) => (
  <View>
    {children}
    {labelVisible && <ImageLabel top={labelTop}>{label}</ImageLabel>}
  </View>
);
