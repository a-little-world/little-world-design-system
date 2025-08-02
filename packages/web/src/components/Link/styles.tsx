import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { ButtonAppearance, ButtonSizes } from '../Button/Button';
import { PrimaryButtonCss, SecondaryButtonCss } from '../Button/styles';
import { StyledElement } from '../Text/styles';

export const LINK_HOVER_CSS = css`
  transition: all 0.3s ease-in-out;
  background: transparent;

  // underline hover effect
  &::before {
    content: '';
    background: currentColor;
    display: block;
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 0;
    height: 1px;
    transition: all 0.3s ease-in-out;
  }
`;

const LINK_CSS = css<{
  $color?: string;
  $buttonAppearance?: ButtonAppearance;
  $textDecoration: boolean;
}>`
  position: relative;
  display: inline-flex;
  text-decoration: none;
  border: none;

  > span {
    color: currentColor;
  }

  ${({ theme, $buttonAppearance, $color, $textDecoration }) =>
    $buttonAppearance
      ? css`
          ${$buttonAppearance === ButtonAppearance.Primary
            ? PrimaryButtonCss
            : SecondaryButtonCss}
          box-sizing: border-box;
          align-items: center;
          justify-content: center;
        `
      : css`
          color: ${$color || theme.color.text.link};

          ${$textDecoration && LINK_HOVER_CSS}

          &:hover {
            cursor: pointer;
            background-position: 0;

            &::before {
              width: 100%;
            }
          }
        `}
`;

export const RouterLink = styled(Link)<{
  $active?: boolean;
  $color?: string;
  $buttonAppearance?: ButtonAppearance;
  $size?: keyof typeof ButtonSizes;
  $textDecoration: boolean;
}>`
  ${LINK_CSS}
`;

export const Anchor = styled.a<{
  $active?: boolean;
  $color?: string;
  $buttonAppearance?: ButtonAppearance;
  $size?: keyof typeof ButtonSizes;
  $textDecoration: boolean;
}>`
  ${LINK_CSS}
`;

export const AnchorText = styled(StyledElement)``;
