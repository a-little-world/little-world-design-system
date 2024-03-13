import React from 'react';

import { Icon, IconSvgProps } from '../Icon';
import IconGradient from '../IconGradient';
import { getDefaultIconProps } from '../getDefaultIconProps';

const LABEL_ID = 'SendIcon';

export const SendIcon = (props: IconSvgProps) => {
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
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_4_2121)">
          <path
            d="M3 13.0001H9V11.0001H3V1.84611C3.00001 1.75922 3.02267 1.67384 3.06573 1.59838C3.1088 1.52291 3.17078 1.45997 3.24558 1.41576C3.32037 1.37155 3.4054 1.34759 3.49227 1.34625C3.57915 1.34491 3.66487 1.36623 3.741 1.40811L22.203 11.5621C22.2814 11.6053 22.3468 11.6687 22.3923 11.7457C22.4378 11.8228 22.4618 11.9106 22.4618 12.0001C22.4618 12.0896 22.4378 12.1774 22.3923 12.2545C22.3468 12.3315 22.2814 12.3949 22.203 12.4381L3.741 22.5921C3.66487 22.634 3.57915 22.6553 3.49227 22.654C3.4054 22.6526 3.32037 22.6287 3.24558 22.5844C3.17078 22.5402 3.1088 22.4773 3.06573 22.4018C3.02267 22.3264 3.00001 22.241 3 22.1541V13.0001Z"
            fill={gradient ? `url(#gradient${id})` : color}
          />
        </g>
        <defs>
          <clipPath id="clip0_4_2121">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>

        {gradient && <IconGradient variation={gradient} id={id} />}
      </svg>
    </Icon>
  );
};
