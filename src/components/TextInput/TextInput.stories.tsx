import React from 'react';

import TextInput from './TextInput';

export default {
  component: TextInput,
  title: 'Components/TextInput',
};

export const Default = args => <TextInput {...args} />;

export const TelephoneInput = args => {
  return (
    <>
      <TextInput {...args} />
      <TextInput type="tel" {...args} />
    </>
  );
};
Default.args = {
  placeholder: 'Insert your text',
  id: 'text input id',
  label: 'Text Input',
};
