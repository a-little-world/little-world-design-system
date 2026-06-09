import { InputHeight } from '@a-little-world/little-world-design-system-core';
import { StyleSheet } from 'react-native';
import { DefaultTheme } from 'styled-components/native';

export const SELECT_MAX_WIDTH = 300;

export const getSelectStyles = ({
  theme,
  maxWidth,
  height,
  hasError,
}: {
  theme: DefaultTheme;
  maxWidth: number;
  height: InputHeight;
  hasError: boolean;
}) =>
  StyleSheet.create({
    wrapper: {
      position: 'relative',
      maxWidth: maxWidth || SELECT_MAX_WIDTH,
      width: '100%',
    },
    trigger: {
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: theme.spacing.xxsmall,
      paddingHorizontal:
        height === InputHeight.Small
          ? theme.spacing.small
          : theme.spacing.xsmall,
      lineHeight: 1.25,
      height: height === InputHeight.Small ? 34 : 40,
      gap: theme.spacing.xsmall,
      backgroundColor: theme.color.surface.primary,
      borderRadius: theme.radius.xxxsmall,
      borderWidth: 2,
      borderColor: theme.color.border.subtle,
      width: '100%',
      color: theme.color.text.secondary,
      marginBottom: theme.spacing.xxxxsmall,
    },
  });
