import React from 'react';

import Tags from './Tags';

export default {
  component: Tags,
  title: 'Components/Tags',
};

export const Default = args => {
  return <Tags {...args} />;
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
