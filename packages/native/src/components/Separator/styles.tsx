import { StyleSheet } from "react-native";
import { DefaultTheme } from "styled-components/native";

export const getSeparatorStyles = ({ theme, background, spacing }: { theme: DefaultTheme, background?: string, spacing?: number }) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: background || theme.color.border.contrast,
      height: 1,
      width: "100%",
    },
    vertical: {
      height: 100,
      width: 1,
      marginHorizontal: spacing || theme.spacing.medium,
    },
    horizontal: {
      height: 1,
      width: "100%",
      marginVertical: spacing || theme.spacing.medium,
    },
  });
