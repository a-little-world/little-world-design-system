import React from 'react';

const GradientVariations = {
  blue: ['#36A9E0', '#0367B2', '#2c9cd7', '#1f8acb', '#1881c4', '#127abf'],
  orange: ['#F28D00', '#f6cf87', '#F49718', '#F6AA47', '#F8B663', '#F9BA6E'],
};

export enum Gradients {
  Blue = 'blue',
  Orange = 'orange',
}

export enum GradientTypes {
  v1 = 'v1',
  v2 = 'v2',
  v3 = 'v3',
}

export type IconGradientProps = {
  id: string;
  variation: Gradients;
  type?: GradientTypes;
};

const IconGradient = ({
  id,
  variation,
  type = GradientTypes.v1,
}: IconGradientProps) => {
  if (type === GradientTypes.v1)
    return (
      <defs>
        <linearGradient
          id={`gradient${id}`}
          x1="1.84595"
          y1="16.9964"
          x2="34.8008"
          y2="16.9964"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={GradientVariations[variation][0]} />
          <stop offset="1" stopColor={GradientVariations[variation][1]} />
        </linearGradient>
      </defs>
    );

  if (type === GradientTypes.v2)
    return (
      <defs>
        <linearGradient
          id={`gradient${id}`}
          x1="27.9721"
          y1="99.877"
          x2="116.893"
          y2="99.877"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={GradientVariations[variation][0]} />
          <stop offset="1" stopColor={GradientVariations[variation][1]} />
        </linearGradient>
      </defs>
    );

  if (type === GradientTypes.v3)
    return (
      <defs>
        <linearGradient
          id={`gradient${id}`}
          x1="8.6001"
          y1="94.48"
          x2="186.19"
          y2="94.48"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1, 0, 0, 1, 160.535599, 138.286461)"
        >
          <stop stopColor={GradientVariations[variation][0]} />
          <stop offset="0.18" stopColor={GradientVariations[variation][2]} />
          <stop offset="0.55" stopColor={GradientVariations[variation][3]} />
          <stop offset="0.83" stopColor={GradientVariations[variation][4]} />
          <stop offset="1" stopColor={GradientVariations[variation][5]} />
        </linearGradient>
      </defs>
    );
  return <></>;
};

// <defs>
//   <linearGradient
//     id="paint0_linear_2203_49928"
//     x1="4.25"
//     y1="24.8438"
//     x2="29.5625"
//     y2="3.75"
//     gradientUnits="userSpaceOnUse"
//   >
//     <stop stopColor={isCurrentColor ? '#36A9E0' : color} />
//     <stop offset="1" stopColor={isCurrentColor ? '#0367B2' : color} />
//   </linearGradient>
// </defs>;

export default IconGradient;
