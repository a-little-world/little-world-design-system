import * as RadixSelect from '@radix-ui/react-select';
import React, { useState } from 'react';
import { SelectBaseProps } from '@a-little-world/little-world-design-system-core';

import { CheckIcon, ChevronDownIcon } from '../Icon';
import InputError from '../InputError/InputError';
import Label from '../Label/Label';
import Text from '../Text/Text';

import {
  SelectWrapper,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from './styles';

type Options = { value: string; label: string }[];

type SelectCoreProps = SelectBaseProps & {
  inputRef?: React.RefObject<HTMLButtonElement>;
};

export type SelectProps =
  | (SelectCoreProps & {
      label?: string;
      id?: string;
    })
  | (SelectCoreProps & {
      label: string;
      id: string;
    });

const ARROW_DOWN_WIDTH = 13;
const ARROW_DOWN_HEIGHT = 8;

const isValidValue = (value: string, options: Options) =>
  options.some(option => option.value === value);

const Option: React.FC<{ children: string; value: string }> = ({
  children,
  value,
}) => {
  return (
    <SelectItem value={value}>
      <RadixSelect.SelectItemText>
        <Text>{children}</Text>
      </RadixSelect.SelectItemText>
      <SelectItemIndicator>
        <CheckIcon label="selected item" width="10px" />
      </SelectItemIndicator>
    </SelectItem>
  );
};

const Select: React.FC<SelectProps> = ({
  ariaLabel,
  error,
  cannotError,
  disabled,
  id,
  height,
  inModal,
  inputRef,
  label,
  labelTooltip,
  lockedValue,
  maxWidth,
  onValueChange,
  options,
  placeholder,
  required,
  value,
}) => {
  const defaultValue =
    lockedValue || (value && isValidValue(value, options) ? value : undefined);
  const canError = !lockedValue && !cannotError;
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState<string | undefined>(
    !isControlled ? undefined : undefined,
  );
  const activeError =
    Boolean(error) && !(isControlled ? false : Boolean(internalValue));

  const handleValueChange = (newValue: string) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onValueChange(newValue);
  };

  const selectContent = (
    <SelectContent position="popper">
      <SelectViewport>
        {options.map((option: Options[number]) => (
          <Option key={option.label} value={option.value}>
            {option.label}
          </Option>
        ))}
      </SelectViewport>
    </SelectContent>
  );

  return (
    <SelectWrapper $maxWidth={maxWidth as string}>
      {label && (
        <Label bold htmlFor={id} tooltipText={labelTooltip}>
          {label}
        </Label>
      )}
      <RadixSelect.Root
        disabled={disabled || !!lockedValue}
        onValueChange={handleValueChange}
        required={required}
        defaultValue={defaultValue}
      >
        <SelectTrigger
          aria-label={ariaLabel}
          id={id}
          ref={inputRef}
          $disabled={disabled}
          $hasError={activeError}
          $height={height}
        >
          <SelectValue placeholder={placeholder} />
          {!lockedValue && (
            <SelectIcon>
              <ChevronDownIcon
                width={ARROW_DOWN_WIDTH}
                height={ARROW_DOWN_HEIGHT}
                label="dropdown icon"
              />
            </SelectIcon>
          )}
        </SelectTrigger>
        {inModal ? (
          selectContent
        ) : (
          <RadixSelect.Portal>{selectContent}</RadixSelect.Portal>
        )}
      </RadixSelect.Root>
      {canError && <InputError visible={activeError}>{error}</InputError>}
    </SelectWrapper>
  );
};

export default Select;
