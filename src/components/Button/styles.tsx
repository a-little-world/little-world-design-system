import styled, { css } from 'styled-components';
import tokens from '../../tokens';
import { coreColors } from '../../tokens/core';
import { ButtonTypes } from './Button';

const StandardButtonCss = css`
  border-radius: 90px;
  padding: ${tokens.spacing.xsmall} ${tokens.spacing.small};
  height: 40px;
  width: 100%;

  @media (min-width: ${tokens.breakpoints.small}) {
    min-width: 110px;
  }
`;

export const StyledButton = styled.button<{
  $backgroundColor?: string;
  $color?: string;
  $variation: keyof typeof ButtonTypes;
}>`
  cursor: pointer;
  font-family: 'Signika Negative';
  font-size: 0.8725rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  transition: background-color 0.5s ease, filter 0.5s ease,
    border-color 0.5s ease, color 0.5s ease, 0.4s;

  &:hover {
    transition: background-color 0.5s ease, filter 0.5s ease,
      border-color 0.5s ease, color 0.5s ease, 0.4s;
  }

  ${({ $backgroundColor, $color, $variation }) => {
    if ($variation === ButtonTypes.Primary)
      return css`
        ${StandardButtonCss}
        color: ${coreColors.white};
        border: none;
        background: linear-gradient(
          43.07deg,
          #db590b -3.02%,
          ${$backgroundColor || coreColors.orange} 93.96%
        );

        &:hover {
          filter: brightness(120%);
        }
      `;

    if ($variation === ButtonTypes.Secondary)
      return css`
        ${StandardButtonCss}
        border: 2px solid ${$color || coreColors.blue20};
        background-color: ${coreColors.white};
        color: ${$color || coreColors.blue20};

        &:hover {
          background: ${$backgroundColor || coreColors.blue20};
          color: white;
          border-color: ${$backgroundColor || coreColors.blue20};
        }
      `;

    if ($variation === ButtonTypes.Control)
      return css`
        border: 1px solid ${coreColors.gray10};
        border-radius: 50%;
        background: ${coreColors.white};
        width: 36px;
        height: 36px;

        &:hover {
          background-color: ${coreColors.gray20};
          color: white;
          border-color: ${coreColors.gray30};
        }
      `;

    if ($variation === ButtonTypes.Icon)
      return css`
        border: none;
        background: transparent;
        border-radius: 0px;
        height: auto;
        width: auto;
        padding: 0px;

        &:hover {
          filter: brightness(0.9);
        }
      `;

    if ($variation === ButtonTypes.Inline)
      return css`
        display: inline-flex;
        border: none;
        background: transparent;
        border-radius: 0px;
        height: auto;
        width: auto;
        padding: 0px;
        gap: ${tokens.spacing.xxxsmall};

        background-image: linear-gradient(
          248deg,
          ${$backgroundColor || '#36a9e0'} -40%,
          ${$backgroundColor || '#0367b2'} 100%
        );
        background-size: 0 100%;
        background-repeat: no-repeat;
        transition: 0.4s;

        &:hover {
          background-size: 100% 100%;
          color: white;
          > * {
            color: white;
          }
        }
      `;
  }}
`;
