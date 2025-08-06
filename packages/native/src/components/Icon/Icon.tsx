import React from 'react';
import { Text, TextStyle, View } from 'react-native';
import { DefaultTheme, useTheme } from 'styled-components/native';

import {
  Gradients,
  IconBaseProps,
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
  style,
  label,
  labelVisible,
  labelTop = tokens.spacing.xxlarge,
}: Omit<IconBaseProps, 'className'> & { style?: any }) => {
  const theme = useTheme();
  return (
    <>
      {circular ? (
        <View
          style={[
            getCircleStyles({ theme, backgroundColor, borderColor }),
            style,
          ]}
        >
          {children}
        </View>
      ) : (
        <View style={style}>{children}</View>
      )}
      {labelVisible && (
        <ImageLabel top={labelTop as number}>{label}</ImageLabel>
      )}
    </>
  );
};

export default Icon;
