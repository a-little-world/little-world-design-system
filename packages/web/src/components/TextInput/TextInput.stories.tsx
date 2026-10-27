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
      <TextInput
        label="Only German numbers permitted"
        type="tel"
        {...args}
        onlyCountries={['de']}
      />
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

export const Required = args => <TextInput {...args} />;

Required.args = {
  placeholder: 'Insert your email',
  id: 'required-text-input',
  label: 'Email address',
  type: 'email',
  required: true,
  error: 'Please enter your email address',
};

Default.args = {
  placeholder: 'Insert your text',
  id: 'text input id',
  label: 'Text Input',
  type: 'text',
};
