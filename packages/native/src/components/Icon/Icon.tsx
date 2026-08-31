import React from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import { DefaultTheme, useTheme } from 'styled-components/native';

import {
  fontFamilies,
  Gradients,
  getTextStyle,
  IconBaseProps,
  TextTypes,
  tokens,
} from '@a-little-world/little-world-design-system-core';

const getCircleStyles = ({
  theme,
  backgroundColor,
  borderColor,
}: {
  backgroundColor?: string;
  borderColor?: string;
  theme: DefaultTheme;
}) => ({
  backgroundColor: backgroundColor || theme.color.surface.secondary,
  borderWidth: 2,
  borderColor: borderColor || theme.color.border.contrast,
  borderRadius: theme.radius.full,
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing.xxsmall,
});

const getLabelStyles = ({ top }: { top: number }): TextStyle => ({
  position: 'relative',
  marginTop: top,
});

const getDisplayNumberFontSize = (digits: number, iconSize?: number) =>
  iconSize
    ? iconSize * (digits > 1 ? 0.36 : 0.45)
    : getTextStyle(TextTypes.Body7).fontSize * 16;

const getDisplayNumberWrapStyles = (): ViewStyle => ({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

const toNativeOffset = (
  value?: number | string,
): number | string | undefined => {
  if (value == null || value === '') {
    return undefined;
  }
  if (typeof value === 'number') {
    return value;
  }
  if (value.trim().endsWith('%')) {
    return value;
  }
  const parsed = parseFloat(value);
  return Number.isFinite(parsed) ? parsed : undefined;
};

const getDisplayNumberBadgeStyles = ({
  digits,
  iconSize,
  theme,
  top,
  right,
}: {
  digits: number;
  iconSize?: number;
  theme: DefaultTheme;
  top?: number | string;
  right?: number | string;
}): ViewStyle => {
  const fontSize = getDisplayNumberFontSize(digits, iconSize);
  const badgeSize = fontSize * (digits > 1 ? 1.55 : 1.25);
  const centerX = right == null;
  const centerY = top == null;

  return {
    position: 'absolute',
    top: top ?? '50%',
    right: right ?? '50%',
    transform: [
      { translateX: centerX ? badgeSize / 2 : 0 },
      { translateY: centerY ? -badgeSize / 2 : 0 },
    ],
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.color.surface.primary,
    borderRadius: badgeSize / 2,
    width: badgeSize,
    height: badgeSize,
  };
};

const getDisplayNumberTextStyles = ({
  color,
  digits,
  iconSize,
  theme,
}: {
  color?: string;
  digits: number;
  iconSize?: number;
  theme: DefaultTheme;
}): TextStyle => {
  const fontSize = getDisplayNumberFontSize(digits, iconSize);

  return {
    color: color || theme.color.text.primary,
    fontFamily: fontFamilies.DMSans,
    fontWeight: '600',
    lineHeight: fontSize,
    fontSize,
    textAlign: 'center',
  };
};

const parseNumericSize = (value?: number | string): number | undefined => {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }
  if (typeof value === 'string') {
    const parsed = parseFloat(value);
    return Number.isFinite(parsed) ? parsed : undefined;
  }
  return undefined;
};

export const ImageLabel = ({
  children,
  top,
}: {
  children: string;
  top: number;
}) => (
  <Text
    accessible={true}
    accessibilityLabel={children}
    style={getLabelStyles({ top })}
  >
    {children}
  </Text>
);

export type IconSvgProps = Omit<IconBaseProps, 'children'> & {
  gradient?: Gradients;
  width?: number | string;
  height?: number | string;
  viewBox?: string;
};

export const Icon = ({
  backgroundColor,
  borderColor,
  children,
  circular,
  color,
  displayNumber,
  displayNumberRight,
  displayNumberTop,
  height,
  style,
  label,
  labelVisible,
  labelTop = tokens.spacing.xxlarge,
  size,
  width,
}: Omit<IconBaseProps, 'className'> & { style?: any }) => {
  const theme = useTheme();
  const showDisplayNumber =
    displayNumber != null && Number.isFinite(displayNumber);
  const iconSize = parseNumericSize(size ?? height ?? width);
  const digits = showDisplayNumber
    ? String(Math.trunc(displayNumber)).length
    : 0;

  const iconBody = (
    <>
      {children}
      {showDisplayNumber ? (
        <View pointerEvents="none" style={getDisplayNumberWrapStyles()}>
          <View
            style={getDisplayNumberBadgeStyles({
              digits,
              iconSize,
              theme,
              top: toNativeOffset(displayNumberTop),
              right: toNativeOffset(displayNumberRight),
            })}
          >
            <Text
              style={getDisplayNumberTextStyles({
                color,
                digits,
                iconSize,
                theme,
              })}
            >
              {Math.trunc(displayNumber)}
            </Text>
          </View>
        </View>
      ) : null}
    </>
  );

  return (
    <>
      {circular ? (
        <View
          style={[
            getCircleStyles({ theme, backgroundColor, borderColor }),
            style,
          ]}
        >
          {iconBody}
        </View>
      ) : (
        <View style={style}>{iconBody}</View>
      )}
      {labelVisible && (
        <ImageLabel top={labelTop as number}>{label}</ImageLabel>
      )}
    </>
  );
};

export default Icon;
