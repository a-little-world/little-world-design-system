import React from 'react';

import { Icon, IconSvgProps } from '../Icon';
import IconGradient, { GradientTypes } from '../IconGradient';
import { getDefaultIconProps } from '../getDefaultIconProps';

const LABEL_ID = 'VideoIcon';

export const VideoIcon = (props: IconSvgProps) => {
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
        viewBox="10.94 52.66 202.91 113.65"
      >
        <path
          d="M143.49 52.6602H36.3599C22.3209 52.6602 10.9399 64.0411 10.9399 78.0802V140.89C10.9399 154.929 22.3209 166.31 36.3599 166.31H143.49C157.529 166.31 168.91 154.929 168.91 140.89V78.0802C168.91 64.0411 157.529 52.6602 143.49 52.6602Z"
          fill={gradient ? `url(#gradient${id})` : color}
        />
        <path
          d="M209.23 149.54L168.91 132.12V90.3699L209.23 72.9399C211.51 71.9399 213.85 74.2599 213.85 77.4999V145C213.85 148.23 211.51 150.53 209.23 149.54Z"
          fill={gradient ? `url(#gradient${id})` : color}
        />
        <path
          d="M83.18 74.0996H34.26C32.5755 74.0996 31.21 75.4651 31.21 77.1496V78.2896C31.21 79.9741 32.5755 81.3396 34.26 81.3396H83.18C84.8644 81.3396 86.23 79.9741 86.23 78.2896V77.1496C86.23 75.4651 84.8644 74.0996 83.18 74.0996Z"
          fill="white"
        />
        {gradient && (
          <IconGradient variation={gradient} id={id} type={GradientTypes.v2} />
        )}
      </svg>
    </Icon>
  );
};
