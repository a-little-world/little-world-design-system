import * as Popover from '@radix-ui/react-popover';
import React, { useState, useMemo, useRef } from 'react';
import { SearchableSelectBaseProps } from '@a-little-world/little-world-design-system-core';

import { CheckIcon, ChevronDownIcon } from '../Icon';
import InputError from '../InputError/InputError';
import Label from '../Label/Label';
import { useModalPortalContainer } from '../Modal/ModalPortalContext';
import Text from '../Text/Text';

import {
  SearchableSelectContent,
  SearchableSelectEmpty,
  SearchableSelectIcon,
  SearchableSelectItem,
  SearchableSelectItemIndicator,
  SearchableSelectList,
  SearchableSelectSearchInput,
  SearchableSelectSearchWrapper,
  SearchableSelectTrigger,
  SearchableSelectValueText,
  SearchableSelectWrapper,
} from './SearchableSelect.styles';

type SearchableSelectCoreProps = SearchableSelectBaseProps & {
  inputRef?: React.RefObject<HTMLButtonElement>;
};

export type SearchableSelectProps =
  | (SearchableSelectCoreProps & {
      label?: string;
      id?: string;
    })
  | (SearchableSelectCoreProps & {
      label: string;
      id: string;
    });

const ARROW_DOWN_WIDTH = 13;
const ARROW_DOWN_HEIGHT = 8;

const SearchableSelect: React.FC<SearchableSelectProps> = ({
  ariaLabel,
  cannotError,
  disabled,
  error,
  height,
  id,
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
  searchPlaceholder = 'Search...',
  value,
}) => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [internalValue, setInternalValue] = useState<string | undefined>(undefined);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const modalContainerRef = useModalPortalContainer();

  const isDisabled = disabled || Boolean(lockedValue);
  const canError = !lockedValue && !cannotError;
  const isControlled = value !== undefined;
  const currentValue = lockedValue || (isControlled ? value : internalValue);
  const activeError = Boolean(error) && !(isControlled ? false : Boolean(internalValue));

  const selectedOption = useMemo(
    () => options.find(opt => opt.value === currentValue) ?? null,
    [currentValue, options],
  );

  const filteredOptions = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return options;
    return options.filter(opt => opt.label.toLowerCase().includes(query));
  }, [options, searchQuery]);

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (nextOpen) {
      setSearchQuery('');
      setTimeout(() => searchInputRef.current?.focus(), 0);
    }
  };

  const handleSelect = (optionValue: string) => {
    if (!isControlled) {
      setInternalValue(optionValue);
    }
    onValueChange(optionValue);
    setOpen(false);
  };

  const portalContainer =
    inModal && modalContainerRef ? (modalContainerRef.current ?? undefined) : undefined;

  const content = (
    <SearchableSelectContent
      sideOffset={4}
      onOpenAutoFocus={e => e.preventDefault()}
    >
      <SearchableSelectSearchWrapper>
        <SearchableSelectSearchInput
          ref={searchInputRef}
          type="text"
          placeholder={searchPlaceholder}
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          aria-label={searchPlaceholder}
        />
      </SearchableSelectSearchWrapper>
      {filteredOptions.length === 0 ? (
        <SearchableSelectEmpty>No results found.</SearchableSelectEmpty>
      ) : (
        <SearchableSelectList role="listbox" aria-label={ariaLabel ?? label}>
          {filteredOptions.map(option => {
            const isSelected = option.value === currentValue;
            return (
              <SearchableSelectItem
                key={option.value}
                role="option"
                aria-selected={isSelected}
                $isSelected={isSelected}
                onClick={() => handleSelect(option.value)}
              >
                {isSelected && (
                  <SearchableSelectItemIndicator>
                    <CheckIcon label="selected item" width="10px" />
                  </SearchableSelectItemIndicator>
                )}
                <Text>{option.label}</Text>
              </SearchableSelectItem>
            );
          })}
        </SearchableSelectList>
      )}
    </SearchableSelectContent>
  );

  return (
    <SearchableSelectWrapper $maxWidth={maxWidth as string}>
      {label && (
        <Label bold htmlFor={id} tooltipText={labelTooltip}>
          {label}
        </Label>
      )}
      <Popover.Root open={open} onOpenChange={handleOpenChange}>
        <SearchableSelectTrigger
          aria-label={ariaLabel}
          aria-required={required}
          disabled={isDisabled}
          id={id}
          ref={inputRef}
          $disabled={isDisabled}
          $hasError={activeError}
          $height={height}
        >
          <SearchableSelectValueText $isPlaceholder={!selectedOption}>
            {selectedOption ? selectedOption.label : placeholder}
          </SearchableSelectValueText>
          {!lockedValue && (
            <SearchableSelectIcon>
              <ChevronDownIcon
                width={ARROW_DOWN_WIDTH}
                height={ARROW_DOWN_HEIGHT}
                label="dropdown icon"
              />
            </SearchableSelectIcon>
          )}
        </SearchableSelectTrigger>
        <Popover.Portal container={portalContainer}>
          {content}
        </Popover.Portal>
      </Popover.Root>
      {canError && <InputError visible={activeError}>{error}</InputError>}
    </SearchableSelectWrapper>
  );
};

export default SearchableSelect;
