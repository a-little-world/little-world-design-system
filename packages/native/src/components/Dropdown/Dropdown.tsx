import { CheckIcon, ChevronDownIcon } from '../Icon';
import InputError from '../InputError/InputError';
import Label from '../Label/Label';
import Text from '../Text/Text';
import { getDropdownStyles } from './styles';
import {
  Options,
  InputHeight,
  DropdownBaseProps,
} from '@a-little-world/little-world-design-system-core';
import * as DropdownMenuPrimitive from '@rn-primitives/dropdown-menu';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useTheme } from 'styled-components/native';

export type DropdownProps = DropdownBaseProps & {
  style?: StyleProp<ViewStyle>;
  inputRef?: React.RefObject<HTMLButtonElement>;
};

const ARROW_DOWN_WIDTH = 13;
const ARROW_DOWN_HEIGHT = 8;

const isValidValue = (value: string, options: Options) =>
  options.some((option: any) => option.value === value);

const Option: React.FC<{ children: string; value: string }> = ({
  children,
  value,
}) => {
  return (
    <DropdownMenuPrimitive.Item
    // value={value}
    >
      <Text>{children}</Text>
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon label="selected item" width={10} />
      </DropdownMenuPrimitive.ItemIndicator>
    </DropdownMenuPrimitive.Item>
  );
};

const Dropdown: React.FC<DropdownProps> = ({
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
  const defaultValue =
    lockedValue || (value && isValidValue(value, options) ? value : undefined);
  const canError = !lockedValue && !cannotError;

  return (
    <View style={[styles.wrapper, style]}>
      {label && (
        <Label
          bold
          // toolTipText={labelTooltip}
        >
          {label}
        </Label>
      )}
      <DropdownMenuPrimitive.Root
      // disabled={disabled || !!lockedValue}
      // onValueChange={onValueChange}
      // required={required}
      // defaultValue={defaultValue}
      >
        <DropdownMenuPrimitive.Trigger
          aria-label={ariaLabel || label}
          // ref={inputRef}
          // $hasError={Boolean(error)}
          // $height={height}
        >
          {/* <DropdownMenuPrimitive.Value placeholder={placeholder} /> */}
          {!lockedValue && (
            <ChevronDownIcon
              width={ARROW_DOWN_WIDTH}
              height={ARROW_DOWN_HEIGHT}
              label="dropdown icon"
            />
          )}
        </DropdownMenuPrimitive.Trigger>
        <DropdownMenuPrimitive.Content>
          {/* <DropdownMenuPrimitive.Viewport> */}
          {options.map(option => (
            <Option key={option.label} value={option.value}>
              {option.label}
            </Option>
          ))}
          {/* </DropdownMenuPrimitive.Viewport> */}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Root>
      {canError && <InputError visible={Boolean(error)}>{error}</InputError>}
    </View>
  );
};

export default Dropdown;
