import React from 'react';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import {
  RadioGroupIndicator,
  RadioGroupItem,
  RadioGroupRoot,
  RadioGroupWrapper,
} from './styles';
import Label from '../Label/Label';
import tokens from '../../tokens';
import InputError from '../InputError/InputError';

type Props = {
  error?: string;
  label?: string;
  items: Array<{ id: string; label?: string; value: string }>;
  inputRef: React.RefObject<HTMLInputElement>;
} & RadixRadioGroup.RadioGroupProps;

const RadioGroup: React.FC<Props> = ({
  error,
  items,
  label,
  inputRef,
  ...rest
}: Props) => (
  <RadioGroupWrapper>
    {label && (
      <Label bold htmlFor={label} marginBottom={tokens.spacing.small}>
        {label}
      </Label>
    )}
    <RadioGroupRoot ref={inputRef} value={undefined} name={label} {...rest}>
      {items?.map(item => (
        <div key={item.id}>
          <RadioGroupItem value={item.value} id={item.id}>
            <RadioGroupIndicator />
          </RadioGroupItem>
          {item.label && (
            <Label htmlFor={item.id} inline>
              {item.label}
            </Label>
          )}
        </div>
      ))}
      <InputError visible={Boolean(error)}>{error}</InputError>
    </RadioGroupRoot>
  </RadioGroupWrapper>
);

export default RadioGroup;
