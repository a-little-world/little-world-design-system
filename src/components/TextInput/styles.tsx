import styled from 'styled-components';
import tokens from '../../tokens';
import { INPUT_ERROR_CSS } from '../InputError/InputError';

export const InputWrapper = styled.div<{ $width: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ $width }) => $width};
`;

export const Input = styled.input<{ $hasError: boolean }>`
  width: 100%;
  border: 1px solid ${tokens.color.theme.light.border.moderate};
  border-radius: ${tokens.spacing.xxsmall};
  box-sizing: border-box;
  padding: ${tokens.spacing.xxsmall};
  margin-bottom: ${tokens.spacing.xxxxsmall};

  ${({ $hasError }) => $hasError && INPUT_ERROR_CSS}
`;
