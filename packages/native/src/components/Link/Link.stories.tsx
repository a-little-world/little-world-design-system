import React from 'react';
import { View } from 'react-native';
import { StoryObj } from '@storybook/react-native';
import { NavigationContainer } from '@react-navigation/native';

import Link from './Link';
import { ButtonAppearance, TextTypes } from '@a-little-world/little-world-design-system-core';

// Use modern Storybook format
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

type Story = StoryObj<typeof Link>;

export const ExternalLink: Story = {
  args: {
    href: 'https://little-world.com',
    children: 'External Link',
  },
};

export const NavigationLink: Story = {
  args: {
    to: 'Home',
    children: 'Navigate to Home',
  },
};

export const ButtonStylePrimary: Story = {
  args: {
    to: 'Home',
    buttonAppearance: ButtonAppearance.Primary,
    textType: TextTypes.Body4,
    children: 'Button Link Primary',
  },
};

export const ButtonStyleSecondary: Story = {
  args: {
    href: 'https://little-world.com',
    buttonAppearance: ButtonAppearance.Secondary,
    textType: TextTypes.Body4,
    children: 'Button Link Secondary',
  },
};
