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

export const List = styled.ul<{ ordered?: boolean }>`
  padding-inline-start: ${tokens.spacing.small};
  margin-block-start: 0;
  margin-block-end: ${tokens.spacing.xxsmall};
  list-style: ${({ ordered }) => (ordered ? 'decimal' : 'disc')};

  > li:not(:last-child) {
    margin-bottom: ${tokens.spacing.xxsmall};
  }
`;

export const ListItem = styled(Text)`
  display: list-item;
`;

export const ImageWrapper = styled.div<{
  $marginBottom?: string;
  $width?: string;
  $maxWidth?: string;
}>`
  margin: 0 auto;
  width: ${({ $width }) => $width || '100%'};
  max-width: ${({ $maxWidth }) => $maxWidth || '100%'};

  ${({ $marginBottom }) =>
    $marginBottom &&
    css`
      margin-bottom: ${$marginBottom};
    `};
`;
