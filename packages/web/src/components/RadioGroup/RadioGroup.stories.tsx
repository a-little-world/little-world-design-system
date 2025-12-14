import React, { useState } from 'react';
import { RadioGroupVariations } from '@a-little-world/little-world-design-system-core';
import RadioGroup from './RadioGroup';

export default {
  component: RadioGroup,
  title: 'Components/RadioGroup',
};

export const Default = args => {
  const items = [
    { value: 'love', id: 'love', label: 'Love' },
    { value: 'dreams', id: 'dreams', label: 'Dreams' },
    { value: 'hope', id: 'hope', label: 'Hope' },
  ];

  return (
    <RadioGroup items={items} {...args}>
      Blah Blah
    </RadioGroup>
  );
};

export const Pill = args => {
  const [value, setValue] = useState('love');
  const items = [
    { value: 'love', id: 'love', label: 'Love' },
    { value: 'dreams', id: 'dreams', label: 'Dreams' },
    { value: 'hope', id: 'hope', label: 'Hope' },
  ];

  return (
    <RadioGroup
      items={items}
      type={RadioGroupVariations.Pill}
      value={value}
      onValueChange={setValue}
      label="Select an option"
      {...args}
    />
  );
};
