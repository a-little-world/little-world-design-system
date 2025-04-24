import React from "react";

import { Icon, IconSvgProps } from "../Icon";
import { getDefaultIconProps } from "../getDefaultIconProps";
import { createReactSvg } from "../../../utils/createReactSvg";
import { linkedinIcon } from "@a-little-world/little-world-design-system-core";

const LABEL_ID = "Linkedin";

export const Linkedin = (props: IconSvgProps) => {
  const {
    backgroundColor,
    borderColor,
    circular,
    className,
    color,
    gradient,
    height,
    label,
    labelId,
    labelVisible,
    width,
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
      {createReactSvg(linkedinIcon, {
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
