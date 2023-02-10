import React, { useState } from 'react';
import Label from './Label';

export default {
  component: Label,
  title: 'Components/Label',
  argTypes: {
    text: { control: 'text' },
  },
};

export const Default = ({ text, ...args }) => {
  return <Label {...args}>{text}</Label>;
};

Default.args = {
  text: 'Default Label',
};
