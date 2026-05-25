import { Combobox as BaseCombobox } from '@base-ui/react/combobox';
import React, { useMemo } from 'react';

import {
  ComboboxMultipleBaseProps,
  ComboboxSingleBaseProps,
  Options,
} from '@a-little-world/little-world-design-system-core';

import { CheckIcon, ChevronDownIcon, CloseIcon } from '../Icon';
import InputError from '../InputError/InputError';
import Label from '../Label/Label';
import Text from '../Text/Text';

import {
  ComboboxActionButtons,
  ComboboxChip,
  ComboboxChipOverflow,
  ComboboxChipRemove,
  ComboboxChips,
  ComboboxClear,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxInputGroup,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
  ComboboxPopup,
  ComboboxPositioner,
  ComboboxTrigger,
  ComboboxWrapper,
} from './Combobox.styles';

type ComboboxOption = Options[number];

type ComboboxCoreProps = {
  inputRef?: React.RefObject<HTMLInputElement | null>;
};

export type ComboboxProps =
  | (ComboboxSingleBaseProps &
      ComboboxCoreProps & {
        label?: undefined;
        id?: string;
      })
  | (ComboboxSingleBaseProps &
      ComboboxCoreProps & {
        label: string;
        id: string;
      })
  | (ComboboxMultipleBaseProps &
      ComboboxCoreProps & {
        label?: undefined;
        id?: string;
      })
  | (ComboboxMultipleBaseProps &
      ComboboxCoreProps & {
        label: string;
        id: string;
      });

const ARROW_DOWN_WIDTH = 13;
const ARROW_DOWN_HEIGHT = 8;
const CLEAR_ICON_SIZE = 12;
const CHIP_REMOVE_ICON_SIZE = 8;

const isValidValue = (value: string, options: Options) =>
  options.some(option => option.value === value);

const getSelectedOption = (
  value: string | undefined,
  options: Options,
): ComboboxOption | null => {
  if (!value || !isValidValue(value, options)) {
    return null;
  }

  return options.find(option => option.value === value) ?? null;
};

const getSelectedOptions = (
  values: string[] | undefined,
  options: Options,
): ComboboxOption[] => {
  if (!values?.length) {
    return [];
  }

  return values
    .filter(value => isValidValue(value, options))
    .map(
      value => options.find(option => option.value === value) as ComboboxOption,
    );
};

type SharedLayoutProps = {
  ariaLabel?: string;
  canError: boolean;
  error?: string;
  height?: ComboboxSingleBaseProps['height'];
  id?: string;
  inputRef?: React.RefObject<HTMLInputElement | null>;
  isDisabled: boolean;
  isLocked: boolean;
  label?: string;
  labelTooltip?: string;
  maxWidth?: string | number;
  options: Options;
  placeholder: string;
  required?: boolean;
};

const ComboboxOptionsList = () => (
  <BaseCombobox.Portal>
    <ComboboxPositioner sideOffset={4}>
      <ComboboxPopup>
        <BaseCombobox.Empty>
          <ComboboxEmpty>No results found.</ComboboxEmpty>
        </BaseCombobox.Empty>
        <ComboboxList>
          {(item: ComboboxOption) => (
            <ComboboxItem key={item.value} value={item}>
              <ComboboxItemIndicator>
                <CheckIcon label="selected item" width="10px" />
              </ComboboxItemIndicator>
              <Text>{item.label}</Text>
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxPopup>
    </ComboboxPositioner>
  </BaseCombobox.Portal>
);

const ComboboxActionControls = () => (
  <ComboboxActionButtons>
    <ComboboxClear aria-label="Clear selection">
      <CloseIcon
        label="clear selection"
        width={CLEAR_ICON_SIZE}
        height={CLEAR_ICON_SIZE}
      />
    </ComboboxClear>
    <ComboboxTrigger aria-label="Open options">
      <ChevronDownIcon
        width={ARROW_DOWN_WIDTH}
        height={ARROW_DOWN_HEIGHT}
        label="combobox icon"
      />
    </ComboboxTrigger>
  </ComboboxActionButtons>
);

const ComboboxFieldLayout = ({
  children,
  error,
  label,
  labelTooltip,
  id,
  canError,
  maxWidth,
}: SharedLayoutProps & { children: React.ReactNode }) => (
  <ComboboxWrapper $maxWidth={maxWidth as string}>
    {label && (
      <Label bold htmlFor={id} tooltipText={labelTooltip}>
        {label}
      </Label>
    )}
    {children}
    {canError && <InputError visible={Boolean(error)}>{error}</InputError>}
  </ComboboxWrapper>
);

const SingleCombobox: React.FC<
  ComboboxSingleBaseProps & {
    inputRef?: React.RefObject<HTMLInputElement | null>;
    label?: string;
    id?: string;
  }
> = ({
  ariaLabel,
  cannotError,
  disabled,
  error,
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
  const selectedOption = useMemo(
    () => getSelectedOption(lockedValue || value, options),
    [lockedValue, options, value],
  );
  const canError = !lockedValue && !cannotError;
  const isDisabled = disabled || Boolean(lockedValue);
  const isControlled = value !== undefined;

  const handleValueChange = (newValue: ComboboxOption | null) => {
    onValueChange(newValue?.value ?? '');
  };

  const layoutProps: SharedLayoutProps = {
    ariaLabel,
    canError,
    error,
    height,
    id,
    inputRef,
    isDisabled,
    isLocked: Boolean(lockedValue),
    label,
    labelTooltip,
    maxWidth,
    options,
    placeholder,
    required,
  };

  return (
    <ComboboxFieldLayout {...layoutProps}>
      <BaseCombobox.Root
        disabled={isDisabled}
        items={options}
        onValueChange={handleValueChange}
        required={required}
        {...(isControlled
          ? { value: selectedOption }
          : { defaultValue: selectedOption ?? undefined })}
      >
        <ComboboxInputGroup
          $disabled={isDisabled}
          $hasError={Boolean(error)}
          $height={height}
        >
          <ComboboxInput
            aria-label={ariaLabel}
            id={id}
            placeholder={placeholder}
            ref={inputRef}
            $hasError={Boolean(error)}
            $height={height}
          />
          {!lockedValue && <ComboboxActionControls />}
        </ComboboxInputGroup>
        <ComboboxOptionsList />
      </BaseCombobox.Root>
    </ComboboxFieldLayout>
  );
};

const MultipleCombobox: React.FC<
  ComboboxMultipleBaseProps & {
    inputRef?: React.RefObject<HTMLInputElement | null>;
    label?: string;
    id?: string;
  }
> = ({
  ariaLabel,
  cannotError,
  chipLimit,
  disabled,
  error,
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
  const selectedOptions = useMemo(
    () => getSelectedOptions(lockedValue || value, options),
    [lockedValue, options, value],
  );
  const canError = !lockedValue?.length && !cannotError;
  const isDisabled = disabled || Boolean(lockedValue?.length);
  const isControlled = value !== undefined;
  const isLocked = Boolean(lockedValue?.length);

  const handleValueChange = (newValue: ComboboxOption[]) => {
    onValueChange(newValue.map(option => option.value));
  };

  const layoutProps: SharedLayoutProps = {
    ariaLabel,
    canError,
    error,
    height,
    id,
    inputRef,
    isDisabled,
    isLocked,
    label,
    labelTooltip,
    maxWidth,
    options,
    placeholder,
    required,
  };

  return (
    <ComboboxFieldLayout {...layoutProps}>
      <BaseCombobox.Root
        disabled={isDisabled}
        items={options}
        multiple
        onValueChange={handleValueChange}
        required={required}
        {...(isControlled
          ? { value: selectedOptions }
          : { defaultValue: selectedOptions })}
      >
        <ComboboxInputGroup
          $disabled={isDisabled}
          $hasError={Boolean(error)}
          $height={height}
          $multiple
        >
          <ComboboxChips>
            <BaseCombobox.Value>
              {(selected: ComboboxOption[]) => {
                const visibleOptions = chipLimit
                  ? selected.slice(0, chipLimit)
                  : selected;
                const hiddenCount = chipLimit
                  ? Math.max(selected.length - chipLimit, 0)
                  : 0;

                return (
                  <>
                    {visibleOptions.map(option => (
                      <ComboboxChip
                        key={option.value}
                        aria-label={option.label}
                      >
                        <Text tag="span">{option.label}</Text>
                        {!isDisabled && (
                          <ComboboxChipRemove
                            aria-label={`Remove ${option.label}`}
                          >
                            <CloseIcon
                              label={`remove ${option.label}`}
                              width={CHIP_REMOVE_ICON_SIZE}
                              height={CHIP_REMOVE_ICON_SIZE}
                            />
                          </ComboboxChipRemove>
                        )}
                      </ComboboxChip>
                    ))}
                    {hiddenCount > 0 && (
                      <ComboboxChipOverflow>
                        +{hiddenCount} more
                      </ComboboxChipOverflow>
                    )}
                    <ComboboxInput
                      aria-label={ariaLabel}
                      id={id}
                      placeholder={selected.length > 0 ? '' : placeholder}
                      ref={inputRef}
                      $hasError={Boolean(error)}
                      $height={height}
                      $multiple
                    />
                  </>
                );
              }}
            </BaseCombobox.Value>
          </ComboboxChips>
          {!isLocked && (
            <ComboboxActionButtons $multiple>
              <ComboboxClear aria-label="Clear selection">
                <CloseIcon label="clear selection" width={CLEAR_ICON_SIZE} />
              </ComboboxClear>
              <ComboboxTrigger aria-label="Open options">
                <ChevronDownIcon
                  width={ARROW_DOWN_WIDTH}
                  height={ARROW_DOWN_HEIGHT}
                  label="combobox icon"
                />
              </ComboboxTrigger>
            </ComboboxActionButtons>
          )}
        </ComboboxInputGroup>
        <ComboboxOptionsList />
      </BaseCombobox.Root>
    </ComboboxFieldLayout>
  );
};

const Combobox: React.FC<ComboboxProps> = props => {
  if (props.multiple) {
    return <MultipleCombobox {...props} />;
  }

  return <SingleCombobox {...props} />;
};

export default Combobox;
