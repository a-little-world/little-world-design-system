import React from "react";
import { View, ScrollView, FlexAlignType, ViewStyle, DimensionValue } from "react-native";
import {
    TagBaseProps,
} from "@a-little-world/little-world-design-system-core";
import { ButtonAppearance, TagAppearance, TagSizes, tokens } from '@a-little-world/little-world-design-system-core';
import Text from "../Text/Text";
import { getTagStyles } from './styles';
import { useTheme } from "styled-components/native";

export interface TagProps extends TagBaseProps {
    style?: any;

};
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
            style={[getTagStyles({
                theme,
                size,
                appearance,
                color,
            }), style]}
        >
            <Text>
                {children}
            </Text>
        </View>
    )
};
function Tags({
    appearance,
    bold,
    color,
    content,
    size,
    style,
}: TagsProps) {
    return (
        <View style={{
            ...style,
            flexDirection: 'row',
            gap: tokens.spacing.medium,
            flexWrap: 'wrap',
        }}>
            {content.map(tag => (
                <Tag
                    key={tag}
                    bold={bold}
                    size={size}
                    color={color}
                    appearance={appearance}
                >
                    <Text style={{ fontSize: size === TagSizes.small ? 14 : 16 }}>{tag}</Text>
                </Tag>
            ))}
        </View>
    );
}

export default Tags;