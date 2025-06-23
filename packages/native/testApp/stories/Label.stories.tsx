import React from 'react';

import { Label, LabelProps, } from '@a-little-world/little-world-design-system-native';

export default {
    component: Label,
    title: 'Components/Label',
};


export const Default = (args: LabelProps) => (
    <Label
        toolTipText='Tool Tip text Tool Tip text Tool Tip text Tool Tip text'
        {...args}
    >Default text</Label>
);

export const LabelWithoutIcon = (args: LabelProps) => (
    <Label
        {...args}
    >Default text</Label>
)
