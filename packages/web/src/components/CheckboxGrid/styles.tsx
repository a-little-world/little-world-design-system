import styled, { css } from 'styled-components';

import Checkbox from '../Checkbox/Checkbox';
import Text from '../Text/Text';

export const CheckboxGridWrapper = styled.div`
  width: 100%;
`;

export const Grid = styled.div<{
  $columns: number;
  $rows: number;
  $hasError: boolean;
}>`
  display: grid;
  width: 100%;
  row-gap: ${({ theme }) => theme.spacing.xsmall};
  column-gap: ${({ theme }) => theme.spacing.xxsmall};
  grid-template-columns: ${({ $columns }) =>
    `repeat(${$columns}, minmax(max-content, 1fr))`};
  grid-template-rows: ${({ $rows }) => `repeat(${$rows}, 1fr)`};
  grid-auto-rows: 27.5px;
  margin-bottom: ${({ theme }) => theme.spacing.xxsmall};
  padding-bottom: ${({ theme }) => theme.spacing.xxsmall};
  overflow-x: scroll;
  background: ${({ theme }) => theme.color.surface.primary};
  color: ${({ theme }) => theme.color.text.primary};
  align-items: center;
  border-bottom: 1px solid
    ${({ $hasError, theme }) =>
      $hasError ? theme.color.border.error : theme.color.surface.primary};
`;

export const ColumnHeading = styled(Text)<{ index: number }>`
  grid-column-start: ${({ index }) => index + 1};
  grid-column-end: ${({ index }) => index + 1};
  grid-row-start: 1;
  grid-row-end: 1;
  text-align: center;
  max-width: 100%;
  padding: ${({ theme }) => theme.spacing.xxxsmall};
  background: ${({ theme }) => theme.color.surface.primary};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

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
  background: ${({ theme }) => theme.color.surface.primary};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  $highlight: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row-start: ${({ $row }) => $row};
  grid-column-start: ${({ $column }) => $column};
  height: 100%;

  ${({ checked, theme }) =>
    checked &&
    css`
      border-color: ${theme.color.border.selected};
    `};

  ${({ $highlight, theme }) =>
    $highlight &&
    css`
      background: ${theme.color.surface.accent};
    `};
`;

export const BelowGrid = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Legend = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxsmall};
`;

export const Square = styled.div`
  ${({ theme }) =>
    css`
      width: 20px;
      height: 16px;
      background: ${theme.color.surface.accent};
      border: 1px solid ${theme.color.border.contrast};
    `};
`;
