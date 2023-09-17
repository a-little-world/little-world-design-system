import React from 'react';
import * as Select from '@radix-ui/react-select';

import {
  SelectItem,
  SelectTrigger,
  SelectItemIndicator,
  SelectViewport,
  SelectContent,
  SelectValue,
  DropdownWrapper,
} from './styles';
import { ArrowDownIcon, CheckIcon } from '../Icon';
import Text from '../Text/Text';
import Label from '../Label/Label';

type Options = { value: string; label: string }[];

export type DropdownProps = {
  ariaLabel?: string;
  error?: string;
  label?: string;
  labelTooltip?: string;
  options: Options;
  onValueChange: (value: string) => void;
  placeholder: string;
  value?: string;
  disabled?: boolean;
  required?: boolean;
  inputRef?: React.RefObject<HTMLButtonElement>;
};

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
        <CheckIcon label="selected item" labelId="selected item" />
      </SelectItemIndicator>
    </SelectItem>
  );
};

const Dropdown: React.FC<DropdownProps> = ({
  ariaLabel,
  error,
  disabled,
  inputRef,
  label,
  labelTooltip,
  onValueChange,
  options,
  placeholder,
  required,
  value,
}) => {
  const defaultValue =
    value && isValidValue(value, options) ? value : undefined;

  return (
    <DropdownWrapper $hasPadding={!Boolean(label)}>
      <Label
        bold
        htmlFor={ariaLabel}
        error={error}
        toolTipText={labelTooltip}
        canHaveError
      >
        {label}
      </Label>
      <Select.Root
        disabled={disabled}
        onValueChange={onValueChange}
        required={required}
        defaultValue={defaultValue}
      >
        <SelectTrigger
          aria-label={ariaLabel || label}
          ref={inputRef}
          $hasError={Boolean(error)}
        >
          <SelectValue placeholder={placeholder} />
          <Select.Icon>
            <ArrowDownIcon
              width={ARROW_DOWN_WIDTH}
              height={ARROW_DOWN_HEIGHT}
              label="dropdown icon"
              labelId="dropdown icon"
            />
          </Select.Icon>
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
    </DropdownWrapper>
  );
};

export default Dropdown;
