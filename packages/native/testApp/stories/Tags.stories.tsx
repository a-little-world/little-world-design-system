import React from "react";
import { View } from "react-native";
import {
  TagAppearance,
  TagSizes,
  tokens,
} from "@a-little-world/little-world-design-system-core";
import { Tags, Tag } from '@a-little-world/little-world-design-system-native'
import type { TagProps, TagsProps } from '@a-little-world/little-world-design-system-native';

export default {
  component: Tag,
  title: "Components/Tags",
};

export const Default = (args: TagsProps) => (
  <View
    style={{
      flexDirection: "column",
      gap: tokens.spacing.medium,
      flexWrap: "wrap",
    }}
  >
    <Tags {...args}></Tags>
    <Tags appearance={TagAppearance.solid} {...args} />
    <Tags size={TagSizes.small} {...args} />
  </View>
);

export const SingleTag = (args: TagProps) => (
  <View
    style={{
      flexDirection: "row",
      gap: tokens.spacing.medium,
      flexWrap: "wrap",
    }}
  >
    <Tag size={TagSizes.small} {...args}>
      Default small
    </Tag>
    <Tag size={TagSizes.large} {...args}>
      Default large
    </Tag>
  </View>
);
Default.args = {
  content: ["Coffee", "Mocha"],
};
