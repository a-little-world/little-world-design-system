import React, { SVGProps } from 'react';
import styled, { css } from 'styled-components';

// hide element but keep visible to screen readers
// parent requires position: relative;
const IconLabel = styled.span<{ $top: string; $visible?: boolean }>`
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
  labelId: string;
};

export type IconSvgProps = IconProps &
  SVGProps<SVGElement> & { color?: string };

const Icon = ({
  children,
  label,
  labelVisible,
  labelTop = '56px',
  labelId,
}: IconProps) => (
  <>
    {children}
    <IconLabel id={labelId} $visible={labelVisible} $top={labelTop}>
      {label}
    </IconLabel>
  </>
);

export default Icon;
