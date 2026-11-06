import * as Progress from '@radix-ui/react-progress';
import styled, { css } from 'styled-components';

import {
  PROGRESS_BAR_HEIGHTS,
  ProgressBarSizes,
  TextTypes,
  coreColors,
  type ProgressBarSize,
} from '@a-little-world/little-world-design-system-core';

import Text from '../Text/Text';
import { STICKER_SHADOW_CSS } from '../../utils/styles';

export const PROGRESS_MOTION_MS = 660;
const PROGRESS_MOTION = `${PROGRESS_MOTION_MS}ms cubic-bezier(0.65, 0, 0.35, 1)`;
const FILL_LABEL_FADE = 'opacity 200ms ease';

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
  height: ${({ $size }) => PROGRESS_BAR_HEIGHTS.basic[$size]}px;

  /* Fix overflow clipping in Safari */
  /* https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0 */
  transform: translateZ(0);
`;

export const ProgressIndicator = styled(Progress.Indicator)`
  background-color: ${({ theme }) => theme.color.surface.indicator};
  width: 100%;
  height: 100%;
  transition: transform ${PROGRESS_MOTION};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const ScaleWrap = styled.div<{ $size?: ProgressBarSize }>`
  --lw-progress-frame-padding: ${({ theme, $size }) =>
    $size === ProgressBarSizes.Small
      ? theme.spacing.xxxxsmall
      : theme.spacing.xxxsmall};
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
  height: ${({ $size }) => PROGRESS_BAR_HEIGHTS.scale[$size]}px;
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
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.color.surface.success} 45%,
    ${({ theme }) => theme.color.surface.primary}
  );
`;

/**
 * The gradient spans the full track so a given value keeps the same colour
 * as the bar grows; clip-path reveals it up to the current value.
 */
export const ScaleFill = styled.span`
  position: absolute;
  inset: 0;
  z-index: 0;
  background: ${({ theme }) => theme.color.gradient.green10};
  clip-path: inset(
    0 var(--lw-progress-fill-inset, 100%) 0 0 round
      ${({ theme }) => theme.radius.ginormous}
  );
  transition: clip-path ${PROGRESS_MOTION};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
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
      ? `color-mix(in srgb, ${coreColors.white} 75%, transparent)`
      : `color-mix(in srgb, ${theme.color.border.success} 22%, transparent)`};
  pointer-events: none;
`;

export const ScaleFillLabel = styled.span<{
  $onFill: boolean;
  $visible: boolean;
}>`
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: ${({ theme }) => theme.zIndex.control};
  display: inline-flex;
  align-items: center;
  width: max-content;
  gap: ${({ theme }) => theme.spacing.xxxsmall};
  color: ${({ $onFill, theme }) =>
    $onFill ? coreColors.white : theme.color.text.success};
  white-space: nowrap;
  pointer-events: none;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: ${({ $visible }) => ($visible ? FILL_LABEL_FADE : 'none')};
`;

export const ScaleFillLabelText = styled(Text)`
  line-height: 1;
  color: inherit;
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
  bold: true,
})`
  color: ${({ theme }) => theme.color.text.heading};
  line-height: 1rem;
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
