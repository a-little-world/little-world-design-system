import React from 'react';
import { View } from 'react-native';
import { ButtonAppearance, tokens } from '@a-little-world/little-world-design-system-core';
import Card, { CardHeader, CardContent, CardFooter } from './Card';
import { CardSizes, CardBaseProps } from '@a-little-world/little-world-design-system-core';
import Text from '../Text/Text';
import Button from '../Button/Button';

export default {
  component: Card,
  title: 'Components/Card',
};

export const Default = (args: CardBaseProps) => (
  <View style={{ flexDirection: 'row', gap: tokens.spacing.medium, flexWrap: 'wrap' }}>
    <Card {...args}>
      <Text>Default Card</Text>
    </Card>
    <Card borderColor="#FF0000" {...args}>
      <Text>Card with Custom Border</Text>
    </Card>
  </View>
);

export const WithSubElements = (args: CardBaseProps) => (
  <View style={{ flexDirection: 'row', gap: tokens.spacing.medium, flexWrap: 'wrap' }}>
    <Card {...args}>
      <CardHeader>Card Header</CardHeader>
      <CardContent>
        <Text>Card Content</Text>
      </CardContent>
      <CardFooter align="center">
        <Button>Centred Footer</Button>
      </CardFooter>
    </Card>
    <Card {...args}>
      <CardHeader textColor="#FF0000">Colored Header</CardHeader>
      <CardContent align="flex-start" gap={tokens.spacing.medium}>
        <Text>Left-aligned content with custom gap</Text>
      </CardContent>
      <CardFooter align="space-between">
        <Text style={{ flexShrink: 1 }}>Footer with space-between alignment</Text>
        <Button appearance={ButtonAppearance.Secondary}>Reject</Button>
      </CardFooter>
    </Card>
  </View>
);
