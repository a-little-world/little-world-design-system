import { StyleSheet } from "react-native";
import { DefaultTheme } from "styled-components/native";

export const getTestPageStyles = (theme: DefaultTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.color.surface.background,
    },
    scrollContent: {
      padding: theme.spacing.large,
      gap: theme.spacing.large,
    },
    section: {
      gap: theme.spacing.small,
      marginBottom: theme.spacing.large,
    },
    sectionTitle: {
      marginBottom: theme.spacing.small,
    },
  });
}; 