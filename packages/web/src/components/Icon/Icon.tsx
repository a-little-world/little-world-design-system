import React, { SVGProps } from 'react';
import styled, { css } from 'styled-components';

import {
  Gradients,
  IconBaseProps,
} from '@a-little-world/little-world-design-system-core';

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
  label,
  labelVisible,
  labelTop = '56px',
}: IconBaseProps) => (
  <>
    {circular ? (
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
    )}
    <ImageLabel id={label} $visible={labelVisible} $top={labelTop}>
      {label}
    </ImageLabel>
  </>
);
