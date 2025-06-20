import { Meta, StoryObj } from '@storybook/react';

import StatusMessage from './StatusMessage';
import { StatusTypes } from '@a-little-world/little-world-design-system-core';

const meta: Meta<typeof StatusMessage> = {
  component: StatusMessage,
  title: 'Components/StatusMessage',
};

export default meta;

type Story = StoryObj<typeof StatusMessage>;

export const Error: Story = {
  args: {
    $visible: true,
    $type: StatusTypes.Error,
    children: 'This is an error message to indicate something went wrong!',
  },
};

export const Success: Story = {
  args: {
    ...Error.args,
    $type: StatusTypes.Success,
    children: 'This is a succes message to indicate something went right!',
  },
};
