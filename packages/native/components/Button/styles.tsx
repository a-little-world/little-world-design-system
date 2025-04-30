import styled, { css } from "styled-components/native";
import { ViewStyle, TextStyle } from "react-native";

import {
  BUTTON_DIMENSIONS,
  ButtonAppearance,
  ButtonSizes,
  ButtonVariations,
  CIRCLE_DIMENSIONS,
} from "@a-little-world/little-world-design-system-core";

export const getButtonStyles = ({ appearance, color, variation, size, backgroundColor, borderColor, theme }: { appearance: ButtonAppearance, color: string, variation: ButtonVariations, size: ButtonSizes, backgroundColor: string, borderColor: string, theme: any }): ViewStyle => {
  const baseStyles: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
    ...(variation === ButtonVariations.Basic ? {
      paddingHorizontal: theme.spacing.small,
      flex: 1,
    } : {}),
    ...BUTTON_DIMENSIONS[size],
  };

  if (variation === ButtonVariations.Circle) {
    return {
      ...baseStyles,
      ...CIRCLE_DIMENSIONS[size],
      borderRadius: CIRCLE_DIMENSIONS[size].width / 2,
      borderWidth: 1,
      borderColor: borderColor || backgroundColor || theme.color.border.bold,
      backgroundColor: backgroundColor || 'transparent',
    };
  }

  if (variation === ButtonVariations.Icon) {
    return {
      ...baseStyles,
      backgroundColor: backgroundColor || 'transparent',
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

export const getButtonTextStyles = ({ color, variation, appearance, theme }: { color: string, variation: ButtonVariations, appearance: ButtonAppearance, theme: any }): TextStyle => {
  const baseStyles: TextStyle = {
    color: color || theme.color.text.button,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: "700",
  };

  if (variation === ButtonVariations.Option) {
    return {
      ...baseStyles,
      color: color || theme.color.text.primary,
      fontWeight: "normal",
    };
  }

  if (appearance === ButtonAppearance.Secondary) {
    return {
      ...baseStyles,
      color: color || theme.color.text.heading,
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

const StandardButtonCss = css<{ $size?: string }>`
  font-weight: 700;
  border-radius: 90px;
  padding: ${({ theme }) => `${theme.spacing.xsmall} ${theme.spacing.small}`};
  height: 49px;
  max-width: 480px;
  gap: ${({ theme }) => theme.spacing.xxxxsmall};

  ${({ $size }) => {
    if ($size === ButtonSizes.Small || !$size) {
      return `min-width: 110px;`;
    }

    if ($size === ButtonSizes.Medium) {
      return `min-width: 160px;`;
    }

    if ($size === ButtonSizes.Large) {
      return `min-width: 240px;`;
    }

    if ($size === ButtonSizes.Stretch) {
      return `width: 100%;`;
    }
  }}
`;

export const PrimaryButtonCss = css<{ $backgroundColor?: string }>`
  ${StandardButtonCss}

  color: ${({ theme }) => theme.color.text.button};
  border: none;
  background: ${({ theme, $backgroundColor }) =>
    $backgroundColor || theme.color.surface.secondary};
  transition: background-color 0.5s ease, filter 0.5s ease,
    border-color 0.5s ease, color 0.5s ease, 0.4s;

  &:not(:disabled):hover {
    filter: brightness(80%);
    transition: background-color 0.5s ease, filter 0.5s ease,
      border-color 0.5s ease, color 0.5s ease, 0.4s;
  }
`;

export const SecondaryButtonCss = css<{
  $color?: string;
  $backgroundColor?: string;
}>`
  ${StandardButtonCss}

  ${({ $color, $backgroundColor, theme }) => `
    border: 2px solid ${$color || theme.color.border.bold};
    background-color: ${theme.color.surface.primary};
    color: ${$color || theme.color.text.heading};
    transition: background-color 0.5s ease, filter 0.5s ease,
    border-color 0.5s ease, color 0.5s ease, 0.4s;

    &:not(:disabled):hover {
      background: ${$backgroundColor || theme.color.text.heading};
      color: ${theme.color.text.control};
      border-color: ${$backgroundColor || theme.color.text.heading};
      transition: background-color 0.5s ease, filter 0.5s ease,
      border-color 0.5s ease, color 0.5s ease, 0.4s;
    }
  `}
`;

export const StyledButton = styled.TouchableOpacity<{
  $appearance?: ButtonAppearance;
  $backgroundColor?: string;
  $borderColor?: string;
  $color?: string;
  $variation: ButtonVariations;
  $size?: ButtonSizes;
}>`
  cursor: pointer;
  position: relative;
  color: ${({ $color }) => $color || "currentColor"};
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  transition: background-color 0.5s ease, filter 0.5s ease,
    border-color 0.5s ease, color 0.5s ease, 0.4s;

  &:not(:disabled):hover {
    transition: background-color 0.5s ease, filter 0.5s ease,
      border-color 0.5s ease, color 0.5s ease, 0.4s;
  }

  & > * {
    cursor: pointer;
  }

  &:disabled {
    background: ${({ theme }) => theme.color.surface.disabled};
    border-color: ${({ theme }) => theme.color.border.disabled};
    color: ${({ theme }) => theme.color.text.disabled};
    cursor: not-allowed;

    & > * {
      cursor: not-allowed;
    }
  }

  ${({
    $appearance,
    $backgroundColor,
    $borderColor,
    $size,
    $variation,
    theme,
  }) => {
    if ($variation === ButtonVariations.Basic) {
      if ($appearance === ButtonAppearance.Primary) return PrimaryButtonCss;
      if ($appearance === ButtonAppearance.Secondary) return SecondaryButtonCss;
    }

    if ($variation === ButtonVariations.Option) return OPTION_BUTTON_CSS;

    let CIRCLE_DIMENSIONS;
    switch ($size) {
      case ButtonSizes.Small:
        CIRCLE_DIMENSIONS = css`
          width: 28px;
          height: 28px;
        `;
        break;
      case ButtonSizes.Medium:
        CIRCLE_DIMENSIONS = css`
          width: 36px;
          height: 36px;
        `;
        break;
      default:
      case ButtonSizes.Large:
        CIRCLE_DIMENSIONS = css`
          width: 44px;
          height: 44px;
        `;
        break;
    }

    if ($variation === ButtonVariations.Circle)
      return css`
        border: 1px solid ${$borderColor || $backgroundColor || "currentColor"};
        background: ${$backgroundColor || "transparent"};
        border-radius: 50%;
        padding: 0;
        transition: opacity 0.5s ease;
        ${CIRCLE_DIMENSIONS}

        &:not(:disabled):hover {
          transition: opacity 0.3s ease;
          opacity: 0.6;
        }

        ${CIRCLE_DIMENSIONS}
      `;

    let ICON_DIMENSIONS;
    switch ($size) {
      case ButtonSizes.Small:
        ICON_DIMENSIONS = css`
          width: 16px;
          height: 16px;
        `;
        break;
      case ButtonSizes.Medium:
        ICON_DIMENSIONS = css`
          width: 24px;
          height: 24px;
        `;
        break;
      case ButtonSizes.Large:
        ICON_DIMENSIONS = css`
          width: 32px;
          height: 32px;
        `;
      default:
        break;
    }
    if ($variation === ButtonVariations.Icon) {
      return css`
        background: ${$backgroundColor || "transparent"};
        width: auto;
        height: fit-content;
        padding: 0;
        transition: opacity 0.5s ease;

        &:not(:disabled):hover {
          transition: opacity 0.3s ease;
          opacity: 0.6;
        }

        svg {
          ${ICON_DIMENSIONS}
        }
      `;
    }

    if ($variation === ButtonVariations.Inline)
      return css`
        display: inline-flex;
        border: none;
        border-radius: 0px;
        height: auto;
        width: auto;
        gap: ${({ theme }) => theme.spacing.xxxsmall};
        padding: ${({ theme }) => theme.spacing.xxxxsmall} 0;
        transition: all 0.3s ease-in-out;
        background: transparent;

        &:disabled {
          background: transparent;
        }

        &:not(:disabled):hover {
          background-position: 0;

          &::before {
            width: 100%;
          }
        }
      `;
  }}
`;
