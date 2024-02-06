import React from 'react';

import TextPage, { ContentTypes } from './TextContent';

export default {
  component: Text,
  title: 'Components/TextContent',
};

export const Default = args => (
  <div>
    <TextPage
      content={[
        { text: 'Type: Heading', type: ContentTypes.Heading },
        { text: 'Type: Title', type: ContentTypes.Title },
        { text: 'Type: Subtitle', type: ContentTypes.Subtitle },
        { text: 'Type: Paragraph', type: ContentTypes.Paragraph },
        { text: 'Type: Sentence', type: ContentTypes.Sentence },
        { text: 'Type: List Item (below)', type: ContentTypes.Sentence },
        {
          text: 'Type: List',
          type: ContentTypes.List,
          listItems: ['Example 1', 'Example 2', 'Example 3'],
        },
        { text: 'Type: Emphasize', type: ContentTypes.Emphasize },
      ]}
      {...args}
    />
  </div>
);
