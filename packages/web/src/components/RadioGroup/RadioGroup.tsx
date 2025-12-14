import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import React from 'react';

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
  items,
  label,
  labelTooltip,
  inputRef,
  type = RadioGroupVariations.Classic,
  value,
  ...rest
}: Props) => {
  const isPill = type === RadioGroupVariations.Pill;

  return (
    <RadioGroupWrapper>
      {label && (
        <Label bold htmlFor={label} tooltipText={labelTooltip}>
          {label}
        </Label>
      )}
      {isPill ? (
        <>
          <PillRoot ref={inputRef} value={value} name={label} {...rest}>
            {items?.map(item => (
              <PillItem
                key={item.id}
                value={item.value}
                id={item.id}
                $hasError={Boolean(error)}
              >
                {item.label}
              </PillItem>
            ))}
          </PillRoot>
          <InputError visible={Boolean(error)} textAlign="left">
            {error}
          </InputError>
        </>
      ) : (
        <RadioGroupRoot ref={inputRef} value={value} name={label} {...rest}>
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
          <InputError visible={Boolean(error)}>{error}</InputError>
        </RadioGroupRoot>
      )}
    </RadioGroupWrapper>
  );
};

export default RadioGroup;
