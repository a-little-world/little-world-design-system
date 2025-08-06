import styled, { css } from 'styled-components';
import Text from '../Text/Text';
import { TagAppearance, TagSizes } from '@a-little-world/little-world-design-system-core';

export const StyledTag = styled(Text)<{
  $size: TagSizes;
  $appearance?: TagAppearance;
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

  ${({ theme, $size }) => 
    $size === TagSizes.small
      ? css`
          height: 30px;
          padding: ${theme.spacing.xsmall};
        `
      : $size === TagSizes.large
      ? css`
          height: 33px;
          padding: ${theme.spacing.xxsmall} ${theme.spacing.xsmall};

          @media (min-width: ${theme.breakpoints.small}) {
            padding: ${theme.spacing.xxsmall} ${theme.spacing.small};
            min-width: 80px;
            height: 40px;
          }
        `
      : ''
  }

  ${({ theme, $appearance, $color }) => 
    $appearance === TagAppearance.outline
      ? css`
          color: ${$color || theme.color.text.primary};
          border: 2px solid ${$color || theme.color.border.selected};
        `
      : $appearance === TagAppearance.filled
      ? css`
          color: ${theme.color.text.reversed};
          background: ${$color || theme.color.text.bold};
          border: 2px solid ${$color || theme.color.border.contrast};
        `
      : $appearance === TagAppearance.error
      ? css`
          color: ${theme.color.text.error};
          background: ${theme.color.surface.error};
          border: 0px;
          filter: none;
        `
      : $appearance === TagAppearance.success
      ? css`
          color: ${theme.color.text.success};
          background: ${theme.color.surface.success};
          border: 0px;
          filter: none;
        `
      : ''
  }
`;

// Test version that doesn't extend Text
export const StyledTagTest = styled.div<{
  $size: TagSizes;
  $appearance?: TagAppearance;
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

  ${({ theme, $size }) => 
    $size === TagSizes.small
      ? css`
          height: 30px;
          padding: ${theme.spacing.xsmall};
        `
      : $size === TagSizes.large
      ? css`
          height: 33px;
          padding: ${theme.spacing.xxsmall} ${theme.spacing.xsmall};

          @media (min-width: ${theme.breakpoints.small}) {
            padding: ${theme.spacing.xxsmall} ${theme.spacing.small};
            min-width: 80px;
            height: 40px;
          }
        `
      : ''
  }

  ${({ theme, $appearance, $color }) => 
    $appearance === TagAppearance.outline
      ? css`
          color: ${$color || theme.color.text.primary};
          border: 2px solid ${$color || theme.color.border.selected};
        `
      : $appearance === TagAppearance.filled
      ? css`
          color: ${theme.color.text.reversed};
          background: ${$color || theme.color.text.bold};
          border: 2px solid ${$color || theme.color.border.contrast};
        `
      : $appearance === TagAppearance.error
      ? css`
          color: ${theme.color.text.error};
          background: ${theme.color.surface.error};
          border: 0px;
          filter: none;
        `
      : $appearance === TagAppearance.success
      ? css`
          color: ${theme.color.text.success};
          background: ${theme.color.surface.success};
          border: 0px;
          filter: none;
        `
      : ''
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xsmall};
  padding-top: ${({ theme }) => theme.spacing.xxxsmall};
`;
