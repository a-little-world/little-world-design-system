import React from 'react';
import tokens from '../../tokens';
import { Icon } from './Icon';
import * as allIcons from './index';
import { Gradients } from './IconGradient';

export default {
  component: Icon,
  title: 'Components/Icons',
  argTypes: {
    color: { control: 'color' },
    gradient: { control: 'select', options: Gradients },
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
