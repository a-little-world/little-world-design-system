import React from 'react';

import { Icon, IconSvgProps } from '../Icon';
import IconGradient from '../IconGradient';
import { getDefaultIconProps } from '../getDefaultIconProps';

const LABEL_ID = 'StarIcon';

export const StartIcon = (props: IconSvgProps) => {
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
        fill="none"
        focusable={false}
        width={width}
        height={height}
        className={circular ? undefined : className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 17 16"
      >
        <path
          d="M8.50141 12.4584L3.84799 15.3005L5.11307 9.99633L0.972656 6.44966L6.40745 6.01425L8.50141 0.979248L10.5954 6.01425L16.0309 6.44966L11.8897 9.99633L13.1548 15.3005L8.50141 12.4584Z"
          fill={gradient ? `url(#gradient${id})` : color}
        />

        {gradient && <IconGradient variation={gradient} id={id} />}
      </svg>
    </Icon>
  );
};
