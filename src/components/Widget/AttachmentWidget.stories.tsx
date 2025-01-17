import React from 'react';

import AttachmentWidget from './AttachmentWidget';

export default {
  title: 'Components/Widget/Attachment',
  component: AttachmentWidget,
};

export const Default = args => (
  <AttachmentWidget
    imageSrc={'https://patenmatch.de/_next/static/media/3.7cbb6de2.webp'}
  />
);
