import { getLabelStyles } from './styles';
import React from 'react';
import { TextStyle, StyleProp } from 'react-native';
import { useTheme } from 'styled-components/native';
import Text from '../Text/Text';

export interface LabelProps {
  style?: StyleProp<TextStyle>;
  bold?: boolean;
  children?: any;
  nativeId?: string;
  inline?: boolean;
  marginBottom?: number;
}

export const Label: React.FC<LabelProps> = ({
  children,
  style,
  bold,
  inline,
  marginBottom,
  nativeId,
}) => {
  const theme = useTheme();
  return (
    <Text
      style={[
        getLabelStyles({
          theme,
          bold,
          inline,
          marginBottom,
        }),
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default Label;
