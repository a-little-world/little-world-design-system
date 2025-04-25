import React, { SVGProps } from 'react';

import { ImageLabel } from '../Icon/Icon';
import { IllustrationProps } from '@a-little-world/little-world-design-system-core';

export type SvgProps = SVGProps<SVGElement>;

export const Illustration = ({
  children,
  label,
  labelVisible,
  labelTop = '56px',
  labelId,
}: IllustrationProps) => (
  <>
    {children}
    <ImageLabel id={labelId} $visible={labelVisible} $top={labelTop}>
      {label}
    </ImageLabel>
  </>
);
