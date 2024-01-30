import styled from 'styled-components';

import tokens from '../../tokens';
import { INPUT_ERROR_CSS } from '../InputError/InputError';
import Text from '../Text/Text';
import { TextAreaSize } from './TextArea';

export const AreaWrapper = styled.div<{ $size?: TextAreaSize }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ $size }) =>
    $size === TextAreaSize.Small ? '500px' : '100%'};
  position: relative;
`;

export const Area = styled.textarea<{
  $hasError: boolean;
  $size?: TextAreaSize;
}>`
  width: 100%;
  font-family: 'Signika Negative', sans-serif;
  font-size: 1rem;
  height: ${({ $size }) => $size};
  border: 1px solid ${tokens.color.theme.light.border.moderate};
  border-radius: ${tokens.spacing.xxsmall};
  padding: ${({ $size }) =>
    $size === TextAreaSize.Small
      ? tokens.spacing.xxsmall
      : tokens.spacing.small};
  box-sizing: border-box;
  margin-bottom: ${tokens.spacing.xxxxsmall};

  ${({ $hasError }) => $hasError && INPUT_ERROR_CSS};
`;

export const Counter = styled(Text)`
  position: absolute;
  bottom: 0px;
  right: ${tokens.spacing.xxxxsmall};
`;
