import React from "react";

import { Icon, IconSvgProps } from "../Icon";
import { getDefaultIconProps } from "../getDefaultIconProps";
import { inclusiveIcon } from "@a-little-world/little-world-design-system-core";
import { createReactSvg } from "../../../utils/createReactSvg";

const LABEL_ID = "ChevronRightIcon";

export const InclusiveIcon = (props: IconSvgProps) => {
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
      {createReactSvg(inclusiveIcon, {
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
