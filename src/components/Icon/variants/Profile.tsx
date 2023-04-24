import React from 'react';
import { getDefaultIconProps } from '../getDefaultIconProps';
import { Icon, IconSvgProps } from '../Icon';

const LABEL_ID = 'ProfileIcon';

export const ProfileIcon = (props: IconSvgProps) => {
  const { color, height, width, label, labelVisible } =
    getDefaultIconProps(props);

  return (
    <Icon labelId={LABEL_ID} label={label} labelVisible={labelVisible}>
      <svg
        aria-labelledby={LABEL_ID}
        focusable={false}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="27.97 7.98 125.03 112.43"
      >
        <path
          d="M72.4298 76.946C85.7365 76.946 96.5237 66.1047 96.5237 52.7313C96.5237 39.3579 85.7365 28.5166 72.4298 28.5166C59.1231 28.5166 48.3359 39.3579 48.3359 52.7313C48.3359 66.1047 59.1231 76.946 72.4298 76.946Z"
          fill={color}
        />
        <path
          d="M91.4284 79.7628C90.7705 79.4514 90.0455 79.3106 89.3195 79.3532C88.5935 79.3958 87.8897 79.6204 87.2723 80.0067C82.8158 82.7873 77.6747 84.2607 72.4291 84.2607C67.1836 84.2607 62.0424 82.7873 57.5859 80.0067C56.9697 79.6204 56.2669 79.3957 55.542 79.3531C54.817 79.3105 54.093 79.4514 53.4362 79.7628C46.485 83.0435 40.4922 88.069 36.036 94.3547C31.5798 100.64 28.8105 107.974 27.9952 115.649C27.9364 116.252 28.0039 116.86 28.1934 117.436C28.383 118.011 28.6904 118.54 29.0958 118.988C29.5012 119.437 29.9956 119.795 30.5472 120.04C31.0987 120.285 31.6952 120.41 32.2982 120.409H112.56C113.164 120.411 113.761 120.286 114.313 120.042C114.865 119.797 115.361 119.439 115.767 118.991C116.173 118.542 116.481 118.013 116.671 117.437C116.861 116.861 116.928 116.252 116.869 115.649C116.054 107.974 113.285 100.64 108.829 94.3547C104.372 88.069 98.3797 83.0435 91.4284 79.7628V79.7628Z"
          fill={color}
        />
        <path
          d="M120 8.97656C102.328 8.97656 88 23.0803 88 40.4766C88 50.117 92.4012 58.7442 99.3319 64.5223L97.2056 71.9766H120C137.672 71.9766 152 57.8728 152 40.4766C152 23.0803 137.672 8.97656 120 8.97656Z"
          fill="white"
          stroke={color}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <defs>
          <linearGradient
            id="paint0_linear_6048_73008"
            x1="48.3346"
            y1="52.7306"
            x2="96.5251"
            y2="52.7306"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={color} />
            <stop offset="1" stopColor={color} />
          </linearGradient>
          <linearGradient
            id="paint1_linear_6048_73008"
            x1="27.9721"
            y1="99.877"
            x2="116.893"
            y2="99.877"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={color} />
            <stop offset="1" stopColor={color} />
          </linearGradient>
          <linearGradient
            id="paint2_linear_6048_73008"
            x1="87.9982"
            y1="40.4757"
            x2="152.002"
            y2="40.4757"
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
