import styled from 'styled-components';
import tokens from '../../tokens';
import { DROPDOWN_MAX_WIDTH } from '../Dropdown/styles';

export const MultiDropdownWrapper = styled.div``;

export const AddMore = styled.div`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing.xxsmall};
`;

export const Segment = styled.section`
  display: grid;
  max-width: calc(${DROPDOWN_MAX_WIDTH} * 2 + ${tokens.spacing.small});
  grid-template-columns: repeat(2, minmax(0, 1fr)) minmax(
      ${tokens.spacing.small},
      auto
    );
  align-items: start;

  gap: ${tokens.spacing.small};
  margin-bottom: ${tokens.spacing.xxsmall};
`;
