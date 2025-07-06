import React from 'react';

import TextArea, { TextAreaSize } from './TextArea';

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

export const MessageBox = args => <TextArea {...args} />;

MessageBox.args = {
  placeholder: 'Insert your message',
  id: 'message box id',
  expandable: true,
  size: TextAreaSize.Xsmall,
};
