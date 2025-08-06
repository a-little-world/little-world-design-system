import { StyleSheet } from 'react-native';
import { DefaultTheme } from 'styled-components/native';

const ITEM_WIDTH = 16;

export const getContainerStyles = ({ theme }: { theme: DefaultTheme }) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      marginVertical: theme.spacing.xxxxsmall,
      flexDirection: 'row',
    },
  });

export const getCheckboxStyles = ({
  theme,
  hasError,
  color,
  checked,
}: {
  theme: DefaultTheme;
  hasError: boolean;
  color?: string;
  checked: boolean;
}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    text: {
      paddingHorizontal: 8,
    },
    checkbox: {
      height: ITEM_WIDTH,
      width: ITEM_WIDTH,
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      borderColor: hasError
        ? theme.color.border.error
        : theme.color.border.contrast,
      backgroundColor: checked ? color : theme.color.surface.primary,
      ...(checked &&
        color && {
          backgroundColor: color,
          borderColor: color,
          color: theme.color.text.reversed,
        }),
    },
  });

export const indicatorStyles = StyleSheet.create({
  indicator: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
