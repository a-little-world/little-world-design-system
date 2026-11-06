import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import React, { useId } from 'react';

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
  required,
  type = RadioGroupVariations.Classic,
  value,
  orientation = 'horizontal',
  ...rest
}: Props) => {
  const isPill = type === RadioGroupVariations.Pill;
  const generatedId = useId();
  const errorId = `${rest.id ?? generatedId}-error`;

  return (
    <RadioGroupWrapper $inline={inline}>
      {label && (
        <Label
          bold
          htmlFor={label}
          tooltipText={labelTooltip}
          marginBottom={inline ? '0' : undefined}
          required={required}
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
            aria-invalid={Boolean(error) || undefined}
            aria-describedby={error ? errorId : undefined}
            $inline={inline}
            $orientation={orientation}
            {...rest}
          >
            {items?.map(item => (
              <PillItem
                key={item.id}
                value={item.value}
                id={item.id}
                $hasError={Boolean(error)}
                $inline={inline}
              >
                {item.label}
              </PillItem>
            ))}
          </PillRoot>
          <InputError id={errorId} visible={Boolean(error)} textAlign="left">
            {error}
          </InputError>
        </>
      ) : (
        <RadioGroupRoot
          ref={inputRef}
          value={value}
          name={label}
          required={required}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={error ? errorId : undefined}
          $inline={inline}
          $orientation={orientation}
          {...rest}
        >
          {items?.map(item => (
            <ItemContainer key={item.id}>
              <RadioGroupItem
                value={item.value}
                id={item.id}
                $hasError={Boolean(error)}
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
          <InputError id={errorId} visible={Boolean(error)}>
            {error}
          </InputError>
        </RadioGroupRoot>
      )}
    </RadioGroupWrapper>
  );
};

export default RadioGroup;
