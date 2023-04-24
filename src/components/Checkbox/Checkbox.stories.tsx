import React from 'react';
import Checkbox from './Checkbox';

export default {
  component: Checkbox,
  title: 'Components/Checkbox',
};

export const Default = args => {
  return <Checkbox {...args} />;
};
