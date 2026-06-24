import React from 'react';
import FieldError from './FieldError';

export default {
  component: FieldError,
  title: 'Components/FieldError',
  argTypes: {
    text: { control: 'text' },
    withIcon: { control: 'boolean' },
  },
};

export const Default = args => <FieldError {...args} />;

Default.args = {
  text: 'This field is required.',
  withIcon: true,
};

export const WithoutIcon = args => <FieldError {...args} />;

WithoutIcon.args = {
  text: 'Please enter a valid email address.',
  withIcon: false,
};

export const LongMessage = args => <FieldError {...args} />;

LongMessage.args = {
  text: 'Password must be at least 8 characters and include an uppercase letter, a number, and a special character.',
  withIcon: true,
};
