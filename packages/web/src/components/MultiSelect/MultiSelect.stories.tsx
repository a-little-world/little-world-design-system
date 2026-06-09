import { MultiSelectVariants } from '@a-little-world/little-world-design-system-core/dist/esm/types/MultiSelect';
import React from 'react';

import MultiSelect from './MultiSelect';

export default {
  component: MultiSelect,
  title: 'Components/MultiSelect',
};

const DEFAULT_ARGS = {
  addMoreLabel: 'Add more',
  onValueChange: () => null,
  firstSelect: {
    ariaLabel: 'language skill',
    options: [
      { value: 'german', label: 'German' },
      { value: 'french', label: 'French' },
      { value: 'english', label: 'English' },
    ],
    placeholder: 'Select a language...',
    label: 'Language Selector',
    dataField: 'lang_skill',
    errors: [],
    values: [],
  },
  secondSelect: {
    ariaLabel: 'language level',
    options: [
      { value: 'A1', label: 'A1' },
      { value: 'A2', label: 'A2' },
      { value: 'B1', label: 'B1' },
      {
        label: 'B2 = (fluent & spontaneous conversations, current events',
        value: 'B2',
      },
    ],
    placeholder: 'Select a level...',
    label: 'Level Selector',
    dataField: 'lang_level',
    errors: [],
    values: [],
  },
};

export const Default = (args: React.ComponentProps<typeof MultiSelect>) => (
  <MultiSelect {...args} />
);

Default.args = DEFAULT_ARGS;

export const WithValues = (args: React.ComponentProps<typeof MultiSelect>) => (
  <MultiSelect {...args} />
);
WithValues.args = {
  ...DEFAULT_ARGS,
  firstSelect: {
    ...DEFAULT_ARGS.firstSelect,
    values: ['german', 'french'],
  },
  secondSelect: {
    ...DEFAULT_ARGS.secondSelect,
    values: ['A1', 'A2'],
  },
};

export const LockedValue = () => (
  <MultiSelect
    {...{
      ...DEFAULT_ARGS,
      firstSelect: {
        ...DEFAULT_ARGS.firstSelect,
        values: ['german', 'french'],
      },
      secondSelect: {
        ...DEFAULT_ARGS.secondSelect,
        lockedValue: 'B1',
        values: ['A1', 'A2'],
      },
    }}
  />
);

export const AllLocked = (args: React.ComponentProps<typeof MultiSelect>) => (
  <MultiSelect {...args} />
);
AllLocked.args = {
  ...DEFAULT_ARGS,
  firstSelect: {
    ...DEFAULT_ARGS.firstSelect,
    values: ['german', 'french'],
  },
  secondSelect: {
    ...DEFAULT_ARGS.secondSelect,
    values: ['A1', 'A2'],
  },
  locked: true,
};

export const RestrictedOptions = (
  args: React.ComponentProps<typeof MultiSelect>,
) => <MultiSelect {...args} />;
RestrictedOptions.args = {
  ...DEFAULT_ARGS,
  restrictions: { german: ['B1', 'B2'], french: ['B1'] },
  firstSelect: {
    ...DEFAULT_ARGS.firstSelect,
    values: ['german', 'french'],
  },
  secondSelect: {
    ...DEFAULT_ARGS.secondSelect,
    values: ['A1', 'A2'],
  },
};

export const WithCombobox = (args: React.ComponentProps<typeof MultiSelect>) => (
  <MultiSelect {...args} />
);
WithCombobox.args = {
  ...DEFAULT_ARGS,
  variant: MultiSelectVariants.Combobox,
};

export const InModal = (args: React.ComponentProps<typeof MultiSelect>) => (
  <MultiSelect {...args} />
);
InModal.args = {
  ...DEFAULT_ARGS,
  inModal: true,
};
