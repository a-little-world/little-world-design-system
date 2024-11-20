import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import React from 'react';

import tokens from '../../tokens';
import InputError from '../InputError/InputError';
import Label from '../Label/Label';
import {
  ItemContainer,
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
} & RadixRadioGroup.RadioGroupProps;

const RadioGroup: React.FC<Props> = ({
  error,
  items,
  label,
  labelTooltip,
  inputRef,
  ...rest
}: Props) => (
  <RadioGroupWrapper>
    {label && (
      <Label bold htmlFor={label} toolTipText={labelTooltip}>
        {label}
      </Label>
    )}
    <RadioGroupRoot ref={inputRef} value={undefined} name={label} {...rest}>
      {items?.map(item => (
        <ItemContainer key={item.id}>
          <RadioGroupItem value={item.value} id={item.id}>
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
  </RadioGroupWrapper>
);

export default RadioGroup;
