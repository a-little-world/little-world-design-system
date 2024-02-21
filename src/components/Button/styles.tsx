import styled, { css, keyframes } from 'styled-components';

import tokens from '../../tokens';
import { coreColors } from '../../tokens/core';
import { LINK_HOVER_CSS } from '../Link/styles';
import { ButtonAppearance, ButtonSizes, ButtonVariations } from './Button';

export const OPTION_BUTTON_CSS = css<{
  $appearance?: keyof typeof ButtonAppearance;
  $backgroundColor?: string;
  $color?: string;
}>`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
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
  padding: ${tokens.spacing.xsmall};
  gap: ${tokens.spacing.xxxsmall};
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
      background: ${$backgroundColor || theme.color.gradient.blue10};
    `}
`;

const StandardButtonCss = css<{ $size?: string }>`
  font-weight: 700;
  border-radius: 90px;
  padding: ${tokens.spacing.xsmall} ${tokens.spacing.small};
  height: 49px;
  max-width: 480px;

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

export const PrimaryButtonCss = css<{ $backgroundColor?: string }>`
  ${StandardButtonCss}

  color: ${coreColors.white};
  border: none;
  background: ${({ theme, $backgroundColor }) =>
    $backgroundColor || theme.color.gradient.orange};
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
    border: 2px solid ${$color || coreColors.blue20};
    background-color: ${theme.color.surface.primary};
    color: ${$color || coreColors.blue20};
    transition: background-color 0.5s ease, filter 0.5s ease,
    border-color 0.5s ease, color 0.5s ease, 0.4s;

    &:not(:disabled):hover {
      background: ${$backgroundColor || coreColors.blue20};
      color: ${theme.color.text.primary};
      border-color: ${$backgroundColor || coreColors.blue20};
      transition: background-color 0.5s ease, filter 0.5s ease,
      border-color 0.5s ease, color 0.5s ease, 0.4s;
    }
  `}
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

  ${({ $appearance, $color, $variation, theme }) => {
    if ($variation === ButtonVariations.Basic) {
      if ($appearance === ButtonAppearance.Primary) return PrimaryButtonCss;
      if ($appearance === ButtonAppearance.Secondary) return SecondaryButtonCss;
    }

    if ($variation === ButtonVariations.Option) return OPTION_BUTTON_CSS;

    if ($variation === ButtonVariations.Control)
      return css`
        border: 1px solid ${theme.color.surface.minimal};
        border-radius: 50%;
        background: ${theme.color.surface.primary};
        width: 36px;
        height: 36px;

        &:not(:disabled):hover {
          background-color: ${coreColors.gray20};
          color: white;
          border-color: ${theme.color.border.moderate};
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
        transition: filter 0.5s ease;

        &:not(:disabled):hover {
          transition: filter 0.5s ease;
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
        padding: ${tokens.spacing.xxxxsmall} 0;
        transition: all 0.3s ease-in-out;
        background: transparent;

        &:disabled {
          background: transparent;
        }

        ${LINK_HOVER_CSS}

        &:not(:disabled):hover {
          background-position: 0;

          &::before {
            width: 100%;
          }
        }
      `;
  }}
`;

const loading = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const Loading = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;

  > div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 18px;
    height: 18px;
    border: 2px solid ${({ theme }) => theme.color.surface.reversed};
    border-radius: 50%;
    animation: ${loading} 1.4s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ theme }) => theme.color.surface.reversed} transparent
      transparent transparent;
  }

  > div:nth-child(1) {
    animation-delay: -0.45s;
  }

  > div:nth-child(2) {
    animation-delay: -0.3s;
  }

  > div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
