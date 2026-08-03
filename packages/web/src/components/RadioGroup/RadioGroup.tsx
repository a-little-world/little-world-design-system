import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import React, { useEffect, useState } from 'react';

import {
  RadioGroupVariations,
  RadioGroupBaseProps,
} from '@a-little-world/little-world-design-system-core';
import InputError from '../InputError/InputError';
import Label from '../Label/Label';
import {
  ItemContainer,
  PillItem,
  PillRoot,
  RadioGroupIndicator,
  RadioGroupItem,
  RadioGroupRoot,
  RadioGroupWrapper,
} from './styles';

type Props = {
  error?: string;
  label?: string;
  labelTooltip?: string;
  items: Array<{ id: string; label?: string; value: string }>;
  inputRef: React.RefObject<HTMLInputElement>;
} & RadixRadioGroup.RadioGroupProps &
  RadioGroupBaseProps;

const RadioGroup: React.FC<Props> = ({
  error,
  inline = false,
  items,
  label,
  labelTooltip,
  inputRef,
  onValueChange,
  required,
  type = RadioGroupVariations.Classic,
  value,
  orientation = 'horizontal',
  ...rest
}: Props) => {
  const [displayError, setDisplayError] = useState(error);

  useEffect(() => {
    setDisplayError(error);
  }, [error]);

  const handleValueChange = (val: string) => {
    onValueChange?.(val);
    setDisplayError(undefined);
  };

  const isPill = type === RadioGroupVariations.Pill;

  return (
    <RadioGroupWrapper $inline={inline}>
      {label && (
        <Label
          bold
          htmlFor={label}
          tooltipText={labelTooltip}
          marginBottom={inline ? '0' : undefined}
        >
          {label}
        </Label>
      )}
      {isPill ? (
        <>
          <PillRoot
            ref={inputRef}
            value={value}
            name={label}
            required={required}
            aria-invalid={Boolean(displayError) || undefined}
            aria-required={required || undefined}
            onValueChange={handleValueChange}
            $inline={inline}
            $orientation={orientation}
            {...rest}
          >
            {items?.map(item => (
              <PillItem
                key={item.id}
                value={item.value}
                id={item.id}
                $hasError={Boolean(displayError)}
                $inline={inline}
              >
                {item.label}
              </PillItem>
            ))}
          </PillRoot>
          <InputError visible={Boolean(displayError)} textAlign="left">
            {displayError}
          </InputError>
        </>
      ) : (
        <RadioGroupRoot
          ref={inputRef}
          value={value}
          name={label}
          required={required}
          aria-invalid={Boolean(displayError) || undefined}
          aria-required={required || undefined}
          onValueChange={handleValueChange}
          $inline={inline}
          $orientation={orientation}
          {...rest}
        >
          {items?.map(item => (
            <ItemContainer key={item.id}>
              <RadioGroupItem
                value={item.value}
                id={item.id}
                $hasError={Boolean(displayError)}
              >
                <RadioGroupIndicator />
              </RadioGroupItem>
              {item.label && (
                <Label htmlFor={item.id} inline>
                  {item.label}
                </Label>
              )}
            </ItemContainer>
          ))}
          <InputError visible={Boolean(displayError)}>{displayError}</InputError>
        </RadioGroupRoot>
      )}
    </RadioGroupWrapper>
  );
};

export default RadioGroup;
