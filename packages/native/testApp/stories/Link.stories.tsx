import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Link } from '@a-little-world/little-world-design-system-native';
import { ButtonAppearance, TextTypes } from '@a-little-world/little-world-design-system-core';

export default {
  title: 'Components/Link',
  component: Link,
  decorators: [(Story: React.ComponentType) => (
    <NavigationContainer>
      <View style={{ padding: 20 }}>
        <Story />
      </View>
    </NavigationContainer>
  )],
};

export const ExternalLink = {
  args: {
    href: 'https://little-world.com',
    children: 'External Link',
  },
};

export const NavigationLink = {
  args: {
    to: 'Home',
    children: 'Navigate to Home',
  },
};

export const ButtonStylePrimary = {
  args: {
    to: 'Home',
    buttonAppearance: ButtonAppearance.Primary,
    textType: TextTypes.Body4,
    children: 'Button Link Primary',
  },
};

export const ButtonStyleSecondary = {
  args: {
    href: 'https://little-world.com',
    buttonAppearance: ButtonAppearance.Secondary,
    textType: TextTypes.Body4,
    children: 'Button Link Secondary',
  },
};
