import React, { useEffect, useState } from 'react';
import { MultiSelectionWrapper, Options, Option } from './styles';

import Label from '../Label/Label';
import tokens from '../../tokens';

type Props = {
  id: string;
  label: string;
  options: { tag: string; value: string }[];
  preSelected?: string[];
  onSelection: (selected: string[]) => void;
};

const MultiSelection: React.FC<Props> = ({
  label,
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
      <Label bold htmlFor={id} marginBottom={tokens.spacing.xxsmall}>
        {label}
      </Label>
      <Options>
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
    </MultiSelectionWrapper>
  );
};

export default MultiSelection;
