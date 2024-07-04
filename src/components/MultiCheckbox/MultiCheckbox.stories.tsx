import React from 'react';

import MultiCheckbox from './MultiCheckbox';

export default {
  component: MultiCheckbox,
  title: 'Components/MultiCheckbox',
};

export const Default = args => <MultiCheckbox {...args} />;

Default.args = {
  id: 'multi selector id',
  onSelection: () => null,
  heading: 'Select your favourite veg',
  preSelected: ['carrots', 'Potato'],
  options: [
    { label: 'Carrots', value: 'carrots' },
    { label: 'Beets', value: 'Beets' },
    { label: 'Broccoli', value: 'Broccoli' },
    { label: 'Potato', value: 'Potato' },
    { label: 'Longer sentence to test', value: 'longer' },
  ],
};
