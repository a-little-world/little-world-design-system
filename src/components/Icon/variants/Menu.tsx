import React from 'react';
import { getDefaultIconProps } from '../getDefaultIconProps';
import { Icon, IconSvgProps } from '../Icon';
import IconGradient from '../IconGradient';

const LABEL_ID = 'MenuIcon';

export const MenuIcon = (props: IconSvgProps) => {
  const {
    circular,
    color,
    gradient,
    height,
    width,
    label,
    labelId,
    labelVisible,
  } = getDefaultIconProps(props);
  const id = LABEL_ID + labelId;

  return (
    <Icon
      circular={circular}
      color={color}
      labelId={labelId || LABEL_ID}
      label={label}
      labelVisible={labelVisible}
    >
      <svg
        aria-labelledby={labelId || LABEL_ID}
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
