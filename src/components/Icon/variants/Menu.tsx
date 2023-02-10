import React from 'react';
import { getDefaultProps } from '../getDefaultProps';
import Icon, { IconSvgProps } from '../Icon';

export const MenuIcon = (props: IconSvgProps) => {
  const { color, height, width, label, labelVisible } = getDefaultProps(props);

  return (
    <Icon label={label} labelVisible={labelVisible}>
      <svg
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
