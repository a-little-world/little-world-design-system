import React, { useEffect, useState } from 'react';
import { MultiSelectionWrapper, Options, Option } from './styles';

import Label from '../Label/Label';
import InputError from '../InputError/InputError';

type Props = {
  error?: string;
  id: string;
  label: string;
  labelTooltip?: string;
  options: { tag: string; value: string }[];
  preSelected?: string[];
  onSelection: (selected: string[]) => void;
};

const MultiSelection: React.FC<Props> = ({
  error,
  label,
  labelTooltip,
  id,
  options,
  preSelected = [],
  onSelection,
}: Props) => {
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    setSelected(preSelected);
  }, [JSON.stringify([preSelected])]);

  const handleOnClick = (newSelection: string[]) => {
    setSelected(newSelection);
    onSelection(newSelection);
  };

  return (
    <MultiSelectionWrapper>
      {label && (
        <Label bold htmlFor={id} toolTipText={labelTooltip}>
          {label}
        </Label>
      )}
      <Options $hasError={Boolean(error)}>
        {options.map(option => {
          const isSelected = selected?.some(el => el === option.value);

          return (
            <Option
              key={option.value}
              $selected={isSelected}
              onClick={() =>
                handleOnClick(
                  isSelected
                    ? selected.filter(el => el !== option.value)
                    : [...selected, option.value],
                )
              }
              type="button"
            >
              {option.tag}
            </Option>
          );
        })}
      </Options>
      <InputError visible={Boolean(error)}>{error}</InputError>
    </MultiSelectionWrapper>
  );
};

export default MultiSelection;
