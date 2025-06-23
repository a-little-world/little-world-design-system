import React from 'react';
import { RadioGroup } from '@a-little-world/little-world-design-system-native';

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
