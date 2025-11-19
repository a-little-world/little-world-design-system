import React, { useState } from 'react';
import styled from 'styled-components';

import Button, { ButtonVariations } from '../Button/Button';
import { DotsIcon, QuestionIcon } from '../Icon';
import Modal from '../Modal/Modal';
import Popover from './Popover';
import InfoPopover from './InfoPopover';

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

export const InfoPopoverComponent = args => {
  return (
    <InfoPopover
      trigger={
        <Button variation={ButtonVariations.Icon}>
          <QuestionIcon label="questionIcon" />
        </Button>
      }
      {...args}
    />
  );
};

InfoPopoverComponent.args = {
  text: 'Ein Avatar ist ein gezeichnetes Profilbild, das du an Stelle eines echten Fotos von dir verwenden kannst. Um den Avatar dir ähnlich aussehen zu lassen, kannst du Merkmale wie Geschlecht, Nase, Haare, Augen etc. anpassen. Probier es doch einfach mal aus! Deinen Avatar kannst du später jederzeit wieder ändern.',
};

InfoPopoverComponent.argTypes = {
  open: { control: 'boolean' },
  text: { control: 'text' },
  side: { control: 'select', options: ['top', 'left', 'right', 'bottom'] },
};
