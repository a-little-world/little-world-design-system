import styled from 'styled-components';
import tokens from '../../tokens';

export const AreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`;

export const Area = styled.textarea`
  width: 100%;
  font-family: 'Signika Negative', sans-serif;
  border: 1px solid ${tokens.color.theme.light.border.moderate};
  border-radius: 10px;
  padding: ${tokens.spacing.xxxsmall};
`;
