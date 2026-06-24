import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import React, { useState } from 'react';

import {
  RadioGroupVariations,
  RadioGroupBaseProps,
} from '@a-little-world/little-world-design-system-core';
import FieldError from '../FieldError/FieldError';
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
  type = RadioGroupVariations.Classic,
  value,
  orientation = 'horizontal',
  ...rest
}: Props) => {
  const isPill = type === RadioGroupVariations.Pill;
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState<string | undefined>(
    undefined,
  );
  const activeError =
    Boolean(error) && !(isControlled ? false : Boolean(internalValue));

  const { onValueChange: externalOnValueChange, ...restWithoutOnValueChange } =
    rest;

  const handleValueChange = (newValue: string) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    externalOnValueChange?.(newValue);
  };

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
            $inline={inline}
            $orientation={orientation}
            onValueChange={handleValueChange}
            {...restWithoutOnValueChange}
          >
            {items?.map(item => (
              <PillItem
                key={item.id}
                value={item.value}
                id={item.id}
                $hasError={activeError}
                $inline={inline}
              >
                {item.label}
              </PillItem>
            ))}
          </PillRoot>
          {error && <FieldError text={error} />}
        </>
      ) : (
        <RadioGroupRoot
          ref={inputRef}
          value={value}
          name={label}
          $inline={inline}
          $orientation={orientation}
          onValueChange={handleValueChange}
          {...restWithoutOnValueChange}
        >
          {items?.map(item => (
            <ItemContainer key={item.id}>
              <RadioGroupItem
                value={item.value}
                id={item.id}
                $hasError={activeError}
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
          {error && <FieldError text={error} />}
        </RadioGroupRoot>
      )}
    </RadioGroupWrapper>
  );
};

export default RadioGroup;
