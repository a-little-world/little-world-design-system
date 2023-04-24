import React from 'react';
import MultiDropdown from './MultiDropdown';

export default {
  component: MultiDropdown,
  title: 'Components/MultiDropdown',
};

export const Default = args => <MultiDropdown {...args} />;

Default.args = {
  onValueChange: () => null,
  firstDropdown: {
    options: [
      { value: 'german', label: 'German' },
      { value: 'french', label: 'French' },
      { value: 'english', label: 'English' },
    ],
    placeholder: 'Select a language...',
    label: 'Language Selector',
  },
  secondDropdown: {
    options: [
      { value: 'A1', label: 'A1' },
      { value: 'A2', label: 'A2' },
      { value: 'B1', label: 'B1' },
    ],
    placeholder: 'Select a level...',
    label: 'Level Selector',
  },
};
