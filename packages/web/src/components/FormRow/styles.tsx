import React from 'react';
import styled from 'styled-components';

export const StyledFormRow = styled.div<{
  $align?: React.CSSProperties['alignItems'];
  $gap?: string;
}>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap, theme }) => $gap ?? theme.spacing.medium};
  align-items: stretch;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: ${({ $align }) => $align ?? 'flex-start'};

    & > * {
      flex: 1 1 0;
      min-width: 0;
    }
  }
`;
