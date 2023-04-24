import { CheckedState } from '@radix-ui/react-checkbox';
import React, { useState } from 'react';
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
};

const CheckboxGrid: React.FC<Props> = ({
  columnHeadings,
  rowHeadings,
  checkboxesByColumn,
  preSelected,
  onSelection,
}: Props) => {
  const [selected, setSelected] = useState<SelectedType>(preSelected || {});

  const onSelect = ({
    value,
    key,
    state,
  }: {
    value: string;
    key: string;
    state: CheckedState;
  }) => {
    console.log({ value, key });
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
            column.map(({ value, name, key }, rowIndex) => (
              <StyledCheckbox
                key={key + value}
                $row={rowIndex + 2}
                $column={columnIndex + 2}
                value={value}
                name={name}
                checked={selected[key]?.includes(value)}
                onCheckedChange={state => onSelect({ value, key, state })}
              />
            )),
          )}
        </>
      </Grid>
    </CheckboxGridWrapper>
  );
};

export default CheckboxGrid;
