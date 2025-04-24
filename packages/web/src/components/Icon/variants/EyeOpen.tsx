import React from "react";

import { Icon, IconSvgProps } from "../Icon";
import { getDefaultIconProps } from "../getDefaultIconProps";
import { createReactSvg } from "../../../utils/createReactSvg";
import { eyeOpenIcon } from "@a-little-world/little-world-design-system-core";

const LABEL_ID = "EyeOpenIcon";

export const EyeOpenIcon = (props: IconSvgProps) => {
  const {
    backgroundColor,
    borderColor,
    circular,
    className,
    color,
    height,
    gradient,
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
      labelId={id}
      label={label}
      labelVisible={labelVisible}
    >
      {createReactSvg(eyeOpenIcon, {
        width,
        height,
        color,
        gradient,
        gradientId: id,
        className: circular ? undefined : className,
        labelId: labelId || LABEL_ID,
      })}
    </Icon>
  );
};
