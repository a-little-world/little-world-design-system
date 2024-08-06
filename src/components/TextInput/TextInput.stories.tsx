import React from 'react';

import TextInput from './TextInput';

export default {
  component: TextInput,
  title: 'Components/TextInput',
  argTypes: {
    defaultValue: { control: 'text' },
  },
};

export const Default = args => <TextInput {...args} />;

export const TelephoneInput = args => {
  return (
    <>
      <TextInput label="Enter your number" type="tel" {...args} />
    </>
  );
};

export const InputWithOnSubmit = args => (
  <TextInput
    {...args}
    onSubmit={() => {
      return true;
    }}
  />
);

Default.args = {
  placeholder: 'Insert your text',
  id: 'text input id',
  label: 'Text Input',
};
