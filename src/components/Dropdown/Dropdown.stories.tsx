import React from 'react';
import Dropdown from './Dropdown';

export default {
  component: Dropdown,
  title: 'Components/Dropdown',
};

export const Default = args => <Dropdown {...args} />;

Default.args = {
  label: 'Demo dropdown',
  id: 'multi selector id',
  onValueChange: () => null,
  placeholder: 'out of town',
  value: undefined,
  disabled: false,
  required: false,
  options: [
    { value: 'german', label: 'German' },
    { value: 'french', label: 'French' },
    { value: 'english', label: 'English' },
  ],
};
