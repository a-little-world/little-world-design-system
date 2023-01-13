import React, { useState } from 'react';
import Modal from './Modal';
import ModalDocs from './ModalDocs.mdx';

export default {
  component: Modal,
  title: 'Components/Modal',
  parameters: {
    docs: {
      page: ModalDocs,
    },
  },
};

const Template = args => {
  const [open, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal open={open} onClose={() => setIsOpen(false)} {...args}>
        <div>I AM A MODAL</div>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
