import React from 'react';

import { ImageLabel } from '../Icon/Icon';
import { IllustrationProps } from '@a-little-world/little-world-design-system-core';

export const Illustration = ({
  children,
  label,
  labelVisible,
  labelTop = '56px',
}: IllustrationProps) => (
  <>
    {children}
    <ImageLabel id={label} $visible={labelVisible} $top={labelTop}>
      {label}
    </ImageLabel>
  </>
);
