import React, { useEffect, useState } from 'react';
import { MultiSelectionWrapper, Options, Option } from './styles';

import Label from '../Label/Label';

type Props = {
  id: string;
  label: string;
  options: string[];
  preSelected?: string[];
  onSelection: (selected: string[]) => void;
};

const DUMMY = [
  'sport',
  'cooking',
  'travelling',
  'music',
  'history',
  'books',
  'art',
  'movies',
];

const MultiSelection: React.FC<Props> = ({
  label,
  id,
  options = DUMMY,
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
      <Label bold htmlFor={id} marginBottom={'8px'}>
        {label}
      </Label>
      <Options>
        {options.map(option => {
          const isSelected = selected?.some(el => el === option);

          return (
            <Option
              key={option}
              $selected={isSelected}
              onClick={() =>
                handleOnClick(
                  isSelected
                    ? selected.filter(el => el !== option)
                    : [...selected, option],
                )
              }
            >
              {option}
            </Option>
          );
        })}
      </Options>
    </MultiSelectionWrapper>
  );
};

export default MultiSelection;
