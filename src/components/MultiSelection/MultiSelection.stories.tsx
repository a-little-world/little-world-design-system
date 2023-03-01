import React from 'react';
import MultiSelection from './MultiSelection';

export default {
  component: MultiSelection,
  title: 'Components/MultiSelection',
};

export const Default = args => <MultiSelection {...args} />;

Default.args = {
  id: 'multi selector id',
  label: 'Select your interests',
  onSelection: () => null,
};
