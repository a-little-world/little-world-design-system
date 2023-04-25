import styled from 'styled-components';
import tokens from '../../tokens';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid ${tokens.color.theme.light.border.moderate};
  border-radius: 10px;
  padding: ${tokens.spacing.xxxsmall}; ;
`;
