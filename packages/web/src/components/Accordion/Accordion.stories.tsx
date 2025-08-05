import React from 'react';

import Text from '../Text/Text';
import Accordion, { AccordionContent } from './Accordion';
import styled from 'styled-components';

export default {
  component: Accordion,
  title: 'Components/Accordion',
};

export const Default = args => {
  return <Accordion {...args} />;
};

export const WithCustomContent = args => {
  return <Accordion {...args} />;
};

const CustomContentWrapper = styled(AccordionContent)`
  background-color: ${({ theme }) => theme.color.surface.accent};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.radius.medium};
  border: 1px solid ${({ theme }) => theme.color.border.moderate};
`;

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

WithCustomContent.args = {
  ContentWrapper: CustomContentWrapper,
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
