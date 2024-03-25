import React from 'react';

import { Icon, IconSvgProps } from '../Icon';
import IconGradient from '../IconGradient';
import { getDefaultIconProps } from '../getDefaultIconProps';

const LABEL_ID = 'SwapIcon';

export const SwapIcon = (props: IconSvgProps) => {
  const {
    backgroundColor,
    borderColor,
    circular,
    className,
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
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      circular={circular}
      className={className}
      color={color}
      labelId={labelId || LABEL_ID}
      label={label}
      labelVisible={labelVisible}
    >
      <svg
        aria-labelledby={labelId || LABEL_ID}
        focusable={false}
        width={width}
        height={height}
        className={circular ? undefined : className}
        viewBox="0.75 0.25 11.5 13.5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5 3.57143L1.5 3.57143M1.5 3.57143L4.22727 6.14286M1.5 3.57143L4.22727 1M1.5 10.4286L11.5 10.4286M11.5 10.4286L8.77273 13M11.5 10.4286L8.77273 7.85714"
          fill={gradient ? `url(#gradient${id})` : color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {gradient && <IconGradient variation={gradient} id={id} />}
      </svg>
    </Icon>
  );
};
