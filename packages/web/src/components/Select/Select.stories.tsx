import React, { useState } from 'react';

import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Select from './Select';

export default {
  component: Select,
  title: 'Components/Select',
};

export const Default = (args: React.ComponentProps<typeof Select>) => (
  <Select {...args} />
);

Default.args = {
  label: 'Demo select',
  id: 'multi selector id',
  onValueChange: () => null,
  placeholder: 'out of town',
  value: undefined,
  disabled: false,
  required: false,
  options: [
    { label: 'English', value: 'english' },
    { label: 'German', value: 'german' },
    { label: 'Spanish', value: 'spanish' },
    { label: 'French', value: 'french' },
    { label: 'Italian', value: 'italian' },
    { label: 'Dutch', value: 'dutch' },
    { label: 'Portuguese', value: 'portuguese' },
    { label: 'Russian', value: 'russian' },
    { label: 'Chinese', value: 'chinese' },
    { label: 'Japanese', value: 'japanese' },
    { label: 'Korean', value: 'korean' },
    { label: 'Arabic', value: 'arabic' },
    { label: 'Turkish', value: 'turkish' },
    { label: 'Swedish', value: 'swedish' },
    { label: 'Polish', value: 'polish' },
    { label: 'Danish', value: 'danish' },
    { label: 'Norwegian', value: 'norwegian' },
    { label: 'Finnish', value: 'finnish' },
    { label: 'Greek', value: 'greek' },
    { label: 'Czech', value: 'czech' },
    { label: 'Hungarian', value: 'hungarian' },
    { label: 'Romanian', value: 'romanian' },
    { label: 'Indonesian', value: 'indonesian' },
    { label: 'Hebrew', value: 'hebrew' },
    { label: 'Thai', value: 'thai' },
    { label: 'Vietnamese', value: 'vietnamese' },
    { label: 'Ukrainian', value: 'ukrainian' },
    { label: 'Slovak', value: 'slovak' },
    { label: 'Croatian', value: 'croatian' },
    { label: 'Serbian', value: 'serbian' },
    { label: 'Bulgarian', value: 'bulgarian' },
    { label: 'Lithuanian', value: 'lithuanian' },
    { label: 'Latvian', value: 'latvian' },
    { label: 'Estonian', value: 'estonian' },
    { label: 'Persian', value: 'persian' },
    { label: 'Afrikaans', value: 'afrikaans' },
    { label: 'Swahili', value: 'swahili' },
  ],
};

export const InModal = (args: React.ComponentProps<typeof Select>) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Select {...args} inModal />
      </Modal>
    </>
  );
};

InModal.args = {
  ...Default.args,
  id: 'select-in-modal',
};
