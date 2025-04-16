import React from 'react';

import { Icon, IconSvgProps } from '../Icon';
import IconGradient, { GradientTypes } from '../IconGradient';
import { getDefaultIconProps } from '../getDefaultIconProps';

const LABEL_ID = 'HeartIcon';

export const HeartIcon = (props: IconSvgProps) => {
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
        viewBox="4.25 0 503.5 512"
      >
        <g>
          <path
            fill={gradient ? `url(#gradient${id})` : color}
            d="M456.795,27.9c-74.557-59.281-178.762-17.77-200.801,65.114C233.954,10.13,129.758-31.381,55.202,27.9   c-71.446,56.823-65.676,169.955,4.27,260.67c64.627,83.824,165.602,164.591,192.814,220.66c1.077,2.236,3.506,2.77,3.709,2.77   c0.211,0,2.641-0.534,3.727-2.77c27.192-56.069,128.168-136.836,192.804-220.66C522.48,197.856,528.24,84.723,456.795,27.9z"
          />
        </g>
        {gradient && (
          <IconGradient variation={gradient} id={id} type={GradientTypes.v4} />
        )}
      </svg>
    </Icon>
  );
};
