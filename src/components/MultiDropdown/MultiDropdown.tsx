import React, { useState } from 'react';

import { AddMore, MultiDropdownWrapper, Segment } from './styles';
import { PlusIcon, TrashIcon } from '../Icon';
import Text from '../Text/Text';
import Dropdown, { DropdownProps } from '../Dropdown/Dropdown';
import Button, { ButtonTypes } from '../Button/Button';
import Label from '../Label/Label';
import tokens from '../../tokens';

const DELETE_SEGMENT = 'delete segment';

type Props = {
  addMoreLabel: string;
  label?: string;
  labelTooltip?: string;
  defaultSegments?: number;
  maxSegments?: number;
  onValueChange: (value: { [x: string]: string }[]) => void;
  firstDropdown: DropdownProps & {
    dataField: string;
    values: string[];
    ariaLabel: string;
    errors: string[];
  };
  secondDropdown: DropdownProps & {
    dataField: string;
    values: string[];
    ariaLabel: string;
    errors: string[];
  };
};

const formatValues = (
  values: string[][],
  firstDataField: string,
  secondDataField: string,
) =>
  values[0].reduce((newValues: { [x: string]: string }[], firstVal, index) => {
    // only push the value if both values exist
    if (firstVal && values[1][index]) {
      newValues.push({
        [firstDataField]: firstVal,
        [secondDataField]: values[1][index],
      });
    }
    return newValues;
  }, []);

const MultiDropdown: React.FC<Props> = ({
  addMoreLabel = 'Add more rows',
  label,
  labelTooltip,
  firstDropdown,
  secondDropdown,
  onValueChange,
  defaultSegments = 2,
  maxSegments = 4,
}) => {
  const [segments, setSegments] = useState(defaultSegments);
  const [values, setValues] = useState([
    firstDropdown.values || [],
    secondDropdown.values || [],
  ]);

  const handleValueChange = (
    value: string,
    position: number,
    index: number,
  ) => {
    setValues(values => {
      const newValues = [...values];
      newValues[position][index] = value;
      if (Boolean(values[position || 0]))
        onValueChange(
          formatValues(
            newValues,
            firstDropdown.dataField,
            secondDropdown.dataField,
          ),
        );
      return newValues;
    });
  };

  const handleDelete = (index: number) => {
    setValues(values => {
      const newValues = [...values];
      newValues[0].splice(index, 1),
        newValues[1].splice(index, 1),
        onValueChange(
          formatValues(
            newValues,
            firstDropdown.dataField,
            secondDropdown.dataField,
          ),
        );
      return newValues;
    });
    setSegments(currentNumber => currentNumber - 1);
  };

  return (
    <MultiDropdownWrapper>
      <Label
        bold
        htmlFor={firstDropdown.label}
        marginBottom={tokens.spacing.xxsmall}
        toolTipText={labelTooltip}
      >
        {label}
      </Label>
      {Array(segments)
        .fill('')
        .map((_, index) => (
          <Segment
            key={`MultiDropdown Segment ${index}${values[0][index]}${values[1][index]}`}
          >
            <Dropdown
              ariaLabel={firstDropdown.ariaLabel + index}
              placeholder={firstDropdown.placeholder}
              onValueChange={val => handleValueChange(val, 0, index)}
              options={firstDropdown.options}
              value={values[0][index]}
              required={Boolean(values[1][index])}
              error={firstDropdown.errors?.[index]}
            />
            <Dropdown
              ariaLabel={secondDropdown.ariaLabel + index}
              placeholder={secondDropdown.placeholder}
              onValueChange={val => handleValueChange(val, 1, index)}
              options={secondDropdown.options}
              value={values[1][index]}
              required={Boolean(values[0][index])}
              error={secondDropdown.errors?.[index]}
            />
            {!!index && (
              <Button
                variation={ButtonTypes.Icon}
                onClick={() => handleDelete(index)}
              >
                <TrashIcon
                  label={DELETE_SEGMENT}
                  labelId={DELETE_SEGMENT}
                  width={16}
                  color="orange"
                />
              </Button>
            )}
          </Segment>
        ))}
      <AddMore>
        <Button
          variation={ButtonTypes.Control}
          disabled={segments === maxSegments}
          onClick={() => setSegments(currentNumber => currentNumber + 1)}
        >
          <PlusIcon
            label="add more dropdowns"
            labelId="add more dropdowns"
            width={10}
            color={'orange'}
          />
        </Button>
        <Text>{addMoreLabel}</Text>
      </AddMore>
    </MultiDropdownWrapper>
  );
};

export default MultiDropdown;
