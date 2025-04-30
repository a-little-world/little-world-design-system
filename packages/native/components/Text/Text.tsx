import React from 'react';
import { Text as RNText, TextStyle as RNTextStyle } from 'react-native';

import { TextBaseProps, TextStyle as CoreTextStyle, TextTypes, getTextStyle } from '@a-little-world/little-world-design-system-core';

type TextProps = TextBaseProps & {
  style?: RNTextStyle;
};

const mapCoreStyleToRN = (style: CoreTextStyle): RNTextStyle => ({
  fontSize: style.fontSize * 16, // Convert rem to pixels (1rem = 16px)
  fontWeight: style.fontWeight,
  fontFamily: style.styleType === 'body' ? 'SignikaNegative' : 'WorkSans',
});

const Text = ({
  bold = false,
  center = false,
  children,
  color,
  style,
  type = TextTypes.Body5,
}: TextProps) => {
  const textStyle: RNTextStyle = {
    textAlign: center ? 'center' : 'auto',
    color: color,
    ...mapCoreStyleToRN(getTextStyle(type)),
  };
  console.log({textStyle})

  if (bold) {
    textStyle.fontWeight = 'bold';
  }

  return <RNText style={[textStyle, style]}>{children}</RNText>;
};

export default Text; 