import React from 'react';
import { getDefaultIconProps } from '../getDefaultIconProps';
import { Icon, IconSvgProps } from '../Icon';
import IconGradient from '../IconGradient';

const LABEL_ID = 'PlusIcon';

export const PlusIcon = (props: IconSvgProps) => {
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
        width={width}
        height={height}
        className={className}
        viewBox="0 0 34 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.56 15.32L14.48 12.44V0.519997C15.1733 0.359999 16.08 0.28 17.2 0.28C18.3733 0.28 19.28 0.359999 19.92 0.519997V12.44C19.92 12.44 19.8933 13.4 19.84 15.32L22.72 15.24H33.68C33.84 15.9867 33.92 16.8667 33.92 17.88C33.92 18.8933 33.84 19.7467 33.68 20.44H22.72L19.84 20.36L19.92 23.16V35.08C19.28 35.24 18.3733 35.32 17.2 35.32C16.08 35.32 15.1733 35.24 14.48 35.08V23.16L14.56 20.36L11.68 20.44H0.72C0.56 19.7467 0.48 18.8933 0.48 17.88C0.48 16.8667 0.56 15.9867 0.72 15.24H11.68L14.56 15.32Z"
          fill={color}
        />
        <defs>
          <linearGradient
            id="paint0_linear_2752_56567"
            x1="-4"
            y1="58.8125"
            x2="68.474"
            y2="32.5804"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={color} />
            <stop offset="1" stopColor={color} />
          </linearGradient>
        </defs>
      </svg>
    </Icon>
  );
};
