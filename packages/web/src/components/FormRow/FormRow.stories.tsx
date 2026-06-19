import React from 'react';

import TextInput from '../TextInput/TextInput';
import Select from '../Select/Select';
import FormRow from './FormRow';

export default {
  component: FormRow,
  title: 'Layout/FormRow',
};

export const Default = () => (
  <FormRow>
    <TextInput label="First name" />
    <TextInput label="Last name" />
  </FormRow>
);

export const ThreeFields = () => (
  <FormRow>
    <TextInput label="First name" />
    <TextInput label="Middle name" />
    <TextInput label="Last name" />
  </FormRow>
);

export const WithDropdown = () => (
  <FormRow>
    <TextInput label="City" />
    <Select
      label="Country"
      onValueChange={() => null}
      placeholder="Select country"
      options={[
        { label: 'Australia', value: 'au' },
        { label: 'United Kingdom', value: 'uk' },
        { label: 'United States', value: 'us' },
      ]}
    />
  </FormRow>
);

export const AlignedBaseline = () => (
  <FormRow align="baseline">
    <TextInput label="Username" />
    <TextInput label="Email" />
  </FormRow>
);

export const CustomGap = () => (
  <FormRow gap="8px">
    <TextInput label="Street" />
    <TextInput label="Suburb" />
    <TextInput label="Postcode" />
  </FormRow>
);
