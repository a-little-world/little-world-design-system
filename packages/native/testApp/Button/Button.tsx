import React from "react";
import { useTheme } from "styled-components/native";
import { StyleProp, ViewStyle, TouchableOpacity } from "react-native";

import {
  ButtonAppearance,
  ButtonBaseProps,
  ButtonSizes,
  ButtonVariations,
} from "@a-little-world/little-world-design-system-core";

import { Gradient, Text, Loading } from "@a-little-world/little-world-design-system-native";
import { getButtonStyles, getButtonTextStyles } from "./styles";

export { ButtonAppearance, ButtonSizes, ButtonVariations };

export interface ButtonProps extends ButtonBaseProps {
  onPress?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Button = React.forwardRef<React.ElementRef<typeof TouchableOpacity>, ButtonProps>(({
  appearance = ButtonAppearance.Primary,
  backgroundColor,
  borderColor,
  color,
  children,
  disabled,
  loading,
  onPress,
  size = ButtonSizes.Medium,
  variation = ButtonVariations.Basic,
  style,
}, ref) => {
  const theme = useTheme();

  const buttonStyles = getButtonStyles({
    appearance,
    color,
    variation,
    size,
    backgroundColor,
    borderColor,
    theme,
  });
  const textStyles = getButtonTextStyles({
    color,
    variation,
    appearance,
    theme,
  });
  const hasGradient =
    appearance === ButtonAppearance.Primary &&
    variation === ButtonVariations.Basic;

  const content = loading ? (
    <Loading />
  ) : (
    <Text
      style={[textStyles, disabled ? { color: theme.color.text.disabled } : {}]}
    >
      {children}
    </Text>
  );

  return (
    <TouchableOpacity
      ref={ref}
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        buttonStyles,
        disabled && {
          backgroundColor: theme.color.surface.disabled,
          borderColor: theme.color.border.disabled,
        },
        style,
      ]}
    >
      {hasGradient ? (
        <Gradient gradient={'orange10'}>
          {content}
        </Gradient>
      ) : (
        content
      )}
    </TouchableOpacity>
  );
});

Button.displayName = 'Button';

export default Button;
