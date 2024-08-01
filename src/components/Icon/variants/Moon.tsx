import React from 'react';

import { Icon, IconSvgProps } from '../Icon';
import IconGradient, { GradientTypes } from '../IconGradient';
import { getDefaultIconProps } from '../getDefaultIconProps';

const LABEL_ID = 'MoonIcon';

export const MoonIcon = (props: IconSvgProps) => {
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
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={circular ? undefined : className}
        fill="none"
        viewBox="4 4 22 22"
      >
        <path
          stroke={gradient ? `url(#gradient${id})` : color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20.63 20a9 9 0 0 1-9.12-8.78A8.61 8.61 0 0 1 14.17 5 10.17 10.17 0 0 0 5 15a10.23 10.23 0 0 0 10.42 10A10.43 10.43 0 0 0 25 18.9a9.3 9.3 0 0 1-4.37 1.1Z"
        />

        {gradient && (
          <IconGradient variation={gradient} id={id} type={GradientTypes.v4} />
        )}
      </svg>
    </Icon>
  );
};
