import { StyleSheet } from 'react-native';
import { DefaultTheme } from 'styled-components/native';

const TRIGGER_MIN_HEIGHT = 44;
const COLUMN_HEIGHT = 200;
const OVERLAY_COLOR = 'rgba(0,0,0,0.4)';
const FONT_SIZE_BODY = 16;
const FONT_SIZE_DIVIDER = 18;
const FONT_SIZE_OPTION = 15;
const FONT_SIZE_AMPM = 13;

export const getTimePickerStyles = ({ theme }: { theme: DefaultTheme }) =>
  StyleSheet.create({
    trigger: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 2,
      borderColor: theme.color.border.subtle,
      borderRadius: theme.radius.xxsmall,
      backgroundColor: theme.color.surface.primary,
      paddingVertical: theme.spacing.xxsmall,
      paddingHorizontal: theme.spacing.xsmall,
      minHeight: TRIGGER_MIN_HEIGHT,
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
      fontSize: FONT_SIZE_BODY,
    },
    triggerPlaceholder: {
      flex: 1,
      color: theme.color.text.tertiary,
      fontSize: FONT_SIZE_BODY,
    },
    overlay: {
      flex: 1,
      backgroundColor: OVERLAY_COLOR,
      justifyContent: 'flex-end',
    },
    sheet: {
      backgroundColor: theme.color.surface.elevated,
      borderTopLeftRadius: theme.radius.small,
      borderTopRightRadius: theme.radius.small,
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
      fontSize: FONT_SIZE_BODY,
      fontWeight: '600',
      color: theme.color.text.primary,
    },
    doneButton: {
      color: theme.color.text.accent,
      fontSize: FONT_SIZE_BODY,
      fontWeight: '600',
    },
    columnsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: COLUMN_HEIGHT,
    },
    column: {
      flex: 1,
      height: COLUMN_HEIGHT,
    },
    columnDivider: {
      fontSize: FONT_SIZE_DIVIDER,
      fontWeight: '600',
      color: theme.color.text.secondary,
      paddingHorizontal: theme.spacing.xxxsmall,
    },
    option: {
      paddingVertical: theme.spacing.xsmall,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.radius.xxsmall,
    },
    optionSelected: {
      backgroundColor: theme.color.surface.accent,
    },
    optionText: {
      fontSize: FONT_SIZE_OPTION,
      color: theme.color.text.primary,
    },
    optionTextSelected: {
      fontSize: FONT_SIZE_OPTION,
      fontWeight: '600',
      color: theme.color.text.button,
    },
    ampmContainer: {
      flexDirection: 'column',
      gap: theme.spacing.xxsmall,
      justifyContent: 'center',
      paddingLeft: theme.spacing.small,
    },
    ampmButton: {
      paddingVertical: theme.spacing.xxsmall,
      paddingHorizontal: theme.spacing.xsmall,
      borderRadius: theme.radius.xxsmall,
      backgroundColor: theme.color.surface.secondary,
      alignItems: 'center',
    },
    ampmButtonSelected: {
      backgroundColor: theme.color.surface.accent,
    },
    ampmText: {
      fontSize: FONT_SIZE_AMPM,
      fontWeight: '600',
      color: theme.color.text.secondary,
    },
    ampmTextSelected: {
      fontSize: FONT_SIZE_AMPM,
      fontWeight: '600',
      color: theme.color.text.button,
    },
  });
