import { FieldErrorBaseProps } from '@a-little-world/little-world-design-system-core';
import React from 'react';
import { StyleProp, ViewStyle, View } from 'react-native';
import Text from '../Text/Text';

export type FieldErrorProps = FieldErrorBaseProps & {
  style?: StyleProp<ViewStyle>;
};

const FieldError: React.FC<FieldErrorProps> = ({
  children,
  visible = false,
  icon,
  style,
}) => {
  if (!visible) {
    return null;
  }

  return (
    <View style={style}>
      {icon && React.isValidElement(icon) && icon}
      {children && <Text>{children as string}</Text>}
    </View>
  );
};

export default FieldError;

