import { ButtonAppearance } from '@a-little-world/little-world-design-system-core';
import { DefaultTheme } from 'styled-components/native';
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export const getLinkStyles = ({
  theme, // eslint-disable-line @typescript-eslint/no-unused-vars
}: {
  theme: DefaultTheme;
}): ViewStyle => {
  return StyleSheet.create({
    container: {
      alignSelf: 'baseline',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'row',
      height: 'auto',
      minHeight: 0,
      alignItems: 'baseline',
      justifyContent: 'flex-start',
      width: 'auto',
      minWidth: 0,
    },
  }).container;
};

export const getLinkTextStyles = ({
  theme,
  buttonAppearance,
  color,
  textDecoration,
}: {
  theme: DefaultTheme;
  buttonAppearance?: ButtonAppearance;
  color?: string;
  textDecoration?: boolean;
}): TextStyle => {
  return StyleSheet.create({
    text: {
      color:
        buttonAppearance === ButtonAppearance.Primary
          ? theme.color.text.button
          : color || theme.color.text.link,
      textDecorationLine: textDecoration
        ? ('underline' as const)
        : ('none' as const),
      ...(!buttonAppearance
        ? {
            margin: 0,
            padding: 0,
            lineHeight: undefined,
            textAlignVertical: 'auto',
            flex: undefined,
            alignSelf: 'baseline',
          }
        : {}),
    },
  }).text;
};
