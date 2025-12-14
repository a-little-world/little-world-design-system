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
  withBackground?: boolean;
};

const MultiSelection: React.FC<Props> = ({
  error,
  label,
  labelTooltip,
  id,
  options,
  preSelected = [],
  onSelection,
  withBackground = true,
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
        <Label bold htmlFor={id} tooltipText={labelTooltip}>
          {label}
        </Label>
      )}
      <Options $hasError={Boolean(error)} $withBackground={withBackground}>
        {options.map(option => {
          const isSelected = selected?.some(el => el === option.value);

          return (
            <Option
              key={option.value}
              $selected={isSelected}
              $withBackground={withBackground}
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
