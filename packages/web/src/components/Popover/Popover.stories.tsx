import React, { useState } from 'react';
import styled from 'styled-components';

import Button, { ButtonVariations } from '../Button/Button';
import { DotsIcon } from '../Icon';
import Modal from '../Modal/Modal';
import Popover from './Popover';

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
    children: { control: 'text' },
  },
};

export const Default = ({ children, ...args }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Popover
        showCloseButton={false}
        trigger={
          <Button variation={ButtonVariations.Icon}>
            <DotsIcon label="dotsIcon" />
          </Button>
        }
        {...args}
      >
        {children || (
          <>
            <StyledOption
              variation={ButtonVariations.Inline}
              onClick={() => setOpen(true)}
            >
              Open Modal
            </StyledOption>
            <StyledOption variation={ButtonVariations.Inline}>
              Unmatch
            </StyledOption>
          </>
        )}
      </Popover>
      <Modal open={open} onClose={() => setOpen(false)}>
        Modal Open
      </Modal>
    </>
  );
};
