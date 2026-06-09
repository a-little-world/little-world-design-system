import React from 'react';
import { StyleProp, ViewStyle, View } from 'react-native';

export interface FormRowProps {
  children: React.ReactNode;
  gap?: 'small' | 'medium' | 'large';
  style?: StyleProp<ViewStyle>;
}

const gapValues = {
  small: 8,
  medium: 16,
  large: 24,
};

const FormRow: React.FC<FormRowProps> = ({
  children,
  gap = 'medium',
  style,
}) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: gapValues[gap],
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default FormRow;
