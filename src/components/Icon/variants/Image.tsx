import React from 'react';
import { getDefaultIconProps } from '../getDefaultIconProps';
import { Icon, IconSvgProps } from '../Icon';
import IconGradient from '../IconGradient';

const LABEL_ID = 'ImageIcon';

export const ImageIcon = (props: IconSvgProps) => {
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
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="4.83 5.31 23.33 23.33"
      >
        <path
          d="M20.5 11.6436H20.5133"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.1663 6.30957H9.83301C7.62387 6.30957 5.83301 8.10043 5.83301 10.3096V23.6429C5.83301 25.852 7.62387 27.6429 9.83301 27.6429H23.1663C25.3755 27.6429 27.1663 25.852 27.1663 23.6429V10.3096C27.1663 8.10043 25.3755 6.30957 23.1663 6.30957Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.83301 20.9765L11.1663 15.6432C11.7744 15.058 12.4642 14.75 13.1663 14.75C13.8685 14.75 14.5583 15.058 15.1663 15.6432L21.833 22.3098"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.167 19.6435L20.5003 18.3102C21.1084 17.725 21.7982 17.417 22.5003 17.417C23.2025 17.417 23.8922 17.725 24.5003 18.3102L27.167 20.9768"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};
