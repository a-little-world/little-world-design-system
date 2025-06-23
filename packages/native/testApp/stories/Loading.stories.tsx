import React from 'react';
import { View, Text } from 'react-native';
import { Loading } from '@a-little-world/little-world-design-system-native';
import { LoadingBaseProps } from '@a-little-world/little-world-design-system-core';

export default {
  component: Loading,
  title: 'Components/Loading',
};

export const Default = (args: LoadingBaseProps) => (
  <View style={{ padding: 20 }}>
    <Text style={{ marginBottom: 10 }}>Love</Text>
    <Loading {...args} />
    <Text style={{ marginTop: 10 }}>Love</Text>
  </View>
);

Default.args = {
  size: 'small',
  color: '#000000',
};
