import React from 'react';

import { Icon, IconSvgProps } from '../Icon';
import { createReactNativeSvg } from '../../../utils/createReactNativeSvg';
import { linkedinIcon } from '@a-little-world/little-world-design-system-core';

const LABEL_ID = 'LinkedinIcon';

const LinkedinIcon = (props: IconSvgProps) => {
  const {
    backgroundColor,
    borderColor,
    circular,
    color,
    gradient,
    height,
    width,
    label,
    labelVisible,
    style,
  } = props;
  
  const id = LABEL_ID;

  return (
    <Icon
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      circular={circular}
      style={style}
      color={color}
      label={label}
      labelVisible={labelVisible}
    >
      {createReactNativeSvg(linkedinIcon, {
        width,
        height,
        color,
        gradient,
        gradientId: id,
        style
      })}
    </Icon>
  );
};

export default LinkedinIcon;
