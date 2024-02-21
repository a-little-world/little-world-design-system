import styled, { css } from 'styled-components';

import tokens from '../../tokens';
import Checkbox from '../Checkbox/Checkbox';
import Text from '../Text/Text';

export const CheckboxGridWrapper = styled.div`
  width: 100%;
`;

export const Grid = styled.div<{
  $columns: number;
  $rows: number;
}>`
  display: grid;
  width: 100%;
  row-gap: ${tokens.spacing.xsmall};

  grid-template-columns: ${({ $columns }) =>
    `repeat(${$columns}, minmax(max-content, 1fr))`};
  grid-template-rows: ${({ $rows }) => `repeat(${$rows}, 1fr)`};
  margin-bottom: ${tokens.spacing.small};
  padding-bottom: ${tokens.spacing.xxsmall};
  overflow-x: scroll;
  background: ${({ theme }) => theme.color.surface.primary};
  color: ${({ theme }) => theme.color.text.primary};
`;

export const ColumnHeading = styled(Text)<{ index: number }>`
  grid-column-start: ${({ index }) => index + 1};
  grid-column-end: ${({ index }) => index + 1};
  grid-row-start: 1;
  grid-row-end: 1;
  text-align: center;
  max-width: 100%;
  padding: ${tokens.spacing.xxxsmall};

  ${({ index }) =>
    !index &&
    `
    position: sticky;
    left: 0;
  `}
`;

export const RowHeading = styled(Text)<{ index: number }>`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: ${({ index }) => index + 2};
  grid-row-end: ${({ index }) => index + 2};
  text-align: center;
  position: sticky;
  left: 0;
`;

export const ScrollableWrapper = styled.div`
  overflow: scroll-x;
  width: 100%;
  display: contents;
`;

export const StyledCheckbox = styled(Checkbox)<{
  checked: boolean;
  $row: number;
  $column: number;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row-start: ${({ $row }) => $row};
  grid-column-start: ${({ $column }) => $column};

  ${({ checked, theme }) =>
    checked &&
    css`
      border-color: ${theme.color.border.selected};
    `};
`;
