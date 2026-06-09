import { CheckIcon, ChevronDownIcon } from '../Icon';
import InputError from '../InputError/InputError';
import Label from '../Label/Label';
import Text from '../Text/Text';
import { getDropdownStyles } from './styles';
import {
  InputHeight,
  SelectBaseProps,
} from '@a-little-world/little-world-design-system-core';
import * as DropdownMenuPrimitive from '@rn-primitives/dropdown-menu';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useTheme } from 'styled-components/native';

export type SelectProps = SelectBaseProps & {
  style?: StyleProp<ViewStyle>;
  inputRef?: React.RefObject<HTMLButtonElement>;
};

const ARROW_DOWN_WIDTH = 13;
const ARROW_DOWN_HEIGHT = 8;

const Option: React.FC<{ children: string; value: string }> = ({
  children,
  value,
}) => {
  return (
    <DropdownMenuPrimitive.Item>
      <Text>{children}</Text>
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon label="selected item" width={10} />
      </DropdownMenuPrimitive.ItemIndicator>
    </DropdownMenuPrimitive.Item>
  );
};

const Select: React.FC<SelectProps> = ({
  ariaLabel,
  error,
  cannotError,
  disabled,
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
  style,
}) => {
  const theme = useTheme();
  const styles = getDropdownStyles({
    theme,
    maxWidth: maxWidth as number,
    height: height as InputHeight,
    hasError: Boolean(error),
  });
  const canError = !lockedValue && !cannotError;

  return (
    <View style={[styles.wrapper, style]}>
      {label && (
        <Label bold>
          {label}
        </Label>
      )}
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger
          aria-label={ariaLabel || label}
        >
          {!lockedValue && (
            <ChevronDownIcon
              width={ARROW_DOWN_WIDTH}
              height={ARROW_DOWN_HEIGHT}
              label="select icon"
            />
          )}
        </DropdownMenuPrimitive.Trigger>
        <DropdownMenuPrimitive.Content>
          {options.map(option => (
            <Option key={option.label} value={option.value}>
              {option.label}
            </Option>
          ))}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Root>
      {canError && <InputError visible={Boolean(error)}>{error}</InputError>}
    </View>
  );
};

export default Select;
