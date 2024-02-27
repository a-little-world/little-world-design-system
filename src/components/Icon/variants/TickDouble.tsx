import React from 'react';

import { Icon, IconSvgProps } from '../Icon';
import IconGradient from '../IconGradient';
import { getDefaultIconProps } from '../getDefaultIconProps';

const LABEL_ID = 'TickDouble';

export const TickDoubleIcon = (props: IconSvgProps) => {
  const {
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
      circular={circular}
      className={className}
      color={color}
      labelId={labelId || LABEL_ID}
      label={label}
      labelVisible={labelVisible}
    >
      <svg
        aria-labelledby={labelId || LABEL_ID}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={circular ? undefined : className}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M11.602 13.76L13.014 15.172L21.48 6.706L22.894 8.12L13.014 18L6.65 11.636L8.064 10.222L10.189 12.347L11.602 13.759V13.76ZM11.604 10.932L16.556 5.979L17.966 7.389L13.014 12.342L11.604 10.932ZM8.777 16.587L7.364 18L1 11.636L2.414 10.222L3.827 11.635L3.826 11.636L8.777 16.587Z"
          fill={gradient ? `url(#gradient${id})` : color}
        />
        {gradient && <IconGradient variation={gradient} id={id} />}
      </svg>
    </Icon>
  );
};
