import {
  GradientTypes,
  GradientVariations,
  IconGradientProps,
} from "@a-little-world/little-world-design-system-core";
import React from "react";

const IconGradient = ({
  id,
  variation,
  type = GradientTypes.v1,
}: IconGradientProps) => {
  if (type === GradientTypes.v1)
    return (
      <linearGradient
        id={id}
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0%" stopColor={GradientVariations[variation][0]} />
        <stop offset="33%" stopColor={GradientVariations[variation][0]} />
        <stop offset="100%" stopColor={GradientVariations[variation][1]} />
      </linearGradient>
    );

  if (type === GradientTypes.v2)
    return (
      <defs>
        <linearGradient
          id={id}
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
          id={id}
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

export default IconGradient;
