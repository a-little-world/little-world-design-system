import React from 'react';
import Popover from './Popover';
import Button, { ButtonTypes } from '../Button/Button';
import Text, { TextTypes } from '../Text/Text';
import { DotsIcon } from '../Icon';
import styled from 'styled-components';

const StyledOption = styled(Button)`
  font-size: 16px;
  font-weight: normal;
  justify-content: flex-start;

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
`;

export default {
  component: Popover,
  title: 'Components/Popover',
  argTypes: {
    open: { control: 'boolean' },
    side: { control: 'select', options: ['top', 'left', 'right', 'bottom'] },
  },
};

export const Default = args => {
  return (
    <Popover
      trigger={
        <Button variation={ButtonTypes.Icon}>
          <DotsIcon label="dotsIcon" labelId="dotsIcon" />
        </Button>
      }
      {...args}
    >
      <StyledOption variation={ButtonTypes.Inline}>Report</StyledOption>
      <StyledOption variation={ButtonTypes.Inline}>Unmatch</StyledOption>
    </Popover>
  );
};
