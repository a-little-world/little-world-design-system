import React from 'react';
import FieldHint from './FieldHint';

export default {
  component: FieldHint,
  title: 'Components/FieldHint',
  argTypes: {
    text: { control: 'text' },
    withIcon: { control: 'boolean' },
  },
};

export const Default = args => <FieldHint {...args} />;

Default.args = {
  text: 'We use this to personalise your experience.',
  withIcon: true,
};

export const WithoutIcon = args => <FieldHint {...args} />;

WithoutIcon.args = {
  text: 'Passwords must be at least 8 characters.',
  withIcon: false,
};
