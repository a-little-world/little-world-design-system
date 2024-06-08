import { CheckedState } from '@radix-ui/react-checkbox';
import React, { useState } from 'react';
import { useTheme } from 'styled-components';

import { coreColors } from '../../tokens/core';
import InputError from '../InputError/InputError';
import {
  CheckboxGridWrapper,
  ColumnHeading,
  Grid,
  RowHeading,
  ScrollableWrapper,
  StyledCheckbox,
} from './styles';

type SelectedType = { [x: string]: string[] };

type CheckboxGridProps = {
  columnHeadings: string[];
  rowHeadings: string[];
  highlightCells: SelectedType;
  checkboxesByColumn: { name: string; value: string; key: string }[][];
  onSelection: (selected: SelectedType) => void;
  preSelected?: SelectedType;
  error?: string;
  name: string;
  readOnly?: boolean;
};

const CheckboxGrid: React.FC<CheckboxGridProps> = ({
  columnHeadings,
  error,
  highlightCells,
  rowHeadings,
  checkboxesByColumn,
  preSelected,
  onSelection,
  name,
  readOnly,
}) => {
  const theme = useTheme();
  const [selected, setSelected] = useState<SelectedType>(preSelected || {});

  const onSelect = ({
    key,
    state,
    value,
  }: {
    value: string;
    key: string;
    state: CheckedState;
  }) => {
    const oldValues = selected[key] || [];
    const newValues = state
      ? [...oldValues, value]
      : oldValues.filter(el => el !== value);
    const newTotalSelection = { ...selected, [key]: newValues };

    setSelected(newTotalSelection);
    onSelection(newTotalSelection);
  };

  return (
    <CheckboxGridWrapper>
      <Grid $columns={columnHeadings.length} $rows={rowHeadings.length}>
        <>
          {/* on mobile, first column is fixed */}
          <ColumnHeading bold index={0}>
            {columnHeadings[0]}
          </ColumnHeading>
          {rowHeadings.map((row, index) => (
            <RowHeading key={row} index={index}>
              {row}
            </RowHeading>
          ))}
          <ScrollableWrapper>
            {columnHeadings.slice(1).map((column, index) => (
              <ColumnHeading bold index={index + 1}>
                {column}
              </ColumnHeading>
            ))}
            {checkboxesByColumn.map((column, columnIndex) =>
              column.map(({ value, key }, rowIndex) => {
                console.log({ value, key, rowIndex, columnIndex });
                return (
                  <StyledCheckbox
                    key={key + value + rowIndex}
                    checked={selected[key]?.includes(value)}
                    name={name}
                    onCheckedChange={state => onSelect({ value, key, state })}
                    value={value}
                    color={theme.color.surface.selected}
                    $row={rowIndex + 2}
                    $column={columnIndex + 2}
                    $highlight={!!highlightCells?.[key]?.includes(value)}
                    readOnly={readOnly}
                  />
                );
              }),
            )}
          </ScrollableWrapper>
        </>
      </Grid>
      <InputError visible={Boolean(error)}>{error}</InputError>
    </CheckboxGridWrapper>
  );
};

export default CheckboxGrid;
