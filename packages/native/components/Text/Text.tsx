import React from 'react';
import { Text as RNText, TextStyle as RNTextStyle } from 'react-native';

import { TextTypes, getTextStyle, TextStyle as CoreTextStyle } from '@a-little-world/little-world-design-system';

type TextProps = {
  bold?: boolean;
  center?: boolean;
  color?: string;
  children: React.ReactNode;
  style?: RNTextStyle;
  type?: keyof typeof TextTypes;
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

  if (bold) {
    textStyle.fontWeight = 'bold';
  }

  return <RNText style={[textStyle, style]}>{children}</RNText>;
};

export default Text; 