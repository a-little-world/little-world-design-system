import React, { SVGProps } from 'react';
import { getDefaultProps } from '../getDefaultProps';
import Icon, { IconSvgProps } from '../Icon';

export const ArrowDownIcon = (props: IconSvgProps) => {
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
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="M3 13l17 18 17-18"
        />
      </svg>
    </Icon>
  );
};
