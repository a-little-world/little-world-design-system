import React from 'react';

import { Icon, IconSvgProps } from '../Icon';
import IconGradient from '../IconGradient';
import { getDefaultIconProps } from '../getDefaultIconProps';

const LABEL_ID = 'DownloadIcon';

export const DownloadIcon = (props: IconSvgProps) => {
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
        viewBox="0 0 48 48"
      >
        <path
          d="M42 30V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V30M14 20L24 30M24 30L34 20M24 30V6"
          stroke={gradient ? `url(#gradient${id})` : color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {gradient && <IconGradient variation={gradient} id={id} />}
      </svg>
    </Icon>
  );
};
