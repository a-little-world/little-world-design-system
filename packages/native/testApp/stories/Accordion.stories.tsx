import React from 'react';

import { Accordion, Text } from '@a-little-world/little-world-design-system-native';

export default {
  component: Accordion,
  title: 'Components/Accordion',
};

const accordionItems = [
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
]

export const Default = args => {
  return <Accordion items={accordionItems} {...args} />;
};

