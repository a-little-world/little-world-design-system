import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'styled-components/native';

import {
  StatusTypes,
  TextTypes,
  getTextStyle,
} from '@a-little-world/little-world-design-system-core';

const REM_TO_PX = 16;
const bodyFontSize = getTextStyle(TextTypes.Body5).fontSize * REM_TO_PX;

const getTypeColors = (
  type: StatusTypes,
  theme: ReturnType<typeof useTheme>,
  withBorder?: boolean,
) => {
  switch (type) {
    case StatusTypes.Error:
      return {
        background: theme.color.surface.error,
        color: theme.color.text.error,
        borderColor: withBorder ? theme.color.border.error : 'transparent',
      };
    case StatusTypes.Success:
      return {
        background: theme.color.surface.success,
        color: theme.color.text.success,
        borderColor: withBorder ? theme.color.border.success : 'transparent',
      };
    case StatusTypes.Warning:
      return {
        background: theme.color.surface.warning,
        color: theme.color.text.warning,
        borderColor: withBorder ? theme.color.border.warning : 'transparent',
      };
    default:
      return {
        background: theme.color.surface.subtle,
        color: theme.color.text.info,
        borderColor: withBorder ? theme.color.border.info : 'transparent',
      };
  }
};

const createStyles = (theme: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      width: '100%',
      minHeight: theme.spacing.xlarge,
      borderRadius: theme.radius.xxsmall,
      gap: theme.spacing.xxsmall,
    },
    wrapperBorder: {
      padding: theme.spacing.small,
      borderWidth: 1,
    },
    wrapperNoBorder: {
      paddingVertical: theme.spacing.xxsmall,
      paddingHorizontal: 0,
      marginVertical: theme.spacing.xxsmall,
      borderRadius: 0,
    },
    text: {
      flex: 1,
      fontSize: bodyFontSize,
    },
  });

export const StatusMessageWrapper = ({
  children,
  type,
  visible,
  withBorder,
}: {
  children: React.ReactNode;
  type: StatusTypes;
  visible?: boolean;
  withBorder?: boolean;
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const colors = getTypeColors(type, theme, withBorder);
  return (
    <View
      style={[
        styles.wrapper,
        withBorder ? styles.wrapperBorder : styles.wrapperNoBorder,
        {
          backgroundColor: colors.background,
          borderColor: colors.borderColor,
          opacity: visible ? 1 : 0,
        },
      ]}
    >
      {children}
    </View>
  );
};

export const StatusMessageText = ({
  children,
  type,
  withBorder,
}: {
  children: React.ReactNode;
  type: StatusTypes;
  withBorder?: boolean;
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const colors = getTypeColors(type, theme, withBorder);
  return <Text style={[styles.text, { color: colors.color }]}>{children}</Text>;
};
