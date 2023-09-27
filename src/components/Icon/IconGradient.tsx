import React from 'react';

const GradientVariations = {
  blue: ['#36A9E0', '#0367B2'],
  orange: ['#F28D00', '#f6cf87', '#F6AA47', '#F8B663', '#F9BA6E'],
};

export enum Gradients {
  Blue = 'blue',
  Orange = 'orange',
}

export type IconGradientProps = {
  id: string;
  variation: Gradients;
};

const IconGradient = ({ id, variation }: IconGradientProps) => (
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

/* <stop stopColor={GradientVariations[color][0]} />
      <stop offset="0.18" stopColor={GradientVariations[color][1]} />
      <stop offset="0.55" stopColor={GradientVariations[color][2]} />
      <stop offset="0.83" stopColor={GradientVariations[color][3]} />
      <stop offset="1" stopColor={GradientVariations[color][4]} /> */

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
