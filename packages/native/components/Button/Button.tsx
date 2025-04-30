import React from "react";
import { useTheme } from "styled-components/native";

import {
  ButtonAppearance,
  ButtonBaseProps,
  ButtonSizes,
  ButtonVariations,
  BUTTON_DIMENSIONS,
  CIRCLE_DIMENSIONS,
  ICON_DIMENSIONS,
} from "@a-little-world/little-world-design-system-core";
// import Loading from '../Loading/Loading';
import Text from "../Text/Text";
import { getButtonStyles, getButtonTextStyles, StyledButton } from "./styles";
import { Gradient } from "../Gradient/Gradient";
import { TouchableOpacity } from "react-native";

export { ButtonAppearance, ButtonSizes, ButtonVariations };

export interface ButtonProps extends ButtonBaseProps {
  onPress?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
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
}) => {
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

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        buttonStyles,
        disabled && {
          backgroundColor: theme.color.surface.disabled,
          borderColor: theme.color.border.disabled,
        },
      ]}
    >
      {hasGradient ? (
        <Gradient gradient={theme.color.gradient.orange10} style={buttonStyles}>
          {loading ? (
            "Loading"
          ) : (
            <Text
              style={[
                textStyles,
                disabled && { color: theme.color.text.disabled },
              ]}
            >
              {children}
            </Text>
          )}
        </Gradient>
      ) : loading ? (
        "Loading"
      ) : (
        <Text
          style={[textStyles, disabled && { color: theme.color.text.disabled }]}
        >
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
