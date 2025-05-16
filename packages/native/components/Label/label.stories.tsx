import React from 'react';

import Label, { LabelProps } from './label';

export default {
    component: Label,
    title: 'Components/Label',
};


export const Default = (args: LabelProps) => (
    <Label {...args}>Default Label</Label>

);
