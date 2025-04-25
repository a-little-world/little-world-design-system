import React from 'react';
import styled, { css } from 'styled-components';

import Text from '../Text/Text';
import { TextTypes } from '@a-little-world/little-world-design-system-core';

export const INPUT_ERROR_CSS = css`
  border: 1px solid ${({ theme }) => theme.color.border.error};

  &:focus,
  &:focus-visible {
    outline: ${({ theme }) => theme.color.border.error} 1px auto;
  }
`;

const ErrorText = styled(Text)<{
  $top?: string;
  $bottom?: string;
  $right?: string;
  $left?: string;
  $textAlign: 'left' | 'center' | 'right';
  $visible: boolean;
}>`
  color: ${({ theme }) => theme.color.text.error};
  visibility: hidden;
  opacity: 0;
  transition: visibility 1s, opacity 1s;
  min-height: ${({ theme }) => theme.spacing.small};
  padding-left: 1px;
  text-align: ${({ $textAlign }) => $textAlign};

  ${({ $top, $bottom, $right, $left }) =>
    ($top || $right || $bottom || $left) &&
    `
    position: absolute;
    top: ${$top};
    bottom: ${$bottom};
    right: ${$right};
    left: ${$left};
  `};

  ${({ $visible }) =>
    $visible &&
    `
    visibility: visible;
    opacity: 1;
  `};
`;

type Props = {
  children: React.ReactNode;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  visible: boolean;
  textAlign?: 'left' | 'center' | 'right';
  textType?: TextTypes;
};

const InputError: React.FC<Props> = ({
  children,
  top,
  bottom,
  right,
  left,
  textAlign = 'right',
  textType = TextTypes.Body7,
  visible,
}) => (
  <ErrorText
    type={textType}
    $visible={visible}
    $top={top}
    $bottom={bottom}
    $right={right}
    $left={left}
    $textAlign={textAlign}
  >
    {children}
  </ErrorText>
);

export default InputError;
