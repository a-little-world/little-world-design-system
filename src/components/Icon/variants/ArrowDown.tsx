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
        viewBox="0 0 16 11"
      >
        <path
          d="M1.5 1.97656L8 9.97656L14.5 1.97656"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};
