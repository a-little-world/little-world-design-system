import React from 'react';
import styled, { css } from 'styled-components';

// hide element but keep visible to screen readers
// parent requires position: relative;
const Label = styled.span<{ $top: string; $visible?: boolean }>`
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
  label: string;
  labelTop?: string;
  labelVisible?: boolean;
  children: any;
};

export type IconSvgProps = IconProps & SVGSVGElement;

const Icon = ({
  children,
  label,
  labelVisible,
  labelTop = '56px',
}: IconProps) => (
  <>
    {children}
    <Label $visible={labelVisible} $top={labelTop}>
      {label}
    </Label>
  </>
);

export default Icon;
