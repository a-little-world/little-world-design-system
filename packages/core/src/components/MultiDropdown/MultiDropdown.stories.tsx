import React from 'react';

import MultiDropdown from './MultiDropdown';

export default {
  component: MultiDropdown,
  title: 'Components/MultiDropdown',
};

const DEFAULT_ARGS = {
  addMoreLabel: 'Add more',
  onValueChange: () => null,
  firstDropdown: {
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
  secondDropdown: {
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

export const Default = args => <MultiDropdown {...args} />;

Default.args = DEFAULT_ARGS;

export const WithValues = args => <MultiDropdown {...args} />;
WithValues.args = {
  ...DEFAULT_ARGS,
  firstDropdown: {
    ...DEFAULT_ARGS.firstDropdown,
    values: ['german', 'french'],
  },
  secondDropdown: {
    ...DEFAULT_ARGS.secondDropdown,
    values: ['A1', 'A2'],
  },
};

export const LockedValue = () => (
  <MultiDropdown
    {...{
      ...DEFAULT_ARGS,
      firstDropdown: {
        ...DEFAULT_ARGS.firstDropdown,
        values: ['german', 'french'],
      },
      secondDropdown: {
        ...DEFAULT_ARGS.secondDropdown,
        lockedValue: 'B1',
        values: ['A1', 'A2'],
      },
    }}
  />
);

export const AllLocked = args => <MultiDropdown {...args} />;
AllLocked.args = {
  ...DEFAULT_ARGS,
  firstDropdown: {
    ...DEFAULT_ARGS.firstDropdown,
    values: ['german', 'french'],
  },
  secondDropdown: {
    ...DEFAULT_ARGS.secondDropdown,
    values: ['A1', 'A2'],
  },
  locked: true,
};

export const RestrictedOptions = args => <MultiDropdown {...args} />;
RestrictedOptions.args = {
  ...DEFAULT_ARGS,
  restrictions: { german: ['B1', 'B2'], french: ['B1'] },
  firstDropdown: {
    ...DEFAULT_ARGS.firstDropdown,
    values: ['german', 'french'],
  },
  secondDropdown: {
    ...DEFAULT_ARGS.secondDropdown,
    values: ['A1', 'A2'],
  },
};
