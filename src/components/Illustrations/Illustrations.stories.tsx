import tokens from '../../tokens';
import React from 'react';
import * as allIllustrations from './index';

export default {
  title: 'Components/Illustrations',
  argTypes: {
    color: { control: 'color' },
    height: { control: 'text' },
    width: { control: 'text' },
  },
};

export const AllVariants = args => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: tokens.spacing.large }}>
    {Object.entries(allIllustrations).map(([name, Component]) => (
      <Component key={name} {...args} />
    ))}
  </div>
);
