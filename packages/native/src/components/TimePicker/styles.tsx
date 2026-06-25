import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from 'styled-components/native';

import {
  TextTypes,
  getTextStyle,
} from '@a-little-world/little-world-design-system-core';

const REM_TO_PX = 16;
export const COLUMN_HEIGHT = 200;
const OVERLAY_COLOR = 'rgba(0,0,0,0.4)';

const bodyFontSize = getTextStyle(TextTypes.Body5).fontSize * REM_TO_PX;
const dividerFontSize = getTextStyle(TextTypes.Body4).fontSize * REM_TO_PX;
const optionFontSize = getTextStyle(TextTypes.Body5).fontSize * REM_TO_PX;
const ampmFontSize = getTextStyle(TextTypes.Body6).fontSize * REM_TO_PX;

const createStyles = (theme: ReturnType<typeof useTheme>) =>
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

export const TimePickerTrigger = ({
  children,
  disabled,
  hasError,
  onPress,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  hasError?: boolean;
  onPress: () => void;
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <TouchableOpacity
      style={[
        styles.trigger,
        disabled && styles.triggerDisabled,
        hasError && styles.triggerError,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {children}
    </TouchableOpacity>
  );
};

export const TriggerText = ({
  children,
  hasValue,
}: {
  children: React.ReactNode;
  hasValue: boolean;
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <Text style={hasValue ? styles.triggerText : styles.triggerPlaceholder}>
      {children}
    </Text>
  );
};

export const OverlayView = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return <View style={styles.overlay}>{children}</View>;
};

export const SheetView = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return <View style={styles.sheet}>{children}</View>;
};

export const SheetHeader = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return <View style={styles.sheetHeader}>{children}</View>;
};

export const SheetTitle = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return <Text style={styles.sheetTitle}>{children}</Text>;
};

export const DoneButtonText = ({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress: () => void;
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.doneButton}>{children}</Text>
    </TouchableOpacity>
  );
};

export const ColumnsContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return <View style={styles.columnsContainer}>{children}</View>;
};

export const TimeColumn = React.forwardRef<
  ScrollView,
  { children: React.ReactNode }
>(({ children }, ref) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <ScrollView
      ref={ref}
      style={styles.column}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
});

export const ColumnDivider = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return <Text style={styles.columnDivider}>:</Text>;
};

export const TimeOption = ({
  children,
  isSelected,
  onPress,
}: {
  children: React.ReactNode;
  isSelected: boolean;
  onPress: () => void;
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <TouchableOpacity
      style={[styles.option, isSelected && styles.optionSelected]}
      onPress={onPress}
    >
      <Text style={isSelected ? styles.optionTextSelected : styles.optionText}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export const AMPMContainer = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return <View style={styles.ampmContainer}>{children}</View>;
};

export const AMPMButton = ({
  children,
  isSelected,
  onPress,
}: {
  children: React.ReactNode;
  isSelected: boolean;
  onPress: () => void;
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <TouchableOpacity
      style={[styles.ampmButton, isSelected && styles.ampmButtonSelected]}
      onPress={onPress}
    >
      <Text style={isSelected ? styles.ampmTextSelected : styles.ampmText}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};
