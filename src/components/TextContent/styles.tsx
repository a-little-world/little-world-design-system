import styled, { css } from 'styled-components';

import tokens from '../../tokens';
import Text from '../Text/Text';

export const ContentWrapper = styled.div<{ $marginBottom?: string }>`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.xsmall};
  ${({ $marginBottom }) =>
    $marginBottom &&
    css`
      margin-bottom: ${$marginBottom};
    `}
`;

export const List = styled.ul`
  padding-inline-start: ${tokens.spacing.small};
  margin-block-start: 0;
  margin-block-end: ${tokens.spacing.xxsmall};
  list-style: disc;

  > li:not(:last-child) {
    margin-bottom: ${tokens.spacing.xxsmall};
  }
`;

export const ListItem = styled(Text)`
  display: list-item;
`;

export const ImageWrapper = styled.div<{ $marginBottom?: string }>`
  margin: 0 auto;
  ${({ $marginBottom }) =>
    $marginBottom &&
    css`
      margin-bottom: ${$marginBottom};
    `}
`;
