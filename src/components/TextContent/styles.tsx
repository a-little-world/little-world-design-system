import styled from 'styled-components';

import tokens from '../../tokens';
import Text from '../Text/Text';

export const ContentWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.xsmall};
`;

export const List = styled.ul`
  padding-inline-start: ${tokens.spacing.small};
  margin-block-start: 0;
  margin-block-end: 0;
  > li:not(:last-child) {
    margin-bottom: ${tokens.spacing.xxsmall};
  }
`;

export const ListItem = styled(Text)`
  display: list-item;
`;
