import React from 'react';

import { TextTypes } from '@a-little-world/little-world-design-system-core';
import { Separator, Text } from '@a-little-world/little-world-design-system-native';
import { View } from 'react-native';

export default {
  component: Separator,
  title: 'Components/Separator',
};

const textStyle = {
  flex: 1,
  textAlign: 'center' as 'center',
}

export const Default = () => (
  <View>
    <Text type={TextTypes.Heading4}>
      Little World
    </Text>
    <Text>Let's separate our content.</Text>
    <Separator />
    <View style={{ display: 'flex', flexDirection: 'row', height: 300, alignItems: 'center' }}>
      <Text style={textStyle}>Blog</Text>
      <Separator orientation="vertical" />
      <Text style={textStyle}>Docs</Text>
      <Separator orientation="vertical" />
      <Text style={textStyle}>Source</Text>
    </View>
  </View>
);
