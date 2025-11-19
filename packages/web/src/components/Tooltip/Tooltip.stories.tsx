import React from 'react';
import Tooltip from './Tooltip';
import Button, { ButtonVariations } from '../Button/Button';
import { QuestionIcon } from '../Icon';

export default {
  component: Tooltip,
  title: 'Components/Tooltip',
  argTypes: {
    open: { control: 'boolean' },
    text: { control: 'text' },
    side: { control: 'select', options: ['top', 'left', 'right', 'bottom'] },
  },
};

export const Default = args => {
  return (
    <Tooltip
      trigger={
        <Button variation={ButtonVariations.Icon}>
          <QuestionIcon label="questionIcon" />
        </Button>
      }
      {...args}
    />
  );
};

Default.args = {
  text: 'this is a descriptor tooltip',
};
