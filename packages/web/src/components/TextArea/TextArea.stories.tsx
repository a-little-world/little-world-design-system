import React from 'react';

import TextArea, { TextAreaSize, TextAreaProps } from './TextArea';

export default {
  component: TextArea,
  title: 'Components/TextArea',
};

export const Default = (args: TextAreaProps) => <TextArea {...args} />;

Default.args = {
  placeholder: 'Insert your text',
  id: 'text input id',
  label: 'Text Input',
  readOnly: false,
};

export const MessageBox = (args: TextAreaProps) => <TextArea {...args} />;

MessageBox.args = {
  placeholder: 'Insert your message',
  id: 'message box id',
  expandable: true,
  size: TextAreaSize.Xsmall,
};
