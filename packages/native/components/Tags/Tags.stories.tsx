import React from 'react';
import { View } from 'react-native';
import { ButtonAppearance, TagAppearance, TagSizes, tokens } from '@a-little-world/little-world-design-system-core';
import type { TagProps, TagsProps } from './Tags';
import { CardSizes, CardBaseProps } from '@a-little-world/little-world-design-system-core';
import Text from '../Text/Text';
import Button from '../Button/Button';
import Tags, { Tag } from './Tags';

export default {
    component: Tag,
    title: 'Components/Tags',
};


export const Default = (args: TagsProps) => (
    <View style={{ flexDirection: 'column', gap: tokens.spacing.medium, flexWrap: 'wrap' }}>
        <Tags {...args}></Tags>
        <Tags appearance={TagAppearance.solid} {...args} />
        <Tags size={TagSizes.small} {...args} />
    </View>
);

export const SingleTag = (args: TagProps) => (
    <View style={{ flexDirection: 'row', gap: tokens.spacing.medium, flexWrap: 'wrap' }}>
        <Tag size={TagSizes.small} {...args}>
            Default small
        </Tag>
        <Tag size={TagSizes.large} {...args}>
            Default large
        </Tag>
    </View>
);
Default.args = {
    content: [
        'Coffee',
        'Mocha',
    ],
};