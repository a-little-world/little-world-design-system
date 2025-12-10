import { StyleSheet } from "react-native";
import { DefaultTheme } from "styled-components/native";

export const getAppStyles = (theme: DefaultTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.color.surface.background,
    },
    scrollView: {
      flex: 1,
    },
    scrollContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: theme.spacing.medium,
      padding: theme.spacing.medium,
    },
    splashContainer: {
      flex: 1,
      width: "100%",
      height: "100%",
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      justifyContent: "center",
    },
  });
}; 