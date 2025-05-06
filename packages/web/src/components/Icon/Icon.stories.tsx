import React from 'react';

import { Icon } from './Icon';
import * as allIcons from './index';
import { tokensPixelated, Gradients } from '@a-little-world/little-world-design-system-core';
;

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
    style={{ display: 'flex', flexWrap: 'wrap', gap: tokensPixelated.spacing.medium }}
  >
    {Object.entries(allIcons).map(([name, Component]) => (
      <Component key={name} label={name} {...args} />
    ))}
  </div>
);
