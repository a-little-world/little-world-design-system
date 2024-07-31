import React from 'react';

import tokens from '../../tokens';
import Text from '../Text/Text';
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: tokens.spacing.xxsmall,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
          padding: '8px',
          width: '200px',
        }}
        key={name}
      >
        <Component key={name} {...args} />
        <Text>{name}</Text>
      </div>
    ))}
  </div>
);
