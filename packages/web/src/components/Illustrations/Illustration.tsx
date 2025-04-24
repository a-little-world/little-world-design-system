import React, { SVGProps } from 'react';

import { ImageLabel } from '../Icon/Icon';

type IllustrationProps = {
  label: string;
  labelTop?: string;
  labelVisible?: boolean;
  children: any;
  labelId: string;
};

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
