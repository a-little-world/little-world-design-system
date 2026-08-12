import styled, { css, DefaultTheme } from 'styled-components';
import {
  ProgressRingAppearance,
  ProgressRingAppearances,
  type ProgressRingSize,
} from '@a-little-world/little-world-design-system-core';

import Text from '../Text/Text';

const getRingSizeStyles = (theme: DefaultTheme, size: ProgressRingSize) => {
  switch (size) {
    case 'small':
      return css`
        width: ${theme.spacing.xxlarge};
        height: ${theme.spacing.xxlarge};
      `;
    case 'medium':
      return css`
        width: calc(${theme.spacing.xxxlarge} + ${theme.spacing.xxsmall});
        height: calc(${theme.spacing.xxxlarge} + ${theme.spacing.xxsmall});
      `;
    case 'large':
      return css`
        width: calc(${theme.spacing.xxxxlarge} + ${theme.spacing.small});
        height: calc(${theme.spacing.xxxxlarge} + ${theme.spacing.small});
      `;
    case 'xlarge':
      return css`
        width: calc(${theme.spacing.massive} + ${theme.spacing.small});
        height: calc(${theme.spacing.massive} + ${theme.spacing.small});
      `;
  }
};

const getAppearanceStyles = (
  theme: DefaultTheme,
  appearance: ProgressRingAppearance,
) => {
  switch (appearance) {
    case ProgressRingAppearances.Inactive:
      return css`
        background: ${theme.color.surface.disabled};
        border: ${theme.spacing.xxxxsmall} dashed ${theme.color.border.moderate};
        opacity: 0.55;
      `;
    default:
      return css`
        background: transparent;
        border: none;
      `;
  }
};

export const RingWrap = styled.div<{
  $size: ProgressRingSize;
  $appearance: ProgressRingAppearance;
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.radius.half};
  box-sizing: border-box;

  ${({ theme, $size }) => getRingSizeStyles(theme, $size)}
  ${({ theme, $appearance }) => getAppearanceStyles(theme, $appearance)}
`;

export const Svg = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
`;

/** Content layer only — disc fill comes from the SVG so it stays flush with the stroke. */
export const InnerContent = styled.div<{
  $stroke: number;
  $appearance: ProgressRingAppearance;
}>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.half};
  gap: ${({ theme }) => theme.spacing.xxxxsmall};

  ${({ $appearance, $stroke }) =>
    $appearance === ProgressRingAppearances.Inactive
      ? css`
          inset: 0;
        `
      : css`
          /* viewBox is 100; stroke units map 1:1 to % of the ring diameter */
          inset: ${$stroke}%;
        `}
`;

export const Fraction = styled.div`
  display: inline-flex;
  align-items: baseline;
  line-height: 1;
  gap: 1px;
`;

export const FractionValue = styled(Text).attrs({
  tag: 'span',
  bold: true,
  center: true,
})`
  color: ${({ theme }) => theme.color.text.heading};
  line-height: 1;
  margin-right: ${({ theme }) => theme.spacing.xxxxsmall};
`;

export const FractionRest = styled(Text).attrs({
  tag: 'span',
  bold: true,
})`
  color: ${({ theme }) => theme.color.text.secondary};
  line-height: 1;
`;

export const Caption = styled(Text).attrs({
  tag: 'span',
  center: true,
})`
  color: ${({ theme }) => theme.color.text.secondary};
`;
