import { CheckedState } from '@radix-ui/react-checkbox';
import React, { useState } from 'react';
import { useTheme } from 'styled-components';

import InputError from '../InputError/InputError';
import Text from '../Text/Text';
import {
  BelowGrid,
  CheckboxGridWrapper,
  ColumnHeading,
  Grid,
  Legend,
  RowHeading,
  ScrollableWrapper,
  Square,
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
  legendText?: string;
  error?: string;
  name: string;
  readOnly?: boolean;
};

const CheckboxGrid: React.FC<CheckboxGridProps> = ({
  columnHeadings,
  error,
  highlightCells,
  legendText,
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
      <Grid
        $columns={columnHeadings.length}
        $rows={rowHeadings.length}
        $hasError={!!error}
      >
        <>
          {/* on mobile, first column is fixed */}
          <ColumnHeading tag="span" bold index={0}>
            {columnHeadings[0]}
          </ColumnHeading>
          {rowHeadings.map((row, index) => (
            <RowHeading tag="span" key={row} index={index}>
              {row}
            </RowHeading>
          ))}
          <ScrollableWrapper>
            {columnHeadings.slice(1).map((column, index) => (
              <ColumnHeading key={column} tag="span" bold index={index + 1}>
                {column}
              </ColumnHeading>
            ))}
            {checkboxesByColumn.map((column, columnIndex) =>
              column.map(({ value, key }, rowIndex) => {
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
      <BelowGrid>
        {legendText && highlightCells && (
          <Legend>
            <Square />
            <Text tag="span">=</Text>
            <Text tag="span">{legendText}</Text>
          </Legend>
        )}
        <InputError visible={Boolean(error)}>{error}</InputError>
      </BelowGrid>
    </CheckboxGridWrapper>
  );
};

export default CheckboxGrid;
