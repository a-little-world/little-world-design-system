import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";

import Loading, { LoadingSizes } from "./Loading";

const meta = {
  title: "Loading",
  component: Loading,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Loading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <View>
      <Loading />
    </View>
  ),
  args: {}
};

export const DifferentSizes: Story = {
  render: () => (
    <View>
      <Loading size={LoadingSizes.Small} />
      <Loading size={LoadingSizes.Medium} />
      <Loading size={LoadingSizes.Large} />
    </View>
  ),
  args: {}
};

export const WithColor: Story = {
  render: () => (
    <View>
      <Loading color="#FF0000" />
      <Loading color="#00FF00" />
      <Loading color="#0000FF" />
    </View>
  ),
  args: {}
};

export const Inline: Story = {
  render: () => (
    <View>
      <Loading inline />
      <Loading inline size={LoadingSizes.Medium} />
      <Loading inline size={LoadingSizes.Large} />
    </View>
  ),
  args: {}
}; 