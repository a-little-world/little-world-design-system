import React, { useState } from 'react';
import { View } from 'react-native';

import Checkbox from '../Checkbox/Checkbox';
import InputError from '../InputError/InputError';
import Label from '../Label/Label';
import { CheckboxGroupOrientation, CheckboxGroupWrapper } from './styles';

type CheckboxGroupProps = {
  heading?: string;
  options: { label: string; value: string }[];
  onSelection: (selected: string[]) => void;
  preSelected?: string[];
  error?: string;
  name: string;
  readOnly?: boolean;
  orientation?: CheckboxGroupOrientation;
};

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  error,
  heading,
  preSelected,
  onSelection,
  options,
  readOnly,
  orientation = 'horizontal',
}) => {
  const [selected, setSelected] = useState<string[]>(preSelected ?? []);

  const handleChange = (value: string, checked: boolean) => {
    const next = checked
      ? [...selected, value]
      : selected.filter(v => v !== value);
    setSelected(next);
    onSelection(next);
  };

  return (
    <View>
      {heading ? <Label bold>{heading}</Label> : null}
      <CheckboxGroupWrapper orientation={orientation}>
        {options.map(({ value, label }) => (
          <Checkbox
            key={value}
            label={label}
            checked={selected.includes(value)}
            onCheckedChange={(state: boolean) => handleChange(value, state)}
            error={error}
            readOnly={readOnly}
          />
        ))}
      </CheckboxGroupWrapper>
      <InputError visible={Boolean(error)}>{error}</InputError>
    </View>
  );
};

/**
 * @deprecated Use CheckboxGroup instead. MultiCheckbox is kept for backward
 * compatibility only; will be removed in a future major version.
 */
const MultiCheckbox = CheckboxGroup;

export default CheckboxGroup;
export { MultiCheckbox };
export type { CheckboxGroupProps };
export type { CheckboxGroupProps as MultiCheckboxProps };
