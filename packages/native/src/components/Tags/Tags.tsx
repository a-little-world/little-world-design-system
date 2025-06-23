import Text from "../Text/Text";
import { getTagStyles } from "./styles";
import { TagBaseProps } from "@a-little-world/little-world-design-system-core";
import {
  TagSizes,
  tokens,
} from "@a-little-world/little-world-design-system-core";
import React from "react";
import { View } from "react-native";
import { useTheme } from "styled-components/native";

export interface TagProps extends TagBaseProps {
  style?: any;
}
export interface TagsProps extends TagProps {
  content: string[];
}

export const Tag: React.FC<TagProps> = ({
  children,
  style,
  size,
  color,
  appearance,
}) => {
  const theme = useTheme();
  return (
    <View
      style={[
        getTagStyles({
          theme,
          size,
          appearance,
          color,
        }),
        style,
      ]}
    >
      <Text style={{ fontSize: size === TagSizes.small ? 14 : 16 }}>
        {children}
      </Text>
    </View>
  );
};

function Tags({ appearance, bold, color, content, size, style }: TagsProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: tokens.spacing.medium,
        flexWrap: "wrap",
        ...style,
      }}
    >
      {content.map((tag) => (
        <Tag
          key={tag}
          bold={bold}
          size={size}
          color={color}
          appearance={appearance}
        >
          <Text style={{ fontSize: size === TagSizes.small ? 14 : 16 }}>
            {tag}
          </Text>
        </Tag>
      ))}
    </View>
  );
}

export default Tags;
