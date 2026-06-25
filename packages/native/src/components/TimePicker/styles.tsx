import { StyleSheet } from 'react-native';
import { DefaultTheme } from 'styled-components/native';

export const getTimePickerStyles = ({ theme }: { theme: DefaultTheme }) =>
  StyleSheet.create({
    trigger: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 2,
      borderColor: theme.color.border.subtle,
      borderRadius: 6,
      backgroundColor: theme.color.surface.primary,
      paddingVertical: theme.spacing.xxsmall,
      paddingHorizontal: theme.spacing.xsmall,
      minHeight: 44,
    },
    triggerDisabled: {
      backgroundColor: theme.color.surface.disabled,
    },
    triggerError: {
      borderColor: theme.color.border.error,
    },
    triggerText: {
      flex: 1,
      color: theme.color.text.primary,
      fontSize: 16,
    },
    triggerPlaceholder: {
      flex: 1,
      color: theme.color.text.tertiary,
      fontSize: 16,
    },
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.4)',
      justifyContent: 'flex-end',
    },
    sheet: {
      backgroundColor: theme.color.surface.elevated,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      padding: theme.spacing.medium,
      paddingBottom: theme.spacing.large,
    },
    sheetHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.small,
    },
    sheetTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.color.text.primary,
    },
    doneButton: {
      color: theme.color.text.accent,
      fontSize: 16,
      fontWeight: '600',
    },
    columnsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 200,
    },
    column: {
      flex: 1,
      height: 200,
    },
    columnDivider: {
      fontSize: 18,
      fontWeight: '600',
      color: theme.color.text.secondary,
      paddingHorizontal: 4,
    },
    option: {
      paddingVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6,
    },
    optionSelected: {
      backgroundColor: theme.color.surface.accent,
    },
    optionText: {
      fontSize: 15,
      color: theme.color.text.primary,
    },
    optionTextSelected: {
      fontSize: 15,
      fontWeight: '600',
      color: theme.color.text.button,
    },
    ampmContainer: {
      flexDirection: 'column',
      gap: 8,
      justifyContent: 'center',
      paddingLeft: theme.spacing.small,
    },
    ampmButton: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 6,
      backgroundColor: theme.color.surface.secondary,
      alignItems: 'center',
    },
    ampmButtonSelected: {
      backgroundColor: theme.color.surface.accent,
    },
    ampmText: {
      fontSize: 13,
      fontWeight: '600',
      color: theme.color.text.secondary,
    },
    ampmTextSelected: {
      fontSize: 13,
      fontWeight: '600',
      color: theme.color.text.button,
    },
  });
