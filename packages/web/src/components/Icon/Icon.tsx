import React, { SVGProps } from 'react';
import styled, { css } from 'styled-components';

import {
  Gradients,
  IconBaseProps,
  TextTypes,
} from '@a-little-world/little-world-design-system-core';
import Text from '../Text/Text';
import { pixelate } from '../../utils/styles';

const Circle = styled.div<{
  $backgroundColor?: string;
  $borderColor?: string;
  color?: string;
}>`
  background: ${({ theme, $backgroundColor }) =>
    $backgroundColor || theme.color.surface.secondary};
  border: 2px solid
    ${({ theme, $borderColor }) => $borderColor || theme.color.border.contrast};
  border-radius: 50%;
  color: ${({ color }) => color || 'currentColor'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xxsmall};
`;

const IconFrame = styled.span<{ $color?: string }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${({ $color }) => $color && `color: ${$color};`}

  > svg {
    display: block;
  }
`;

const DisplayNumberWrap = styled.span`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: ${({ theme }) => theme.zIndex.above};
`;

const DisplayNumber = styled(Text)<{
  $top?: number | string;
  $right?: number | string;
}>`
  position: absolute;
  top: ${({ $top }) =>
    $top == null || $top === ''
      ? '50%'
      : typeof $top === 'number'
        ? pixelate($top)
        : $top};
  right: ${({ $right }) =>
    $right == null || $right === ''
      ? '50%'
      : typeof $right === 'number'
        ? pixelate($right)
        : $right};
  transform: ${({ $top, $right }) => {
    const centerX = $right == null || $right === '';
    const centerY = $top == null || $top === '';
    if (centerX && centerY) return 'translate(50%, -50%)';
    if (centerX) return 'translateX(50%)';
    if (centerY) return 'translateY(-50%)';
    return 'none';
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  aspect-ratio: 1;
  width: 1em;
  height: 1em;
  background-color: ${({ theme }) => theme.color.surface.primary};
  border-radius: ${({ theme }) => theme.radius.half};
  line-height: 1;
  user-select: none;
  color: currentColor;
`;

// hide element but keep visible to screen readers
// parent requires position: relative;
export const ImageLabel = styled.span<{
  $top: string | number;
  $visible?: boolean;
}>`
  ${({ $top, $visible }) =>
    $visible
      ? css`
          position: relative;
          top: ${$top};
        `
      : css`
          position: absolute;
          clip: rect(1px, 1px, 1px, 1px);
          height: 1px;
          overflow: hidden;

          white-space: nowrap;
          width: 1px;

          &:focus {
            clip: auto;
            height: auto;
            overflow: auto;
            position: absolute;
            width: auto;
          }
        `}
`;

export type IconSvgProps = Omit<IconBaseProps, 'children'> &
  SVGProps<SVGElement> & { gradient?: Gradients };

export const Icon = ({
  backgroundColor,
  borderColor,
  children,
  circular,
  className,
  color,
  displayNumber,
  displayNumberRight,
  displayNumberTop,
  label,
  labelVisible,
  labelTop = '56px',
}: IconBaseProps) => {
  const iconContent = circular ? (
    <Circle
      $backgroundColor={backgroundColor}
      $borderColor={borderColor}
      className={className}
      color={color}
    >
      {children}
    </Circle>
  ) : (
    children
  );

  const showDisplayNumber =
    displayNumber != null && Number.isFinite(displayNumber);

  return (
    <>
      {showDisplayNumber ? (
        <IconFrame $color={color}>
          {iconContent}
          <DisplayNumberWrap>
            <DisplayNumber
              tag="span"
              type={TextTypes.Body7}
              bold
              $top={displayNumberTop}
              $right={displayNumberRight}
            >
              {Math.trunc(displayNumber)}
            </DisplayNumber>
          </DisplayNumberWrap>
        </IconFrame>
      ) : (
        iconContent
      )}
      <ImageLabel id={label} $visible={labelVisible} $top={labelTop}>
        {label}
      </ImageLabel>
    </>
  );
};
