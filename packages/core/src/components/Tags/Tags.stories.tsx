import React from 'react';

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
