import styled, { css } from 'styled-components';

import Checkbox from '../Checkbox/Checkbox';
import Text from '../Text/Text';

export const CheckboxGridWrapper = styled.div`
  width: 100%;
`;

export const GridWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Grid = styled.div<{
  $columns: number;
  $rows: number;
  $hasError: boolean;
}>`
  display: grid;
  width: 100%;
  row-gap: 0;
  column-gap: 0;
  grid-template-columns: ${({ $columns }) =>
    `minmax(max-content, 1fr) repeat(${$columns - 1}, minmax(80px, 1fr))`};
  grid-template-rows: ${({ $rows }) => `72px repeat(${$rows}, 40px)`};
  margin-bottom: ${({ theme }) => theme.spacing.xxsmall};
  padding-bottom: ${({ theme }) => theme.spacing.xxsmall};
  overflow-x: scroll;
  background: ${({ theme }) => theme.color.surface.primary};
  color: ${({ theme }) => theme.color.text.primary};
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.xsmall};
  border-bottom: 1px solid
    ${({ $hasError, theme }) =>
      $hasError ? theme.color.border.error : theme.color.surface.primary};
`;

export const FadeOverlay = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: ${({ theme }) => theme.spacing.xxsmall};
  width: 40px;
  pointer-events: none;
  background: linear-gradient(
    to right,
    transparent,
    ${({ theme }) => theme.color.surface.primary}
  );
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
  z-index: 3;
  border-radius: 0 ${({ theme }) => theme.radius.xsmall}
    ${({ theme }) => theme.radius.xsmall} 0;
`;

export const ColumnHeading = styled(Text)<{ index: number }>`
  grid-column-start: ${({ index }) => index + 1};
  grid-column-end: ${({ index }) => index + 1};
  grid-row-start: 1;
  grid-row-end: 1;
  text-align: center;
  max-width: 100%;
  padding: ${({ theme }) => theme.spacing.xxsmall};
  background: ${({ theme }) => theme.color.surface.primary};
  border-right: 1px solid ${({ theme }) => theme.color.border.subtle};
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  ${({ index }) =>
    !index &&
    `
    position: sticky;
    left: 0;
  `}
`;

export const RowHeading = styled.div<{ index: number }>`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: ${({ index }) => index + 2};
  grid-row-end: ${({ index }) => index + 2};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xxsmall};
  position: sticky;
  left: 0;
  background: ${({ theme }) => theme.color.surface.primary};
  padding: 0 ${({ theme }) => theme.spacing.xxsmall};
  border-right: 1px solid ${({ theme }) => theme.color.border.subtle};
  height: 100%;
  text-align: center;
  z-index: 2;
`;

export const ColumnHeaderCell = styled.div<{ index: number }>`
  grid-column-start: ${({ index }) => index + 1};
  grid-column-end: ${({ index }) => index + 1};
  grid-row-start: 1;
  grid-row-end: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xxsmall};
  padding: ${({ theme }) => theme.spacing.xxsmall};
  background: ${({ theme }) => theme.color.surface.primary};
  border-bottom: 1px solid ${({ theme }) => theme.color.border.subtle};
  height: 100%;
  min-width: 0;
  text-align: center;
`;

export const ScrollableWrapper = styled.div`
  overflow-x: scroll;
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
  background: ${({ theme }) => theme.color.surface.subtle};

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
  align-items: flex-start;
`;

export const ArrowButtonsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xxsmall};
  align-items: center;
`;

export const Legend = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxsmall};
`;

export const Square = styled.div`
  ${({ theme }) => css`
    width: 20px;
    height: 16px;
    background: ${theme.color.surface.accent};
    border: 1px solid ${theme.color.border.contrast};
  `};
`;
