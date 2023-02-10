import React, { useState } from 'react';
import TextInput from './TextInput';

export default {
  component: TextInput,
  title: 'Components/TextInput',
};

export const Default = args => <TextInput {...args} />;

Default.args = {
  defaultValue: 'insert your text',
  id: 'text input id',
  label: 'Text Input',
};
