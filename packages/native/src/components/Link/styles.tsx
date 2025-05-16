import {
  ButtonAppearance,
  ButtonSizes,
} from "@a-little-world/little-world-design-system-core";
import { DefaultTheme } from "styled-components/native";

export const getButtonStyles = ({
  theme,
  buttonAppearance,
  size,
}: {
  theme: DefaultTheme;
  buttonAppearance: ButtonAppearance | undefined;
  size: ButtonSizes | undefined;
}) => {
  const sizeStyles = size
    ? {
        /* Add size-specific styles based on ButtonSizes */
      }
    : {};

  if (buttonAppearance === ButtonAppearance.Primary) {
    return {
      backgroundColor: theme.color.gradient.orange10,
      padding: 10,
      borderRadius: 4,
      ...sizeStyles,
    };
  } else if (buttonAppearance === ButtonAppearance.Secondary) {
    return {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: theme.color.border.bold,
      padding: 10,
      borderRadius: 4,
      ...sizeStyles,
    };
  }

  return {};
};

export const getLinkStyles = ({
  theme,
  color,
}: {
  theme: DefaultTheme;
  color?: string;
}) => ({
  color: color || theme.color.text.link,
});

export const getLinkTextStyles = ({
  theme,
  buttonAppearance,
  color,
  textDecoration,
}: {
  theme: DefaultTheme;
  buttonAppearance?: ButtonAppearance;
  color?: string;
  textDecoration?: boolean;
}) => ({
  color:
    buttonAppearance === ButtonAppearance.Primary
      ? theme.color.text.button
      : color || theme.color.text.link,
  textDecorationLine: textDecoration
    ? ("underline" as const)
    : ("none" as const),
});
