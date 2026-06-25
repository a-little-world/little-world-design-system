import { StyleSheet } from 'react-native';
import { useTheme } from 'styled-components/native';

export const getTableStyles = ({
  theme,
  showBorder,
}: {
  theme: ReturnType<typeof useTheme>;
  showBorder: boolean;
}) =>
  StyleSheet.create({
    scrollContainer: {
      flexGrow: 0,
    },
    table: {
      borderWidth: showBorder ? 1 : 0,
      borderColor: theme.color.border.subtle,
      borderRadius: theme.radius.xsmall,
      overflow: 'hidden',
    },
    headerRow: {
      flexDirection: 'row',
      backgroundColor: theme.color.surface.secondary,
      borderBottomWidth: 1,
      borderBottomColor: theme.color.border.moderate,
    },
    dataRow: {
      flexDirection: 'row',
      backgroundColor: theme.color.surface.primary,
      borderBottomWidth: 1,
      borderBottomColor: theme.color.border.minimal,
    },
    dataRowLast: {
      borderBottomWidth: 0,
    },
    stripedRow: {
      backgroundColor: theme.color.surface.subtle,
    },
    pressedRow: {
      backgroundColor: theme.color.surface.selected,
    },
    cell: {
      paddingVertical: theme.spacing.xsmall,
      paddingHorizontal: theme.spacing.small,
      justifyContent: 'center',
    },
    emptyCell: {
      padding: theme.spacing.medium,
      alignItems: 'center',
    },
  });
