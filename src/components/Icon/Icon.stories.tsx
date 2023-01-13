import React, { useState } from 'react';
import Icon from './Icon';
import IconDocs from './IconDocs.mdx';
import * as allIcons from './index';

export default {
  component: Icon,
  title: 'Components/Icons',
  argTypes: {
    color: { control: 'color' },
    height: { control: 'text' },
    width: { control: 'text' },
  },
  parameters: {
    docs: {
      page: IconDocs,
    },
  },
};

export const AllVariants = args => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
    {Object.entries(allIcons).map(([name, Component]) => (
      <Component key={name} {...args} />
    ))}
  </div>
);
