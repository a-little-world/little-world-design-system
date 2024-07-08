import { CheckedState } from '@radix-ui/react-checkbox';
import React, { useState } from 'react';
import { useTheme } from 'styled-components';

import { CheckboxButton } from '../Checkbox/Checkbox';
import InputError from '../InputError/InputError';
import Label from '../Label/Label';
import { MultiCheckboxWrapper } from './styles';

type MultiCheckboxProps = {
  heading?: string;
  options: { label: string; value: string }[];
  onSelection: (selected: string[]) => void;
  preSelected?: string[];
  error?: string;
  name: string;
  readOnly?: boolean;
};

const MultiCheckbox: React.FC<MultiCheckboxProps> = ({
  error,
  heading,
  preSelected,
  onSelection,
  options,
  name,
  readOnly,
}) => {
  const theme = useTheme();
  const [selected, setSelected] = useState(preSelected || []);

  const onSelect = ({
    state,
    value,
  }: {
    value: string;
    state: CheckedState;
  }) => {
    console.log('onSelect', { state, value });
    const oldValues = selected || [];
    const newValues = state
      ? [...oldValues, value]
      : oldValues.filter(el => el !== value);

    setSelected(newValues);
    onSelection(newValues);
  };

  return (
    <div>
      {heading && <Label bold>{heading}</Label>}
      <MultiCheckboxWrapper>
        {options.map(({ value, label }) => (
          <CheckboxButton
            key={label}
            error={error}
            label={label}
            checked={selected.includes(value)}
            name={name}
            onCheckedChange={state => onSelect({ value, state })}
            value={value}
            color={theme.color.surface.selected}
          />
        ))}
      </MultiCheckboxWrapper>
      <InputError visible={Boolean(error)} textAlign="left">
        {error}
      </InputError>
    </div>
  );
};

export default MultiCheckbox;
