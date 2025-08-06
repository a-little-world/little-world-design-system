import React from 'react';
import { View } from 'react-native';
import {
  IllustrationProps,
  tokens,
} from '@a-little-world/little-world-design-system-core';

import { ImageLabel } from '../Icon/Icon';

export const Illustration = ({
  children,
  label,
  labelVisible,
  labelTop = tokens.spacing.xxlarge,
}: IllustrationProps) => (
  <View>
    {children}
    {labelVisible && <ImageLabel top={labelTop as number}>{label}</ImageLabel>}
  </View>
);
