import React from 'react';

import { Icon, IconSvgProps } from '../Icon';
import IconGradient from '../IconGradient';
import { getDefaultIconProps } from '../getDefaultIconProps';

const LABEL_ID = 'Telegram';

export const Telegram = (props: IconSvgProps) => {
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
  console.log('WHATPSAPP');
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
        fill={color}
      >
        <rect
          width="512"
          height="512"
          rx="15%"
          fill={color !== 'currentColor' ? color : '#37aee2'}
        />

        <path fill="#c8daea" d="M199 404c-11 0-10-4-13-14l-32-105 245-144" />
        <path fill="#a9c9dd" d="M199 404c7 0 11-4 16-8l45-43-56-34" />
        <path
          fill="#f6fbfe"
          d="M204 319l135 99c14 9 26 4 30-14l55-258c5-22-9-32-24-25L79 245c-21 8-21 21-4 26l83 26 190-121c9-5 17-3 11 4"
        />

        {gradient && <IconGradient variation={gradient} id={id} />}
      </svg>
    </Icon>
  );
};
