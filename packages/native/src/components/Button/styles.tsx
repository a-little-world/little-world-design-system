import {
  BUTTON_DIMENSIONS,
  ButtonAppearance,
  ButtonSizes,
  ButtonVariations,
  CIRCLE_DIMENSIONS,
} from "@a-little-world/little-world-design-system-core";
import { ViewStyle, TextStyle, StyleSheet } from "react-native";
import { css } from "styled-components/native";

export const getButtonStyles = ({
  appearance,
  color,
  variation,
  size,
  backgroundColor,
  borderColor,
  theme,
}: {
  appearance: ButtonAppearance;
  color?: string;
  variation: ButtonVariations;
  size: ButtonSizes;
  backgroundColor?: string;
  borderColor?: string;
  theme: any;
}): ViewStyle => {
  const baseStyles: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 90,
    ...(variation === ButtonVariations.Basic
      ? {
          paddingHorizontal: theme.spacing.small,
          // flex: 1,
          height: BUTTON_DIMENSIONS[size].height,
          minWidth: BUTTON_DIMENSIONS[size].minWidth,
          // paddingVertical: BUTTON_DIMENSIONS[size].padding.vertical,
        }
      : {}),
  };

  if (variation === ButtonVariations.Circle) {
    return {
      ...baseStyles,
      ...CIRCLE_DIMENSIONS[size],
      borderRadius: theme.radius.half,
      borderWidth: 1,
      borderColor: borderColor || backgroundColor || theme.color.border.bold,
      backgroundColor: backgroundColor || "transparent",
    };
  }

  if (variation === ButtonVariations.Icon) {
    return {
      ...baseStyles,
      backgroundColor: backgroundColor || "transparent",
      padding: 0,
    };
  }

  if (variation === ButtonVariations.Option) {
    return {
      ...baseStyles,
      backgroundColor: backgroundColor || theme.color.surface.tertiary,
      borderWidth: 1,
      borderColor: theme.color.border.subtle,
      borderRadius: 15,
      padding: theme.spacing.xsmall,
      gap: theme.spacing.xxxsmall,
      maxWidth: 144,
      minHeight: 69,
    };
  }

  if (variation === ButtonVariations.Inline) {
    return {
      ...baseStyles,
      display: "flex",
      borderWidth: 0,
      borderRadius: 0,
      borderBottomWidth: 1,
      height: "auto",
      width: "auto",
      paddingHorizontal: 0,
      paddingVertical: theme.spacing.xxxxsmall,
      gap: theme.spacing.xxxsmall,
      backgroundColor: "transparent",
    };
  }

  if (appearance === ButtonAppearance.Primary) {
    return {
      ...baseStyles,
      backgroundColor: backgroundColor || theme.color.surface.primary,
      borderWidth: 0,
    };
  }

  return {
    ...baseStyles,
    backgroundColor: theme.color.surface.primary,
    borderWidth: 2,
    borderColor: color || theme.color.border.bold,
  };
};

export const gradientStyles = StyleSheet.create({
  fullSize: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export const getButtonTextStyles = ({
  color,
  variation,
  appearance,
  theme,
}: {
  color?: string;
  variation: ButtonVariations;
  appearance: ButtonAppearance;
  theme: any;
}): TextStyle => {
  const baseStyles: TextStyle = {
    color: color || theme.color.text.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
  };

  if (variation === ButtonVariations.Option) {
    return {
      ...baseStyles,
      color: color || theme.color.text.primary,
      fontWeight: "normal",
    };
  }

  if (variation === ButtonVariations.Basic) {
    return {
      ...baseStyles,
      color:
        color || appearance === ButtonAppearance.Primary
          ? theme.color.text.button
          : theme.color.text.heading,
    };
  }

  return baseStyles;
};

export const OPTION_BUTTON_CSS = css<{
  $appearance?: ButtonAppearance;
  $backgroundColor?: string;
  $color?: string;
}>`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  background: ${({ $backgroundColor, theme }) =>
    $backgroundColor || theme.color.surface.tertiary};
  border: 1px solid ${({ theme }) => theme.color.border.subtle};
  color: ${({ $color, theme }) => $color || theme.color.text.primary};
  border-radius: 15px;
  font-weight: 700;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${({ theme }) => theme.spacing.xsmall};
  gap: ${({ theme }) => theme.spacing.xxxsmall};
  max-width: 144px;
  align-items: center;
  justify-content: center;
  font-weight: normal;
  min-height: 69px;

  &:not(:disabled):hover {
    filter: brightness(95%);
    cursor: pointer;
    box-shadow: 0 0 10px 1px rgb(0 0 0 / 11%),
      0 0 8px 3px rgb(255 255 255 / 15%);
  }

  ${({ $appearance, $backgroundColor, $color, theme }) =>
    $appearance === ButtonAppearance.Secondary &&
    css`
      color: ${$color || theme.color.text.button};
      background: ${$backgroundColor || theme.color.surface.primary};
    `}
`;

//     svg {
//       ${ICON_DIMENSIONS}
//     }
//   `;
// }
