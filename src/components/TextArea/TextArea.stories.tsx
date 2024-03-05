import React from 'react';

import TextArea from './TextArea';

export default {
  component: TextArea,
  title: 'Components/TextArea',
};

export const Default = args => <TextArea {...args} />;

Default.args = {
  placeholder: 'Insert your text',
  id: 'text input id',
  label: 'Text Input',
};
