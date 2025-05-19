import React from 'react';

import { Label, LabelProps } from '@a-little-world/little-world-design-system-native';

export default {
    component: Label,
    title: 'Components/Label',
};


export const Default = (args: LabelProps) => (
    <Label {...args}>Default Label</Label>

);