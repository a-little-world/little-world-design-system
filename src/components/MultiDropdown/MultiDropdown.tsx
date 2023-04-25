import React, { useEffect, useState } from 'react';

import { AddMore, MultiDropdownWrapper, Segment } from './styles';
import { PlusIcon } from '../Icon';
import Text from '../Text/Text';
import Dropdown, { DropdownProps } from '../Dropdown/Dropdown';
import Button, { ButtonTypes } from '../Button/Button';
import Label from '../Label/Label';
import tokens from '../../tokens';

type Props = {
  addMoreLabel: string;
  label?: string;
  defaultSegments?: number;
  maxSegments?: number;
  onValueChange: (value: { [x: string]: string }[]) => void;
  firstDropdown: DropdownProps & {
    dataField: string;
    values: string[];
    ariaLabel: string;
  };
  secondDropdown: DropdownProps & {
    dataField: string;
    values: string[];
    ariaLabel: string;
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

  return (
    <MultiDropdownWrapper>
      <Label
        bold
        htmlFor={firstDropdown.label}
        marginBottom={tokens.spacing.small}
      >
        {label}
      </Label>
      {Array(segments)
        .fill('')
        .map((_, index) => (
          <Segment key={`MultiDropdown Segment ${index}`}>
            <Dropdown
              ariaLabel={firstDropdown.ariaLabel + index}
              placeholder={firstDropdown.placeholder}
              onValueChange={val => handleValueChange(val, 0, index)}
              options={firstDropdown.options}
              value={firstDropdown.values[index]}
              required={Boolean(secondDropdown.values[index])}
            />
            <Dropdown
              ariaLabel={secondDropdown.ariaLabel + index}
              placeholder={secondDropdown.placeholder}
              onValueChange={val => handleValueChange(val, 1, index)}
              options={secondDropdown.options}
              value={secondDropdown.values[index]}
              required={Boolean(firstDropdown.values[index])}
            />
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
