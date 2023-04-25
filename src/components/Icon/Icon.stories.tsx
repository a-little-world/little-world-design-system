import React from 'react';
import tokens from '../../tokens';
import { Icon } from './Icon';
// import IconDocs from './IconDocs.mdx';
import * as allIcons from './index';

export default {
  component: Icon,
  title: 'Components/Icons',
  argTypes: {
    color: { control: 'color' },
    height: { control: 'text' },
    width: { control: 'text' },
  },
};

export const AllVariants = args => (
  <div
    style={{ display: 'flex', flexWrap: 'wrap', gap: tokens.spacing.medium }}
  >
    {Object.entries(allIcons).map(([name, Component]) => (
      <Component key={name} {...args} />
    ))}
  </div>
);
