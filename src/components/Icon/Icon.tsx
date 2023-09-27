import React, { SVGProps } from 'react';
import styled, { css } from 'styled-components';
import { coreColors } from '../../tokens/core';
import { Gradients } from './IconGradient';

const Circle = styled.div<{ color?: string }>`
  background: ${coreColors.gray10};
  border: 2px solid ${coreColors.gray20};
  border-radius: 50%;
  color: ${({ color }) => color || coreColors.gray30};
  display: flex;
  padding: 10px;
`;

// hide element but keep visible to screen readers
// parent requires position: relative;
export const ImageLabel = styled.span<{ $top: string; $visible?: boolean }>`
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

type IconProps = {
  circular?: boolean;
  color?: string;
  label: string;
  labelId: string;
  labelTop?: string;
  labelVisible?: boolean;
  children: any;
};

export type IconSvgProps = Omit<IconProps, 'children'> &
  SVGProps<SVGElement> & { gradient?: Gradients };

export const Icon = ({
  children,
  circular,
  color,
  label,
  labelVisible,
  labelTop = '56px',
  labelId,
}: IconProps) => (
  <>
    {circular ? <Circle color={color}>{children}</Circle> : children}
    <ImageLabel id={labelId} $visible={labelVisible} $top={labelTop}>
      {label}
    </ImageLabel>
  </>
);
