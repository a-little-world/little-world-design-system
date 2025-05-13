import React from 'react';
import { Defs, LinearGradient, Stop } from 'react-native-svg';
import { GradientTypes, GradientVariations, IconGradientProps } from '@a-little-world/little-world-design-system-core';

const IconGradient = ({
  id,
  variation,
  type = GradientTypes.v1,
}: IconGradientProps) => {
  if (type === GradientTypes.v1)
    return (
      <Defs>
        <LinearGradient
          id={`gradient${id}`}
          x1="1.84595"
          y1="16.9964"
          x2="34.8008"
          y2="16.9964"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={GradientVariations[variation][0]} />
          <Stop offset="1" stopColor={GradientVariations[variation][1]} />
        </LinearGradient>
      </Defs>
    );

  if (type === GradientTypes.v2)
    return (
      <Defs>
        <LinearGradient
          id={`gradient${id}`}
          x1="27.9721"
          y1="99.877"
          x2="116.893"
          y2="99.877"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={GradientVariations[variation][0]} />
          <Stop offset="1" stopColor={GradientVariations[variation][1]} />
        </LinearGradient>
      </Defs>
    );

  if (type === GradientTypes.v3)
    return (
      <Defs>
        <LinearGradient
          id={`gradient${id}`}
          x1="8.6001"
          y1="94.48"
          x2="186.19"
          y2="94.48"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1, 0, 0, 1, 160.535599, 138.286461)"
        >
          <Stop stopColor={GradientVariations[variation][0]} />
          <Stop offset="0.18" stopColor={GradientVariations[variation][2]} />
          <Stop offset="0.55" stopColor={GradientVariations[variation][3]} />
          <Stop offset="0.83" stopColor={GradientVariations[variation][4]} />
          <Stop offset="1" stopColor={GradientVariations[variation][5]} />
        </LinearGradient>
      </Defs>
    );

  if (type === GradientTypes.v4)
    return (
      <LinearGradient
        id={`gradient${id}`}
        x1="0%"
        y1="50%"
        x2="100%"
        y2="50%"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0%" stopColor={GradientVariations[variation][0]} />
        <Stop offset="100%" stopColor={GradientVariations[variation][1]} />
      </LinearGradient>
    );
    
  return null;
};

export default IconGradient;