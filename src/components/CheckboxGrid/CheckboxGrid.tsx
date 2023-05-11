import { CheckedState } from '@radix-ui/react-checkbox';
import React, { useState } from 'react';
import InputError from '../InputError/InputError';
import {
  CheckboxGridWrapper,
  StyledCheckbox,
  Grid,
  RowHeading,
  ColumnHeading,
} from './styles';

type SelectedType = { [x: string]: string[] };

type Props = {
  columnHeadings: string[];
  rowHeadings: string[];
  checkboxesByColumn: { name: string; value: string; key: string }[][];
  onSelection: (selected: SelectedType) => void;
  preSelected?: SelectedType;
  error?: string;
  name: string;
};

const CheckboxGrid: React.FC<Props> = ({
  columnHeadings,
  error,
  rowHeadings,
  checkboxesByColumn,
  preSelected,
  onSelection,
  name,
}: Props) => {
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
          {columnHeadings.map((column, index) => (
            <ColumnHeading bold index={index}>
              {column}
            </ColumnHeading>
          ))}
          {rowHeadings.map((row, index) => (
            <RowHeading index={index}>{row}</RowHeading>
          ))}
          {checkboxesByColumn.map((column, columnIndex) =>
            column.map(({ value, key }, rowIndex) => (
              <StyledCheckbox
                key={key + value}
                checked={selected[key]?.includes(value)}
                name={name}
                onCheckedChange={state => onSelect({ value, key, state })}
                value={value}
                $row={rowIndex + 2}
                $column={columnIndex + 2}
              />
            )),
          )}
        </>
      </Grid>
      <InputError visible={Boolean(error)}>{error}</InputError>
    </CheckboxGridWrapper>
  );
};

export default CheckboxGrid;
