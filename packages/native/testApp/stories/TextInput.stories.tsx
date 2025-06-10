import React from 'react';

import { TextInput } from '@a-little-world/little-world-design-system-native';
import { View } from 'react-native';

export default {
  component: TextInput,
  title: 'Components/TextInput',
  argTypes: {
    defaultValue: { control: 'text' },
  },
};

export const Default = args => <View>
  <TextInput {...args} onChange={() => console.log('changing')} onSubmit={() => console.log('submit')} />
  </View>;

export const TelephoneInput = args => {
  return (
    <View>
      <TextInput label="Enter your number" type="tel" {...args} />
    </View>
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
