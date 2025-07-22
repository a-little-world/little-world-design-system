import React from 'react';
import { Checkbox } from '@a-little-world/little-world-design-system-native';
import { View } from 'react-native';

export default {
  component: Checkbox,
  title: 'Components/Checkbox',
};

export const Default = args => {
  return <View>
    <Checkbox {...args} onCheckedChange={(value) => console.log({ checked: value })} label='Hallo ein <bold>guten</bold> Tag' />;
      <Checkbox onCheckedChange={(value) => console.log({ checked: value })} label='This checkbox is read only' readOnly checked={true} />;
    </View>
};
