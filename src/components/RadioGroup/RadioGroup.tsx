import React from 'react';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import { RadioGroupIndicator, RadioGroupItem, RadioGroupRoot } from './styles';
import Label from '../Label/Label';

type Props = {
  items: Array<{ id: string; label?: string; value: string }>;
} & RadixRadioGroup.RadioGroupProps;

const RadioGroup: React.FC<Props> = ({ items, ...rest }: Props) => (
  <RadioGroupRoot value={undefined} {...rest}>
    {items?.map(item => (
      <div>
        <RadioGroupItem value={item.value} id={item.id}>
          <RadioGroupIndicator />
        </RadioGroupItem>
        {item.label && <Label htmlFor={item.id}>{item.label}</Label>}
      </div>
    ))}
  </RadioGroupRoot>
);

export default RadioGroup;
