import styled from 'styled-components';
import tokens from '../../tokens';

export const ContentWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.xxsmall};
  line-height: 2;
`;

export const List = styled.ul`
  padding-inline-start: ${tokens.spacing.small}; ;
`;

export const ListItem = styled.li`
  display: list-item;
`;
