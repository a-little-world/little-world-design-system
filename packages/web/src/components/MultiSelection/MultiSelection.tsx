import React, { useEffect, useRef, useState } from 'react';
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
  required?: boolean;
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
  required,
  onSelection,
  withBackground = true,
}: Props) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [displayError, setDisplayError] = useState(error);
  const prevKeyRef = useRef('');

  useEffect(() => {
    setDisplayError(error);
  }, [error]);

  useEffect(() => {
    const key = preSelected.join(',');
    if (prevKeyRef.current !== key) {
      prevKeyRef.current = key;
      setSelected(preSelected);
    }
  }, [preSelected]);

  const handleOnClick = (newSelection: string[]) => {
    setSelected(newSelection);
    onSelection(newSelection);
    setDisplayError(newSelection.length > 0 ? undefined : error);
  };

  return (
    <MultiSelectionWrapper>
      {label && (
        <Label bold htmlFor={id} tooltipText={labelTooltip} required={required}>
          {label}
        </Label>
      )}
      <input
        type="text"
        required={required}
        value={selected.length > 0 ? selected.join(',') : ''}
        readOnly
        tabIndex={-1}
        aria-hidden="true"
        style={{ display: 'block', width: 0, height: 0, padding: 0, border: 0, overflow: 'hidden' }}
      />
      <Options
        $hasError={Boolean(displayError)}
        $withBackground={withBackground}
        aria-invalid={Boolean(displayError) || undefined}
        aria-required={required || undefined}
        aria-describedby={displayError ? `${id}-error` : undefined}
      >
        {options.map(option => {
          const isSelected = selected.includes(option.value);

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
      <InputError id={`${id}-error`} visible={Boolean(displayError)}>
        {displayError}
      </InputError>
    </MultiSelectionWrapper>
  );
};

export default MultiSelection;
