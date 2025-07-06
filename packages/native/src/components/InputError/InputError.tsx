import React from 'react';
import { View, Text, ViewStyle, TextStyle } from 'react-native';
import { InputErrorBaseProps } from '@a-little-world/little-world-design-system-core';
import { css, useTheme } from 'styled-components/native';

export const INPUT_ERROR_CSS = css`
  border: 1px solid ${({ theme }) => theme.color.border.error};
`;

const InputError: React.FC<InputErrorBaseProps> = ({
  children,
  top,
  bottom,
  right,
  left,
  visible = true,
  textAlign = 'left',
}) => {
  const theme = useTheme();
  if (!visible) return null;

  const containerStyle: ViewStyle = {
    position: 'absolute',
    top: top ? Number(top) : undefined,
    bottom: bottom ? Number(bottom) : undefined,
    right: right ? Number(right) : undefined,
    left: left ? Number(left) : undefined,
  };

  const textStyle: TextStyle = {
    color: theme.color.text.error,
    textAlign,
  };

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{children}</Text>
    </View>
  );
};

export default InputError;
