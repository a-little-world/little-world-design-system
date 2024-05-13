import React from 'react';

import { Icon, IconSvgProps } from '../Icon';
import IconGradient, { GradientTypes } from '../IconGradient';
import { getDefaultIconProps } from '../getDefaultIconProps';

const LABEL_ID = 'SunIcon';

export const SunIcon = (props: IconSvgProps) => {
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
        viewBox="0.26 0.26 7.94 7.94"
      >
        <path
          d="M4.182 290.656c-1.162 0-2.11.95-2.11 2.112 0 1.161.948 2.109 2.11 2.109s2.109-.948 2.109-2.11a2.115 2.115 0 0 0-2.11-2.11zm0 .53c.876 0 1.58.706 1.58 1.582 0 .875-.704 1.58-1.58 1.58-.876 0-1.58-.705-1.58-1.58 0-.876.704-1.582 1.58-1.582zM4.15 288.795a.265.265 0 0 0-.234.267v1.06a.265.265 0 1 0 .53 0v-1.06a.265.265 0 0 0-.296-.267zM4.178 295.145a.265.265 0 0 0-.262.267v1.059a.265.265 0 1 0 .53 0v-1.059a.265.265 0 0 0-.268-.267zM6.879 292.502a.265.265 0 1 0 0 .53h1.059a.265.265 0 1 0 0-.53zM.53 292.502a.265.265 0 1 0 0 .53h1.058a.265.265 0 1 0 0-.53zM6.023 294.371a.265.265 0 0 0-.158.453l.748.748a.265.265 0 1 0 .375-.373l-.748-.748a.265.265 0 0 0-.217-.08zM1.533 289.88a.265.265 0 0 0-.158.454l.748.748a.265.265 0 1 0 .375-.373l-.748-.748a.265.265 0 0 0-.217-.08zM6.795 289.88a.265.265 0 0 0-.182.081l-.748.748a.265.265 0 1 0 .375.373l.748-.748a.265.265 0 0 0-.193-.453zM2.305 294.371a.265.265 0 0 0-.182.08l-.748.748a.265.265 0 1 0 .375.373l.748-.748a.265.265 0 0 0-.193-.453z"
          overflow="visible"
          fill={gradient ? `url(#gradient${id})` : color}
          transform="translate(0 -288.533)"
        />

        {gradient && (
          <IconGradient variation={gradient} id={id} type={GradientTypes.v2} />
        )}
      </svg>
    </Icon>
  );
};
