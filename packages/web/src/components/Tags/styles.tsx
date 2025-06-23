import styled, { css } from 'styled-components';

import Text from '../Text/Text';

export enum TagAppearance {
  outline = 'outline',
  filled = 'filled',
  error = 'error',
  success = 'success',
}

export enum TagSizes {
  small = 'small',
  large = 'large',
}

export const StyledTag = styled(Text)<{
  $size: string;
  $appearance?: string;
  $color?: string;
}>`
  font-family: 'Signika Negative';
  line-height: 1.1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxxsmall};
  background: ${({ theme }) => theme.color.surface.primary};
  border: 2px solid currentColor;
  border-radius: ${({ theme }) => theme.radius.large};
  min-width: 60px;
  width: fit-content;
  text-wrap: nowrap;
  filter: drop-shadow(0px 1px 3px rgb(0 0 0 / 22%));

  ${({ theme, $size }) => {
    if ($size === TagSizes.small)
      return css`
        height: 30px;
        padding: ${theme.spacing.xsmall};
      `;

    if ($size === TagSizes.large)
      return css`
        height: 33px;
        padding: ${theme.spacing.xxsmall} ${theme.spacing.xsmall};

        @media (min-width: ${theme.breakpoints.small}) {
          padding: ${theme.spacing.xxsmall} ${theme.spacing.small};
          min-width: 80px;
          height: 40px;
        }
      `;
  }}}

  ${({ theme, $appearance, $color }) => {
    if ($appearance === TagAppearance.outline)
      return css`
        color: ${$color || theme.color.text.primary};
        border: 2px solid ${$color || theme.color.border.selected};
      `;

    if ($appearance === TagAppearance.filled)
      return css`
        color: ${theme.color.text.reversed};
        background: ${$color || theme.color.text.bold};
        border: 2px solid ${$color || theme.color.border.contrast};
      `;

    if ($appearance === TagAppearance.error)
      return css`
        color: ${theme.color.text.error};
        background: ${theme.color.surface.error};
        border: 0px;
        filter: none;
      `;

    if ($appearance === TagAppearance.success)
      return css`
        color: ${theme.color.text.success};
        background: ${theme.color.surface.success};
        border: 0px;
        filter: none;
      `;
  }}}
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xsmall};
  padding-top: ${({ theme }) => theme.spacing.xxxsmall};
`;
