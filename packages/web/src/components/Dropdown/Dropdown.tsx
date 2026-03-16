import * as Select from '@radix-ui/react-select';
import React from 'react';

import { CheckIcon, ChevronDownIcon } from '../Icon';
import InputError from '../InputError/InputError';
import Label from '../Label/Label';
import Text from '../Text/Text';
import { InputHeight } from '../TextInput/TextInput';
import {
  DropdownWrapper,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from './styles';

type Options = { value: string; label: string }[];

type DropdownBaseProps = {
  ariaLabel?: string;
  cannotError?: boolean;
  disabled?: boolean;
  error?: string;
  height?: InputHeight;
  id?: string;
  inputRef?: React.RefObject<HTMLButtonElement>;
  label?: string;
  labelTooltip?: string;
  lockedValue?: string;
  maxWidth?: string;
  onValueChange: (value: string) => void;
  options: Options;
  placeholder: string;
  required?: boolean;
  value?: string;
};

export type DropdownProps =
  | (DropdownBaseProps & {
      label?: undefined;
      id?: string;
    })
  | (DropdownBaseProps & {
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
      <Select.SelectItemText>
        <Text>{children}</Text>
      </Select.SelectItemText>
      <SelectItemIndicator>
        <CheckIcon label="selected item" width="10px" />
      </SelectItemIndicator>
    </SelectItem>
  );
};

const Dropdown: React.FC<DropdownProps> = ({
  ariaLabel,
  error,
  cannotError,
  disabled,
  id,
  height,
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

  return (
    <DropdownWrapper $maxWidth={maxWidth}>
      {label && (
        <Label bold htmlFor={id} tooltipText={labelTooltip}>
          {label}
        </Label>
      )}
      <Select.Root
        disabled={disabled || !!lockedValue}
        onValueChange={onValueChange}
        required={required}
        defaultValue={defaultValue}
      >
        <SelectTrigger
          aria-label={ariaLabel}
          id={id}
          ref={inputRef}
          $hasError={Boolean(error)}
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
        <SelectContent position="popper">
          <SelectViewport>
            {options.map(option => (
              <Option key={option.label} value={option.value}>
                {option.label}
              </Option>
            ))}
          </SelectViewport>
        </SelectContent>
      </Select.Root>
      {canError && <InputError visible={Boolean(error)}>{error}</InputError>}
    </DropdownWrapper>
  );
};

export default Dropdown;
