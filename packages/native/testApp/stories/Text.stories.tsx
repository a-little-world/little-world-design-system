import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";

import { Text } from "@a-little-world/little-world-design-system-native";
import { TextTypes } from "@a-little-world/little-world-design-system-core";

const meta = {
  title: "Text",
  component: Text,
  args: {
    children: "Sample Text"
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Headings: Story = {
  render: () => (
    <View>
      <Text type={TextTypes.Heading1}>Heading 1</Text>
      <Text type={TextTypes.Heading2}>Heading 2</Text>
      <Text type={TextTypes.Heading3}>Heading 3</Text>
      <Text type={TextTypes.Heading4}>Heading 4</Text>
      <Text type={TextTypes.Heading5}>Heading 5</Text>
      <Text type={TextTypes.Heading6}>Heading 6</Text>
    </View>
  ),
  args: {}
};

export const BodyText: Story = {
  render: () => (
    <View>
      <Text type={TextTypes.Body1}>Body 1</Text>
      <Text type={TextTypes.Body2}>Body 2</Text>
      <Text type={TextTypes.Body3}>Body 3</Text>
      <Text type={TextTypes.Body4}>Body 4</Text>
      <Text type={TextTypes.Body5}>Body 5</Text>
      <Text type={TextTypes.Body6}>Body 6</Text>
      <Text type={TextTypes.Body7}>Body 7</Text>
    </View>
  ),
  args: {}
};

export const WithBold: Story = {
  render: () => (
    <View>
      <Text>Normal Text</Text>
      <Text bold>Bold Text</Text>
    </View>
  ),
  args: {}
};

export const WithCenter: Story = {
  render: () => (
    <View>
      <Text>Left Aligned Text</Text>
      <Text center>Center Aligned Text</Text>
    </View>
  ),
  args: {}
};

export const WithColor: Story = {
  render: () => (
    <View>
      <Text color="#FF0000">Red Text</Text>
      <Text color="#00FF00">Green Text</Text>
      <Text color="#0000FF">Blue Text</Text>
    </View>
  ),
  args: {}
}; 