import React from 'react';

import { Icon, IconSvgProps } from '../Icon';
import { createReactNativeSvg } from '../../../utils/createReactNativeSvg';
import { instagramIcon } from '@a-little-world/little-world-design-system-core';

const LABEL_ID = 'InstagramIcon';

const InstagramIcon = (props: IconSvgProps) => {
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
      {createReactNativeSvg(instagramIcon, {
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

export default InstagramIcon;
