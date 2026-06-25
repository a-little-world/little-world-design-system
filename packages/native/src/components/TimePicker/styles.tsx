import { StyleSheet } from 'react-native';
import { DefaultTheme } from 'styled-components/native';

import {
  TextTypes,
  getTextStyle,
} from '@a-little-world/little-world-design-system-core';

const REM_TO_PX = 16;
const COLUMN_HEIGHT = 200;
const OVERLAY_COLOR = 'rgba(0,0,0,0.4)';

// Font sizes derived from the design system text scale (same as BaseText)
const bodyFontSize = getTextStyle(TextTypes.Body5).fontSize * REM_TO_PX; // 16px
const dividerFontSize = getTextStyle(TextTypes.Body4).fontSize * REM_TO_PX; // 20px
const optionFontSize = getTextStyle(TextTypes.Body5).fontSize * REM_TO_PX; // 16px
const ampmFontSize = getTextStyle(TextTypes.Body6).fontSize * REM_TO_PX; // ~14px

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
      minHeight: theme.spacing.xlarge,
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
      fontSize: bodyFontSize,
    },
    triggerPlaceholder: {
      flex: 1,
      color: theme.color.text.tertiary,
      fontSize: bodyFontSize,
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
      fontSize: bodyFontSize,
      fontWeight: '600',
      color: theme.color.text.primary,
    },
    doneButton: {
      color: theme.color.text.accent,
      fontSize: bodyFontSize,
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
      fontSize: dividerFontSize,
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
      fontSize: optionFontSize,
      color: theme.color.text.primary,
    },
    optionTextSelected: {
      fontSize: optionFontSize,
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
      fontSize: ampmFontSize,
      fontWeight: '600',
      color: theme.color.text.secondary,
    },
    ampmTextSelected: {
      fontSize: ampmFontSize,
      fontWeight: '600',
      color: theme.color.text.button,
    },
  });
