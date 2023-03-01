import styled, { css } from 'styled-components';
import { coreColors } from '../../tokens/core';
import { ButtonTypes } from './Button';

export const StyledButton = styled.button<{
  $backgroundColor: string;
  $variation: keyof typeof ButtonTypes;
}>`
  border-radius: 90px;
  cursor: pointer;y
  font-family: 'Signika Negative';
  font-size: 0.8725 rem;
  font-weight: 700;
  padding: 12px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 110px;
  box-sizing: border-box;

  ${({ $backgroundColor, $variation }) => {
    if ($variation === ButtonTypes.Primary)
      return css`
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
        border: 2px solid currentColor;
        background: ${coreColors.white};
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
  }}
`;
