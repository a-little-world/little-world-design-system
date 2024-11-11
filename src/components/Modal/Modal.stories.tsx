import React, { useState } from 'react';

import Button, { ButtonAppearance } from '../Button/Button';
import Card, { CardContent, CardFooter, CardHeader } from '../Card/Card';
import Text from '../Text/Text';
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
  const [open, setIsOpen] = useState<string | boolean>(false);
  return (
    <>
      <Button
        appearance={ButtonAppearance.Secondary}
        onClick={() => setIsOpen('default')}
        style={{ marginBottom: '16px' }}
      >
        Open Modal
      </Button>
      <Button onClick={() => setIsOpen('card')}>Open Modal with Card</Button>
      <Modal open={open} {...args} onClose={() => setIsOpen(false)}>
        {open === 'default' ? (
          <div>I AM A MODAL</div>
        ) : (
          <Card>
            <CardHeader>New match</CardHeader>
            <CardContent $align="flex-end" $textAlign="center" $gap="40px">
              <Text>We've found a new match for you</Text>
              <Text>Click accept or decline to progress</Text>
            </CardContent>
            <CardFooter>
              <Button onClick={() => setIsOpen(false)}>Confirm</Button>
            </CardFooter>
          </Card>
        )}
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
