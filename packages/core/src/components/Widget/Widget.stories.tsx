import React from 'react';

import Widget from './Widget';

export default {
  title: 'Components/Widget/Base',
  component: Widget,
};

export const Default = args => <Widget {...args}>Blah Blah</Widget>;
