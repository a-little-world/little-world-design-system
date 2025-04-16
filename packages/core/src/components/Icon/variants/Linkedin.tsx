import React from 'react';

import { Icon, IconSvgProps } from '../Icon';
import IconGradient, { GradientTypes } from '../IconGradient';
import { getDefaultIconProps } from '../getDefaultIconProps';

const LABEL_ID = 'Linkedin';

export const Linkedin = (props: IconSvgProps) => {
  const {
    backgroundColor,
    borderColor,
    circular,
    className,
    color,
    gradient,
    height,
    label,
    labelId,
    labelVisible,
    width,
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
        height={height}
        width={width}
        className={circular ? undefined : className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="#FFF"
      >
        <rect
          width="512"
          height="512"
          rx="15%"
          fill={
            gradient
              ? `url(#gradient${id})`
              : color !== 'currentColor'
              ? color
              : '#0077b5'
          }
        />
        <circle cx="142" cy="138" r="37" />
        <path stroke="#FFF" strokeWidth="66" d="M244 194v198M142 194v198" />
        <path d="M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32" />
        {gradient && (
          <IconGradient variation={gradient} id={id} type={GradientTypes.v4} />
        )}
      </svg>
    </Icon>
  );
};
