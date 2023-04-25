import React from 'react';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import { RadioGroupIndicator, RadioGroupItem, RadioGroupRoot } from './styles';
import Label from '../Label/Label';
import tokens from '../../tokens';

type Props = {
  label?: string;
  items: Array<{ id: string; label?: string; value: string }>;
} & RadixRadioGroup.RadioGroupProps;

const RadioGroup: React.FC<Props> = ({ items, label, ...rest }: Props) => (
  <div>
    {label && (
      <Label bold htmlFor={label} marginBottom={tokens.spacing.small}>
        {label}
      </Label>
    )}
    <RadioGroupRoot value={undefined} name={label} {...rest}>
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
    </RadioGroupRoot>
  </div>
);

export default RadioGroup;
