import styled, { css } from 'styled-components';
import tokens from '../../tokens';

export const MultiDropdownWrapper = styled.div``;

export const AddMore = styled.div`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing.xxsmall};
`;

export const Segment = styled.div`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing.small};
  margin-bottom: ${tokens.spacing.small};
`;
