import * as Progress from '@radix-ui/react-progress';
import styled, { css } from 'styled-components';

import {
  ProgressBarSizes,
  TextTypes,
  type ProgressBarSize,
} from '@a-little-world/little-world-design-system-core';

import Text from '../Text/Text';
import { STICKER_SHADOW_CSS } from '../../utils/styles';

const PROGRESS_MOTION = '660ms cubic-bezier(0.65, 0, 0.35, 1)';

const basicBarHeight = (size: ProgressBarSize) =>
  size === ProgressBarSizes.Large
    ? css`
        height: ${({ theme }) => theme.spacing.small};
      `
    : css`
        height: ${({ theme }) => theme.spacing.xxsmall};
      `;

const scaleBarHeight = (size: ProgressBarSize) =>
  size === ProgressBarSizes.Small
    ? css`
        height: ${({ theme }) => theme.spacing.large};
      `
    : css`
        height: calc(
          ${({ theme }) => theme.spacing.xlarge} +
            ${({ theme }) => theme.spacing.xxsmall}
        );
      `;

export const ProgressBarWrapper = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xsmall};

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.medium}) {
      gap: ${theme.spacing.small};
    }
  `}
`;

export const ProgressRoot = styled(Progress.Root)<{
  $fullWidth?: boolean;
  $size: ProgressBarSize;
}>`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.ginormous};
  background: ${({ theme }) => theme.color.surface.secondary};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : '300px')};
  ${({ $size }) => basicBarHeight($size)}

  /* Fix overflow clipping in Safari */
  /* https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0 */
  transform: translateZ(0);
`;

export const ProgressIndicator = styled(Progress.Indicator)`
  background-color: ${({ theme }) => theme.color.surface.indicator};
  width: 100%;
  height: 100%;
  transition: transform ${PROGRESS_MOTION};
`;

export const ScaleWrap = styled.div`
  --lw-progress-frame-padding: ${({ theme }) => theme.spacing.xxxsmall};
  --lw-progress-frame-border: 2px;
  --lw-progress-scale-inset: calc(
    var(--lw-progress-frame-padding) + var(--lw-progress-frame-border)
  );

  width: 100%;
  container-type: inline-size;
  container-name: lw-progress-scale;
`;

export const ScaleFrame = styled(Progress.Root)<{ $size: ProgressBarSize }>`
  box-sizing: border-box;
  width: 100%;
  ${({ $size }) => scaleBarHeight($size)}
  padding: var(--lw-progress-frame-padding);
  border: var(--lw-progress-frame-border) solid
    ${({ theme }) => theme.color.text.primary};
  border-radius: ${({ theme }) => theme.radius.ginormous};
  background: ${({ theme }) => theme.color.surface.primary};
  ${STICKER_SHADOW_CSS}
`;

export const ScaleTrack = styled.div`
  position: relative;
  height: 100%;
  border-radius: ${({ theme }) => theme.radius.ginormous};
  overflow: hidden;
  background: ${({ theme }) => theme.color.surface.progressTrack};
`;

export const ScaleFill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
  height: 100%;
  border-radius: ${({ theme }) => theme.radius.ginormous};
  overflow: hidden;
  transition: width ${PROGRESS_MOTION};
`;

export const ScaleGradient = styled.span`
  display: block;
  height: 100%;
  background: ${({ theme }) => theme.color.gradient.green10};
`;

export const ScaleMarker = styled.span<{
  $covered: boolean;
  $percent: number;
}>`
  position: absolute;
  top: 25%;
  bottom: 25%;
  left: ${({ $percent }) => $percent}%;
  z-index: ${({ theme }) => theme.zIndex.above};
  width: 2px;
  margin-left: -1px;
  border-radius: 1px;
  background: ${({ theme, $covered }) =>
    $covered
      ? theme.color.border.progressMarkerCovered
      : theme.color.border.progressMarker};
  pointer-events: none;
`;

export const ScaleHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.small};
  margin: ${({ theme }) => `${theme.spacing.xxsmall} ${theme.spacing.xxsmall}`};
  margin-top: 0;
`;

export const ScaleTitle = styled(Text).attrs({
  tag: 'span',
  type: TextTypes.Body5,
})`
  min-width: 0;
  color: ${({ theme }) => theme.color.text.primary};
  line-height: 1rem;
`;

export const ScaleScore = styled.div`
  display: inline-flex;
  align-items: baseline;
  flex-shrink: 0;
  margin-left: auto;
  gap: ${({ theme }) => theme.spacing.xxsmall};
  line-height: 1rem;
`;

export const ScaleScoreValue = styled(Text).attrs({
  tag: 'span',
  type: TextTypes.Heading4,
  bold: true,
})`
  color: ${({ theme }) => theme.color.text.heading};
  line-height: 1rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-size: 1.5rem;
    }
  `}
`;

export const ScaleScoreRest = styled(Text).attrs({
  tag: 'span',
  type: TextTypes.Heading7,
})`
  color: ${({ theme }) => theme.color.text.secondary};
  line-height: 1;
`;

export const ScaleRow = styled.div`
  position: relative;
  height: calc(
    ${({ theme }) => theme.spacing.xlarge} -
      ${({ theme }) => theme.spacing.xxxsmall}
  );
  margin-top: ${({ theme }) => theme.spacing.xsmall};
  margin-right: var(--lw-progress-scale-inset);
  margin-left: var(--lw-progress-scale-inset);
`;

const scaleLabelBase = css`
  position: absolute;
  top: 0;
  line-height: 1.3;
`;

export const ScaleStartLabel = styled(Text).attrs({
  tag: 'span',
  type: TextTypes.Body6,
})`
  ${scaleLabelBase}
  left: 0;
  color: ${({ theme }) => theme.color.text.secondary};
`;

export const ScaleTickLabel = styled(Text).attrs({
  tag: 'span',
  type: TextTypes.Body6,
})<{
  $base: boolean;
  $medium: boolean;
  $percent: number;
  $small: boolean;
}>`
  ${scaleLabelBase}
  left: ${({ $percent }) => $percent}%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.color.text.tertiary};

  ${({ $base, $medium, $small, theme }) => css`
    display: ${$base ? 'inline' : 'none'};

    @media (min-width: ${theme.breakpoints.small}) {
      display: ${$small ? 'inline' : 'none'};
    }

    @media (min-width: ${theme.breakpoints.medium}) {
      display: ${$medium ? 'inline' : 'none'};
    }

    @container lw-progress-scale (width < ${theme.breakpoints.small}) {
      display: ${$base ? 'inline' : 'none'};
    }

    @container lw-progress-scale (width >= ${theme.breakpoints.small}) and
      (width < ${theme.breakpoints.medium}) {
      display: ${$small ? 'inline' : 'none'};
    }

    @container lw-progress-scale (width >= ${theme.breakpoints.medium}) {
      display: ${$medium ? 'inline' : 'none'};
    }
  `}
`;

export const ScaleEndLabel = styled(Text).attrs({
  tag: 'span',
  type: TextTypes.Body6,
  bold: true,
})`
  ${scaleLabelBase}
  right: 0;
  text-align: right;
  color: ${({ theme }) => theme.color.text.secondary};
`;
