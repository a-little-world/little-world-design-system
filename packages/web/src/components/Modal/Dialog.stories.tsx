import React, { useState } from 'react';

import Button, { ButtonAppearance } from '../Button/Button';
import Dialog from './Dialog';

export default {
  component: Dialog,
  title: 'Components/Dialog',
};

const Template = args => {
  const [open, setIsOpen] = useState(false);
  return (
    <>
      <Button
        appearance={ButtonAppearance.Secondary}
        onClick={() => setIsOpen(true)}
      >
        Open Dialog
      </Button>
      <Dialog open={open} {...args} onClose={() => setIsOpen(false)}>
        <p>Dialog content goes here.</p>
      </Dialog>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: 'Dialog Title',
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  title: 'Confirm Action',
  footer: (
    <>
      <Button appearance={ButtonAppearance.Secondary}>Cancel</Button>
      <Button>Confirm</Button>
    </>
  ),
};

export const Small = Template.bind({});
Small.args = {
  title: 'Small Dialog',
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  title: 'Large Dialog',
  size: 'lg',
};

export const Fullscreen = Template.bind({});
Fullscreen.args = {
  title: 'Fullscreen Dialog',
  size: 'fullscreen',
};

export const Locked = Template.bind({});
Locked.args = {
  title: 'Locked Dialog',
  locked: true,
};

export const CloseButtonOnly = Template.bind({});
CloseButtonOnly.args = {
  closeOnBackdropClick: false,
};
