import React, { useState } from 'react';

import tokens from '../../tokens';
import Button, { ButtonVariations } from '../Button/Button';
import Dropdown, { DropdownProps } from '../Dropdown/Dropdown';
import { PlusIcon, TrashIcon } from '../Icon';
import Label from '../Label/Label';
import Text from '../Text/Text';
import {
  AddMore,
  AddMoreButton,
  MultiDropdownWrapper,
  Segment,
} from './styles';

const DELETE_SEGMENT = 'delete segment';

type Props = {
  addMoreLabel: string;
  error?: string;
  label?: string;
  labelTooltip?: string;
  locked?: boolean;
  defaultSegments?: number;
  maxSegments?: number;
  onValueChange: (value: { [x: string]: string }[]) => void;
  firstDropdown: DropdownProps & {
    lockedValue: string;
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
  locked,
  firstDropdown,
  secondDropdown,
  onValueChange,
  defaultSegments = 1,
  maxSegments = 4,
}) => {
  const [segments, setSegments] = useState(
    firstDropdown?.values?.length || defaultSegments,
  );
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
      {label && (
        <Label
          bold
          htmlFor={firstDropdown.label}
          marginBottom={tokens.spacing.xsmall}
          toolTipText={labelTooltip}
        >
          {label}
        </Label>
      )}
      {Array(segments)
        .fill('')
        .map((_, index) => {
          const isFirstSegment = index === 0;

          return (
            <Segment
              $locked={locked}
              key={`MultiDropdown Segment ${index}${values[0][index]}${values[1][index]}`}
            >
              <Dropdown
                ariaLabel={firstDropdown.ariaLabel + index}
                placeholder={firstDropdown.placeholder}
                onValueChange={val => handleValueChange(val, 0, index)}
                options={firstDropdown.options}
                value={values[0][index]}
                lockedValue={
                  isFirstSegment || locked
                    ? firstDropdown.lockedValue || values[0][index]
                    : undefined
                }
                required={Boolean(values[1][index])}
                error={firstDropdown.errors?.[index]}
              />
              <Dropdown
                ariaLabel={secondDropdown.ariaLabel + index}
                placeholder={secondDropdown.placeholder}
                onValueChange={val => handleValueChange(val, 1, index)}
                options={secondDropdown.options}
                value={values[1][index]}
                lockedValue={locked ? values[1][index] : undefined}
                required={Boolean(values[0][index])}
                error={secondDropdown.errors?.[index]}
              />
              {!!index && !locked && (
                <Button
                  variation={ButtonVariations.Icon}
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
          );
        })}
      {!locked && (
        <AddMore>
          <AddMoreButton
            variation={ButtonVariations.Control}
            disabled={segments === maxSegments}
            onClick={() => setSegments(currentNumber => currentNumber + 1)}
          >
            <PlusIcon
              label="add more dropdowns"
              labelId="add more dropdowns"
              width={10}
            />
          </AddMoreButton>
          <Button
            variation={ButtonVariations.Inline}
            disabled={segments === maxSegments}
            onClick={() => setSegments(currentNumber => currentNumber + 1)}
          >
            <Text>{addMoreLabel}</Text>
          </Button>
        </AddMore>
      )}
    </MultiDropdownWrapper>
  );
};

export default MultiDropdown;
