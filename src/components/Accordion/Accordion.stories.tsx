import React from 'react';

import Accordion from './Accordion';

export default {
  component: Accordion,
  title: 'Components/Accordion',
};

export const Default = args => {
  return <Accordion {...args} />;
};

Default.args = {
  items: [
    {
      content: 'This is content of the highest quality. The finest degree.',
      header: 'High quality content',
    },
    {
      content: 'This is content of a medium quality. A new normal.',
      header:
        'Content of a mid range but testing out a longer sentence to see the design when it is multi-line',
    },
    {
      content: 'This is content of the lowest quality. A new low.',
      header: 'Low quality content',
    },
  ],
};
