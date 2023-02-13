import React from 'react';
import { getDefaultIconProps } from '../getDefaultIconProps';
import { Icon, IconSvgProps } from '../Icon';

const LABEL_ID = 'ArrowDownIcon';

export const ArrowDownIcon = (props: IconSvgProps) => {
  const { color, height, width, label, labelVisible } =
    getDefaultIconProps(props);

  return (
    <Icon labelId={LABEL_ID} label={label} labelVisible={labelVisible}>
      <svg
        aria-labelledby={LABEL_ID}
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
