import React, { useState } from 'react';
import { RadioGroupVariations } from '@a-little-world/little-world-design-system-core';
import RadioGroup from './RadioGroup';

export default {
  component: RadioGroup,
  title: 'Components/RadioGroup',
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
      description: 'Layout orientation for the radio group',
    },
  },
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

export const Vertical = args => {
  const [value, setValue] = useState('love');
  const items = [
    { value: 'love', id: 'love-v', label: 'Love' },
    { value: 'dreams', id: 'dreams-v', label: 'Dreams' },
    { value: 'hope', id: 'hope-v', label: 'Hope' },
  ];

  return (
    <RadioGroup
      items={items}
      value={value}
      onValueChange={setValue}
      label="Select your feeling (Vertical)"
      orientation="vertical"
      {...args}
    />
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

export const PillVertical = args => {
  const [value, setValue] = useState('love');
  const items = [
    { value: 'love', id: 'love-pv', label: 'Love' },
    { value: 'dreams', id: 'dreams-pv', label: 'Dreams' },
    { value: 'hope', id: 'hope-pv', label: 'Hope' },
  ];

  return (
    <RadioGroup
      items={items}
      type={RadioGroupVariations.Pill}
      value={value}
      onValueChange={setValue}
      label="Select an option (Vertical)"
      orientation="vertical"
      {...args}
    />
  );
};

export const Inline = args => {
  const [value, setValue] = useState('love');
  const items = [
    { value: 'love', id: 'love-inline', label: 'Love' },
    { value: 'dreams', id: 'dreams-inline', label: 'Dreams' },
    { value: 'hope', id: 'hope-inline', label: 'Hope' },
  ];

  return (
    <RadioGroup
      items={items}
      value={value}
      onValueChange={setValue}
      label="Mood"
      inline
      {...args}
    />
  );
};
