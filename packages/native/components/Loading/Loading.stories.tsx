import React from "react";
import { View } from "react-native";
import { Meta, StoryObj } from "@storybook/react";

import Loading from "./Loading";
import { LoadingSizes } from "../../../core/src/components/Loading/Loading";

const meta = {
  title: "Components/Loading",
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
  args: {
    size: LoadingSizes.Medium,
    color: "#000000",
    inline: false,
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Loading size={LoadingSizes.Small} />
      <Loading size={LoadingSizes.Medium} />
      <Loading size={LoadingSizes.Large} />
    </View>
  ),
};

export const WithColor: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Loading color="#FF0000" />
      <Loading color="#00FF00" />
      <Loading color="#0000FF" />
    </View>
  ),
};

export const Inline: Story = {
  render: () => (
    <View>
      <Loading inline />
      <Loading inline size={LoadingSizes.Medium} />
      <Loading inline size={LoadingSizes.Large} />
    </View>
  ),
}; 