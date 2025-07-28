import { Gradient } from "../Gradient/Gradient";
import Loading from "../Loading/Loading";
import Text from "../Text/Text";
import { getButtonStyles, getButtonTextStyles, gradientStyles } from "./styles";
import {
  ButtonAppearance,
  ButtonBaseProps,
  ButtonSizes,
  ButtonVariations,
} from "@a-little-world/little-world-design-system-core";
import React from "react";
import { StyleProp, ViewStyle, Pressable } from "react-native";
import { useTheme } from "styled-components/native";

export { ButtonAppearance, ButtonSizes, ButtonVariations };

export interface ButtonProps extends ButtonBaseProps {
  onPress?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Button = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  ButtonProps
>(
  (
    {
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
    },
    ref
  ) => {
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
      <Loading color={textStyles.color as string} />
    ) : (
      <Text
        bold
        style={[
          textStyles,
          disabled ? { color: theme.color.text.disabled } : {},
        ]}
      >
        {children}
      </Text>
    );

    return (
      <Pressable
        ref={ref}
        onPress={onPress}
        disabled={disabled || loading}
        style={({ pressed }) => [
          buttonStyles,
          disabled && {
            backgroundColor: theme.color.surface.disabled,
            borderColor: theme.color.border.disabled,
          },
          pressed && {
            opacity: 0.8,
          },
          style,
        ]}
      >
        {hasGradient && (
          <Gradient
            gradient={theme.color.gradient.orange10}
            style={{...buttonStyles, ...gradientStyles.fullSize}}
          />
        )}
        {content}
      </Pressable>
    );
  }
);

Button.displayName = "Button";

export default Button;
