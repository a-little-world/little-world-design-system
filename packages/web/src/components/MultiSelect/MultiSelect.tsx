import {
  MultiSelectFieldProps,
  MultiSelectProps,
  MultiSelectVariants,
} from '@a-little-world/little-world-design-system-core/dist/esm/types/MultiSelect';
import { isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react';

import Button, { ButtonSizes, ButtonVariations } from '../Button/Button';
import Combobox from '../Combobox/Combobox';
import Select from '../Select/Select';
import { PlusIcon, TrashIcon } from '../Icon';
import Label from '../Label/Label';
import Text from '../Text/Text';
import {
  AddMore,
  AddMoreButton,
  DeleteButton,
  MultiSelectWrapper,
  Segment,
} from './styles';
import { useTheme } from 'styled-components';

const DELETE_SEGMENT = 'delete segment';

const SELECT_FIELD_COMPONENTS = {
  [MultiSelectVariants.Select]: Select,
  [MultiSelectVariants.Combobox]: Combobox,
} as const;

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

const setSelectValues = (
  firstSelect: MultiSelectFieldProps,
  secondSelect: MultiSelectFieldProps,
) => {
  const first =
    (firstSelect.lockedValue
      ? [firstSelect.lockedValue, ...(firstSelect.values.slice(1) || [])]
      : firstSelect.values) || [];
  const second =
    (secondSelect.lockedValue
      ? [secondSelect.lockedValue, ...(secondSelect.values.slice(1) || [])]
      : secondSelect.values) || [];

  return [first, second];
};

const MultiSelect: React.FC<MultiSelectProps> = ({
  addMoreLabel = 'Add more rows',
  label,
  labelTooltip,
  inModal,
  locked,
  firstSelect,
  secondSelect,
  onValueChange,
  defaultSegments = 1,
  maxSegments = 4,
  restrictions,
  variant = MultiSelectVariants.Select,
}) => {
  const first = firstSelect;
  const second = secondSelect;

  const SelectField = SELECT_FIELD_COMPONENTS[variant];
  const [segments, setSegments] = useState(
    Math.max(
      first?.values?.length ?? 0,
      second?.values?.length ?? 0,
      defaultSegments,
    ),
  );

  const [values, setValues] = useState(setSelectValues(first, second));

  const theme = useTheme() as { spacing: { xsmall: string } };

  useEffect(() => {
    setValues(setSelectValues(first, second));
    setSegments(
      Math.max(
        first?.values?.length ?? 0,
        second?.values?.length ?? 0,
        defaultSegments,
      ),
    );
  }, [defaultSegments, first, first?.values, second, second?.values]);

  const handleValueChange = (
    value: string,
    position: number,
    index: number,
  ) => {
    setValues(values => {
      const newValues = [...values];
      newValues[position][index] = value;

      if (values[position || 0])
        onValueChange(
          formatValues(newValues, first.dataField, second.dataField),
        );
      return newValues;
    });
  };

  const handleDelete = (index: number) => {
    setValues(values => {
      const newValues = [...values];
      (newValues[0].splice(index, 1),
        newValues[1].splice(index, 1),
        onValueChange(
          formatValues(newValues, first.dataField, second.dataField),
        ));
      return newValues;
    });
    setSegments(currentNumber => currentNumber - 1);
  };

  return (
    <MultiSelectWrapper>
      {label && (
        <Label
          bold
          htmlFor={first.label}
          marginBottom={theme.spacing.xsmall}
          tooltipText={labelTooltip}
        >
          {label}
        </Label>
      )}
      {new Array(segments).fill('').map((_, index) => {
        const isFirstSegment = index === 0;
        const firstSegmentLockedVal1 = isFirstSegment
          ? first.lockedValue
          : undefined;
        const firstSegmentLockedVal2 = isFirstSegment
          ? second.lockedValue
          : undefined;
        const deletable = !!index && !locked;

        return (
          <Segment
            $locked={locked}
            key={`MultiSelect Segment ${index}${values[0][index]}${values[1][index]}`}
          >
            <SelectField
              ariaLabel={first.ariaLabel + index}
              inModal={inModal}
              placeholder={first.placeholder}
              onValueChange={(val: string) => handleValueChange(val, 0, index)}
              options={first.options}
              value={values[0][index]}
              lockedValue={
                firstSegmentLockedVal1 ||
                (locked ? values[0][index] : undefined)
              }
              required={Boolean(values[1][index])}
              error={first.errors?.[index]}
            />
            <SelectField
              ariaLabel={second.ariaLabel + index}
              inModal={inModal}
              placeholder={second.placeholder}
              onValueChange={(val: string) => handleValueChange(val, 1, index)}
              options={
                isEmpty(restrictions?.[values[0][index]])
                  ? second.options
                  : second.options.filter(option =>
                      restrictions?.[values[0][index]]?.includes(option.value),
                    )
              }
              value={values[1][index]}
              lockedValue={
                firstSegmentLockedVal2 ||
                (locked ? values[1][index] : undefined)
              }
              required={Boolean(values[0][index])}
              error={second.errors?.[index]}
            />
            {deletable && (
              <DeleteButton
                variation={ButtonVariations.Icon}
                onClick={() => handleDelete(index)}
                size={ButtonSizes.Small}
              >
                <TrashIcon label={DELETE_SEGMENT} color="orange" />
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
            <PlusIcon label="add more selects" width={10} />
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
    </MultiSelectWrapper>
  );
};

export { MultiSelectVariants };
export type { MultiSelectFieldProps, MultiSelectProps };
export default MultiSelect;
