import React from 'react';
import { getDefaultIconProps } from '../getDefaultIconProps';
import { Icon, IconSvgProps } from '../Icon';

const LABEL_ID = 'MenuIcon';

export const MenuIcon = (props: IconSvgProps) => {
  const { color, height, width, label, labelVisible } =
    getDefaultIconProps(props);

  return (
    <Icon labelId={LABEL_ID} label={label} labelVisible={labelVisible}>
      <svg
        aria-labelledby={LABEL_ID}
        focusable={false}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 40 40"
      >
        <path
          vectorEffect="non-scaling-stroke"
          stroke={color}
          strokeLinecap="round"
          d="M2.5 5.5h35M2.5 19.5h35M2.5 34.5h35"
        />
      </svg>
    </Icon>
  );
};
