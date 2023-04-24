import React from 'react';
import * as Select from '@radix-ui/react-select';

import {
  SelectItem,
  SelectTrigger,
  SelectItemIndicator,
  SelectViewport,
  SelectContent,
  SelectValue,
} from './styles';
import { ArrowDownIcon, CheckIcon } from '../Icon';
import Text from '../Text/Text';
import Label from '../Label/Label';

type Options = { value: string; label: string }[];

export type DropdownProps = {
  ariaLabel?: string;
  label?: string;
  options: Options;
  onValueChange: (value: string) => void;
  placeholder: string;
  value?: string;
  disabled?: boolean;
  required?: boolean;
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
        <Text type="Body4">{children}</Text>
      </Select.SelectItemText>
      <SelectItemIndicator>
        <CheckIcon label="selected item" labelId="selected item" />
      </SelectItemIndicator>
    </SelectItem>
  );
};

const Dropdown: React.FC<DropdownProps> = ({
  ariaLabel,
  label,
  disabled,
  options,
  onValueChange,
  placeholder,
  required,
  value,
}) => {
  const defaultValue =
    value && isValidValue(value, options) ? value : undefined;

  return (
    <div>
      {label && (
        <Label bold htmlFor={label} marginBottom="8px">
          {label}
        </Label>
      )}
      <Select.Root
        disabled={disabled}
        onValueChange={onValueChange}
        required={required}
        defaultValue={defaultValue}
      >
        <SelectTrigger aria-label={ariaLabel || label}>
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
    </div>
  );
};

export default Dropdown;
