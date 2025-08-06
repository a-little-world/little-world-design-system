import React from 'react';

import { TagAppearance } from '@a-little-world/little-world-design-system-core';
import Tags, { Tag } from './Tags';

export default {
  component: Tags,
  title: 'Components/Tags',
};

export const Default = args => {
  return <Tags {...args} />;
};

export const SingleTag = args => {
  return <Tag {...args}>Volunteer</Tag>;
};

export const ColorTest = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Tag color="red" appearance={TagAppearance.filled}>Red Filled</Tag>
      <br />
      <Tag color="blue" appearance={TagAppearance.outline}>Blue Outline</Tag>
      <br />
      <Tag color="#00ff00" appearance={TagAppearance.filled}>Green Filled</Tag>
      <br />
      <Tag appearance={TagAppearance.error}>Error Tag</Tag>
      <br />
      <Tag appearance={TagAppearance.success}>Success Tag</Tag>
    </div>
  );
};

Default.args = {
  content: [
    'Coffee',
    'Mocha',
    'Tea',
    'Flat white',
    'Capuccino',
    'Hot Chocolate',
  ],
};
