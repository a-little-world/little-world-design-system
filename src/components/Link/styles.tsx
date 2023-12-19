import styled, { css } from 'styled-components';
import { StyledElement } from '../Text/styles';
import { ButtonAppearance } from '../Button/Button';
import { PrimaryButtonCss, SecondaryButtonCss } from '../Button/styles';

const ButtonAppearances = {
  Primary: PrimaryButtonCss,
  Secondary: SecondaryButtonCss,
};

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

export const Anchor = styled.a<{
  $active?: boolean;
  $color?: string;
  $buttonAppearance?: keyof typeof ButtonAppearance;
}>`
  position: relative;
  display: inline-flex;
  text-decoration: none;
  border: none;

  > span {
    color: currentColor;
  }

  ${({ theme, $buttonAppearance, $color }) =>
    $buttonAppearance
      ? css`
          ${ButtonAppearances[$buttonAppearance]}
          box-sizing: border-box;
          align-items: center;
          justify-content: center;
          width: 100%;
        `
      : css`
          color: ${$color || theme.color.text.link};

          ${LINK_HOVER_CSS}

          &:hover {
            cursor: pointer;
            background-position: 0;

            &::before {
              width: 100%;
            }
          }
        `}
`;

export const AnchorText = styled(StyledElement)``;
