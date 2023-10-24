import React from 'react';
import styled, { css } from 'styled-components';
import Text, { TextTypes } from '../Text/Text';
import tokens from '../../tokens';

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
  $visible: boolean;
}>`
  color: ${({ theme }) => theme.color.text.error};
  visibility: hidden;
  opacity: 0;
  transition: visibility 1s, opacity 1s;
  height: ${tokens.spacing.small};
  padding-left: 1px;
  ${({ $top, $bottom, $right, $left }) =>
    ($top || $right) &&
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

  @media (min-width: ${tokens.breakpoints.small}) {
    text-align: left;
  }
`;

type Props = {
  children: React.ReactNode;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  visible: boolean;
};

const InputError: React.FC<Props> = ({
  children,
  top,
  bottom,
  right,
  left,
  visible,
}) => (
  <ErrorText
    type={TextTypes.Body5}
    $visible={visible}
    $top={top}
    $bottom={bottom}
    $right={right}
    $left={left}
  >
    {children}
  </ErrorText>
);

export default InputError;
