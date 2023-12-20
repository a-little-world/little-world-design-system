import styled from 'styled-components';
import tokens from '../../tokens';
import { INPUT_ERROR_CSS } from '../InputError/InputError';
import Text from '../Text/Text';

export const AreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  position: relative;
`;

export const AreaContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Area = styled.textarea<{ $hasError: boolean }>`
  width: 100%;
  font-family: 'Signika Negative', sans-serif;
  font-size: 1rem;
  height: 80px;
  border: 1px solid ${tokens.color.theme.light.border.moderate};
  border-radius: ${tokens.spacing.xxsmall};
  padding: ${tokens.spacing.xxsmall};
  box-sizing: border-box;
  margin-bottom: ${tokens.spacing.xxxxsmall};

  ${({ $hasError }) => $hasError && INPUT_ERROR_CSS};
`;

export const Counter = styled(Text)`
  position: absolute;
  top: -20px;
  right: ${tokens.spacing.xxxsmall};
`;
