import { Meta, StoryObj } from '@storybook/react';

import StatusMessage, { MessageTypes } from './StatusMessage';

const meta: Meta<typeof StatusMessage> = {
  component: StatusMessage,
  title: 'Components/StatusMessage',
};

export default meta;

type Story = StoryObj<typeof StatusMessage>;

export const Error: Story = {
  args: {
    $visible: true,
    $type: MessageTypes.Error,
    children: 'This is an error message to indicate something went wrong!',
  },
};

export const Success: Story = {
  args: {
    ...Error.args,
    $type: MessageTypes.Success,
    children: 'This is a succes message to indicate something went right!',
  },
};
