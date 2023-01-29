import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import {
  RadioGroupIndicator,
  RadioGroupItem,
  RadioGroupLabel,
  RadioGroupRoot,
} from './styles';

type Props = {
  items: Array<{ id: string; label?: string; value: string }>;
} & RadioGroup.RadioGroupProps;

export default ({ items, ...rest }: Props) => (
  <RadioGroupRoot value={undefined} {...rest}>
    {items?.map(item => (
      <div>
        <RadioGroupItem value={item.value} id={item.id}>
          <RadioGroupIndicator />
        </RadioGroupItem>
        {item.label && (
          <RadioGroupLabel htmlFor={item.id}>{item.label}</RadioGroupLabel>
        )}
      </div>
    ))}
  </RadioGroupRoot>
);
