import styled, { css } from 'styled-components';
import tokens from '../../tokens';
import { coreColors } from '../../tokens/core';
import { ButtonAppearance, ButtonSizes, ButtonVariations } from './Button';
import { LINK_HOVER_CSS } from '../Link/Link';

export const OPTION_BUTTON_CSS = css<{
  $appearance?: keyof typeof ButtonAppearance;
  $backgroundColor?: string;
  $color?: string;
}>`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  background: ${({ $backgroundColor, theme }) =>
    $backgroundColor || theme.color.surface.secondary};
  border: 1px solid ${({ theme }) => theme.color.border.subtle};
  color: ${({ $color, theme }) => $color || theme.color.text.primary};
  border-radius: 15px;
  font-weight: 700;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${tokens.spacing.xsmall};
  gap: ${tokens.spacing.xxxsmall};
  max-width: 144px;
  align-items: center;
  justify-content: center;
  font-weight: normal;
  min-height: 69px;

  &:hover:enabled {
    filter: brightness(120%) contrast(120%);
    cursor: pointer;
    box-shadow: 0 0 10px 3px rgb(0 0 0 / 11%),
      0 0 8px 6px rgb(255 255 255 / 15%);
  }

  ${({ $appearance, $backgroundColor, $color, theme }) =>
    $appearance === ButtonAppearance.Secondary &&
    css`
      color: ${$color || theme.color.text.button};
      background: ${$backgroundColor || theme.color.gradient.blue10};
    `}
`;

const StandardButtonCss = css<{ $size?: string }>`
  font-weight: 700;
  border-radius: 90px;
  padding: ${tokens.spacing.xsmall} ${tokens.spacing.small};
  height: 49px;

  ${({ $size }) => {
    if ($size === ButtonSizes.Small) {
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

export const StyledButton = styled.button<{
  $appearance?: keyof typeof ButtonAppearance;
  $backgroundColor?: string;
  $color?: string;
  $variation: keyof typeof ButtonVariations;
  $size?: string;
}>`
  cursor: pointer;
  position: relative;
  font-family: 'Signika Negative';
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  transition: background-color 0.5s ease, filter 0.5s ease,
    border-color 0.5s ease, color 0.5s ease, 0.4s;

  &:hover:enabled {
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
  }

  ${({ $appearance, $backgroundColor, $color, $variation, theme }) => {
    if ($variation === ButtonVariations.Basic) {
      if ($appearance === ButtonAppearance.Primary)
        return css`
          ${StandardButtonCss}

          color: ${coreColors.white};
          border: none;
          background: ${$backgroundColor || theme.color.gradient.orange};

          &:hover:enabled {
            filter: brightness(120%);
          }
        `;

      if ($appearance === ButtonAppearance.Secondary)
        return css`
          ${StandardButtonCss}
          border: 2px solid ${$color || coreColors.blue20};
          background-color: ${coreColors.white};
          color: ${$color || coreColors.blue20};

          &:hover:enabled {
            background: ${$backgroundColor || coreColors.blue20};
            color: white;
            border-color: ${$backgroundColor || coreColors.blue20};
          }
        `;
    }

    if ($variation === ButtonVariations.Option) return OPTION_BUTTON_CSS;

    if ($variation === ButtonVariations.Control)
      return css`
        border: 1px solid ${coreColors.gray10};
        border-radius: 50%;
        background: ${coreColors.white};
        width: 36px;
        height: 36px;

        &:hover:enabled {
          background-color: ${coreColors.gray20};
          color: white;
          border-color: ${coreColors.gray30};
        }
      `;

    if ($variation === ButtonVariations.Icon)
      return css`
        border: none;
        background: transparent;
        border-radius: 0px;
        height: auto;
        width: auto;
        padding: 0px;

        &:hover:enabled {
          filter: brightness(0.9);
        }
      `;

    if ($variation === ButtonVariations.Inline)
      return css`
        display: inline-flex;
        border: none;
        color: ${$color || 'currentColor'};
        border-radius: 0px;
        height: auto;
        width: auto;
        gap: ${tokens.spacing.xxxsmall};
        padding: ${tokens.spacing.xxxsmall} 0;
        transition: all 0.3s ease-in-out;
        background: transparent;

        &:disabled {
          background: transparent;
        }

        ${LINK_HOVER_CSS}

        &:hover:enabled {
          background-position: 0;

          &::before {
            width: 100%;
          }
        }
      `;
  }}
`;
