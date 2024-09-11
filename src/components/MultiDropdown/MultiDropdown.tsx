import React, { useEffect, useState } from 'react';

import tokens from '../../tokens';
import Button, { ButtonSizes, ButtonVariations } from '../Button/Button';
import Dropdown, { DropdownProps } from '../Dropdown/Dropdown';
import { PlusIcon, TrashIcon } from '../Icon';
import Label from '../Label/Label';
import Text from '../Text/Text';
import {
  AddMore,
  AddMoreButton,
  DeleteButton,
  MultiDropdownWrapper,
  Segment,
} from './styles';

const DELETE_SEGMENT = 'delete segment';

interface DropdownInstanceProps extends DropdownProps {
  lockedValue: string;
  dataField: string;
  values: string[];
  ariaLabel: string;
  errors: string[];
}

type Props = {
  addMoreLabel: string;
  error?: string;
  label?: string;
  labelTooltip?: string;
  locked?: boolean;
  defaultSegments?: number;
  maxSegments?: number;
  onValueChange: (value: { [x: string]: string }[]) => void;
  firstDropdown: DropdownInstanceProps;
  secondDropdown: DropdownInstanceProps;
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

const setDropdownValues = (
  firstDropdown: DropdownInstanceProps,
  secondDropdown: DropdownInstanceProps,
) => [
  (firstDropdown.lockedValue
    ? [firstDropdown.lockedValue, ...(firstDropdown.values.splice(1) || [])]
    : firstDropdown.values) || [],
  (secondDropdown.lockedValue
    ? [secondDropdown.lockedValue, ...(secondDropdown.values.splice(1) || [])]
    : secondDropdown.values) || [],
];

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
    Math.max(
      firstDropdown?.values?.length,
      secondDropdown?.values?.length,
      defaultSegments,
    ),
  );
  const [values, setValues] = useState(
    setDropdownValues(firstDropdown, secondDropdown),
  );

  useEffect(() => {
    setValues(setDropdownValues(firstDropdown, secondDropdown));
    setSegments(
      Math.max(
        firstDropdown?.values?.length,
        secondDropdown?.values?.length,
        defaultSegments,
      ),
    );
  }, [firstDropdown?.values, secondDropdown?.values]);

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
          const firstSegmentLockedVal1 = isFirstSegment
            ? firstDropdown.lockedValue
            : undefined;
          const firstSegmentLockedVal2 = isFirstSegment
            ? secondDropdown.lockedValue
            : undefined;

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
                  firstSegmentLockedVal1 ||
                  (locked ? values[0][index] : undefined)
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
                lockedValue={
                  firstSegmentLockedVal2 ||
                  (locked ? values[1][index] : undefined)
                }
                required={Boolean(values[0][index])}
                error={secondDropdown.errors?.[index]}
              />
              {!!index && !locked && (
                <DeleteButton
                  variation={ButtonVariations.Icon}
                  onClick={() => handleDelete(index)}
                  size={ButtonSizes.Small}
                >
                  <TrashIcon
                    label={DELETE_SEGMENT}
                    labelId={DELETE_SEGMENT}
                    color="orange"
                  />
                </DeleteButton>
              )}
            </Segment>
          );
        })}
      {!locked && (
        <AddMore>
          <AddMoreButton
            variation={ButtonVariations.Icon}
            disabled={segments === maxSegments}
            onClick={() => setSegments(currentNumber => currentNumber + 1)}
            size={ButtonSizes.Small}
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
