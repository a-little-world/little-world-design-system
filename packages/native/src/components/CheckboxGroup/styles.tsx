import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'styled-components/native';

export type CheckboxGroupOrientation = 'vertical' | 'horizontal';

const createStyles = (
  theme: ReturnType<typeof useTheme>,
  orientation: CheckboxGroupOrientation,
) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: orientation === 'vertical' ? 'column' : 'row',
      flexWrap: orientation === 'horizontal' ? 'wrap' : 'nowrap',
      gap: theme.spacing.xsmall,
      alignItems: 'flex-start',
    },
  });

export const CheckboxGroupWrapper = ({
  children,
  orientation = 'horizontal',
}: {
  children: React.ReactNode;
  orientation?: CheckboxGroupOrientation;
}) => {
  const theme = useTheme();
  const styles = createStyles(theme, orientation);
  return <View style={styles.wrapper}>{children}</View>;
};
