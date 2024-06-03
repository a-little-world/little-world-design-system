import React from 'react';

import Text from '../Text/Text';
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
      content: (
        <Text>This is content of the highest quality. The finest degree.</Text>
      ),
      header: 'High quality content',
    },
    {
      content: <Text>This is content of a medium quality. A new normal.</Text>,
      header:
        'Content of a mid range but testing out a longer sentence to see the design when it is multi-line',
    },
    {
      content: <Text>This is content of the lowest quality. A new low.</Text>,
      header: 'Low quality content',
    },
  ],
};
