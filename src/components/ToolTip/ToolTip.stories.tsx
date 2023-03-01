import React from 'react';
import ToolTip from './ToolTip';
import Button, { ButtonTypes } from '../Button/Button';
import { QuestionIcon } from '../Icon';

export default {
  component: ToolTip,
  title: 'Components/ToolTip',
  argTypes: {
    open: { control: 'boolean' },
    text: { control: 'text' },
    side: { control: 'select', options: ['top', 'left', 'right', 'bottom'] },
  },
};

export const Default = args => {
  return (
    <ToolTip
      trigger={
        <Button variation={ButtonTypes.Icon}>
          <QuestionIcon label="questionIcon" labelId="questionIcon" />
        </Button>
      }
      {...args}
    />
  );
};

Default.args = {
  text: 'This is a very informative tooltip.',
};
