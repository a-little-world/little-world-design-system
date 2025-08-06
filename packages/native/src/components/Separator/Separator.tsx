import * as SeparatorPrimitive from '@rn-primitives/separator';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { useTheme } from 'styled-components/native';
import { getSeparatorStyles } from './styles';
import { SeparatorBaseProps } from '@a-little-world/little-world-design-system-core';

interface SeparatorProps extends SeparatorBaseProps {
  style?: StyleProp<ViewStyle>;
}

const Separator = ({
  background,
  orientation = 'horizontal',
  spacing,
  style,
}: SeparatorProps) => {
  const theme = useTheme();
  const styles = getSeparatorStyles({
    theme,
    background,
    spacing: spacing as number,
  });
  return (
    <SeparatorPrimitive.Root
      style={[
        styles.wrapper,
        orientation === 'vertical' ? styles.vertical : styles.horizontal,
        style,
      ]}
      orientation={orientation}
      decorative
    />
  );
};

export default Separator;
