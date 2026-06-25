import styled, { css } from 'styled-components';

export const StyledFieldGrid = styled.div<{
  $columns?: number;
  $gap?: string;
  $responsive?: boolean;
}>`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ $gap, theme }) => $gap ?? theme.spacing.medium};
  width: 100%;
  box-sizing: border-box;

  ${({ $columns = 2, $responsive = true, theme }) => css`
    @media (min-width: ${$responsive ? theme.breakpoints.small : '0px'}) {
      grid-template-columns: repeat(${$columns}, 1fr);
    }
  `}
`;
