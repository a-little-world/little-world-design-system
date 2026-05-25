import React, { useState } from 'react';

import { InputHeight } from '@a-little-world/little-world-design-system-core';

import Combobox from './Combobox';

const languageOptions = [
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
];

export default {
  component: Combobox,
  title: 'Components/Combobox',
};

export const Default = args => {
  const [value, setValue] = useState<string | undefined>(args.value);

  return (
    <Combobox
      {...args}
      onValueChange={setValue}
      value={value}
    />
  );
};

Default.args = {
  label: 'Search languages',
  id: 'combobox-default',
  onValueChange: () => null,
  placeholder: 'Search or select a language',
  value: undefined,
  disabled: false,
  required: false,
  options: languageOptions,
};

export const WithError = args => {
  const [value, setValue] = useState<string | undefined>(args.value);

  return (
    <Combobox
      {...args}
      onValueChange={setValue}
      value={value}
    />
  );
};

WithError.args = {
  ...Default.args,
  id: 'combobox-error',
  error: 'Please select a language',
};

export const Small = args => {
  const [value, setValue] = useState<string | undefined>(args.value);

  return (
    <Combobox
      {...args}
      onValueChange={setValue}
      value={value}
    />
  );
};

Small.args = {
  ...Default.args,
  id: 'combobox-small',
  height: InputHeight.Small,
};

export const LockedValue = args => (
  <Combobox {...args} lockedValue="english" onValueChange={() => null} />
);

LockedValue.args = {
  ...Default.args,
  id: 'combobox-locked',
  label: 'Locked language',
};

export const Multiple = args => {
  const [value, setValue] = useState<string[]>(args.value ?? []);

  return (
    <Combobox
      {...args}
      multiple
      onValueChange={setValue}
      value={value}
    />
  );
};

Multiple.args = {
  label: 'Select languages',
  id: 'combobox-multiple',
  onValueChange: () => null,
  placeholder: 'Search languages',
  value: ['english', 'german'],
  disabled: false,
  required: false,
  options: languageOptions,
};

export const MultipleWithChipLimit = args => {
  const [value, setValue] = useState<string[]>(args.value ?? []);

  return (
    <Combobox
      {...args}
      multiple
      onValueChange={setValue}
      value={value}
    />
  );
};

MultipleWithChipLimit.args = {
  ...Multiple.args,
  id: 'combobox-multiple-chip-limit',
  chipLimit: 2,
  value: ['english', 'german', 'spanish', 'french'],
};
