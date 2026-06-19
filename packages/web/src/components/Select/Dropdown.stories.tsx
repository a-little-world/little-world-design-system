import React from 'react';

import Select from './Select';

export default {
  component: Select,
  title: 'Components/Dropdown',
  tags: ['autodocs'],
};

export const Default = args => <Select {...args} />;

Default.args = {
  label: 'Demo dropdown',
  id: 'legacy-dropdown-id',
  onValueChange: () => null,
  placeholder: 'out of town',
  value: undefined,
  disabled: false,
  required: false,
  options: [{ label: 'English', value: 'english' }],
};