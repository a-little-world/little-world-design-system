import { StyleSheet } from "react-native";
import { DefaultTheme } from "styled-components/native";

export const getAppStyles = (theme: DefaultTheme) => {
  return StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      backgroundColor: theme.color.surface.background,
      alignItems: "center",
      justifyContent: "center",
      gap: theme.spacing.medium,
    },
  });
}; 