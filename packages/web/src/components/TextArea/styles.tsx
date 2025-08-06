import styled, { css } from 'styled-components';

import { INPUT_ERROR_CSS } from '../InputError/InputError';
import Text from '../Text/Text';
import {
  TextAreaDimensions,
  TextAreaSize,
} from '@a-little-world/little-world-design-system-core';

export const AreaWrapper = styled.div<{ $size?: TextAreaSize }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ $size }) =>
    $size === TextAreaSize.Small ? '500px' : '100%'};
  position: relative;
`;

export const Area = styled.textarea<{
  $expandable: boolean;
  $hasError: boolean;
  $size: TextAreaSize;
}>`
  width: 100%;
  font-family: 'Signika Negative', sans-serif;
  font-size: 1rem;
  height: ${({ $size }) => $size};
  border: 1px solid ${({ theme }) => theme.color.border.moderate};
  border-radius: ${({ $size, theme }) =>
    $size === TextAreaSize.Xsmall ? theme.radius.large : theme.radius.xxsmall};
  background: ${({ theme }) => theme.color.surface.primary};
  color: ${({ theme }) => theme.color.text.primary};
  padding: ${({ $size, theme }) =>
    $size === TextAreaSize.Small
      ? theme.spacing.xxsmall
      : $size === TextAreaSize.Xsmall
        ? '11px 14px'
        : theme.spacing.small};
  box-sizing: border-box;
  margin-bottom: ${({ theme }) => theme.spacing.xxxxsmall};
  resize: none;

  ${({ $expandable, $size }) =>
    $expandable &&
    css`
      min-height: ${TextAreaDimensions[$size]};
      max-height: 13rem;
      max-height: 25dvh;
    `}
  ${({ $hasError }) => $hasError && INPUT_ERROR_CSS};
`;

export const Counter = styled(Text)`
  position: absolute;
  bottom: 0px;
  right: ${({ theme }) => theme.spacing.xxxxsmall};
`;
