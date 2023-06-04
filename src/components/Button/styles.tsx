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
  $backgroundColor: string;
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

  ${({ $backgroundColor, $variation }) => {
    if ($variation === ButtonTypes.Primary)
      return css`
        ${StandardButtonCss}
        color: ${coreColors.white};
        border: none;
        background: linear-gradient(
          43.07deg,
          #db590b -3.02%,
          ${$backgroundColor} 93.96%
        ); ;
      `;

    if ($variation === ButtonTypes.Secondary)
      return css`
        ${StandardButtonCss}
        border: 2px solid currentColor;
        background: ${coreColors.white};
      `;

    if ($variation === ButtonTypes.Control)
      return css`
        border: 1px solid ${coreColors.gray10};
        border-radius: 50%;
        background: ${coreColors.white};
        width: 36px;
        height: 36px;
      `;

    if ($variation === ButtonTypes.Icon)
      return css`
        border: none;
        background: transparent;
        border-radius: 0px;
        height: auto;
        width: auto;
        padding: 0px;
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
      `;
  }}
`;
