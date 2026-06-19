import React from 'react';

import Select from '../Select/Select';
import TextInput from '../TextInput/TextInput';
import FieldGrid, { FieldGridColumns } from './FieldGrid';

export default {
  component: FieldGrid,
  title: 'Layout/FieldGrid',
};

export const TwoColumns = () => (
  <FieldGrid>
    <TextInput label="First name" />
    <TextInput label="Last name" />
    <TextInput label="Email" />
    <TextInput label="Phone" />
  </FieldGrid>
);

export const ThreeColumns = () => (
  <FieldGrid columns={FieldGridColumns.Three}>
    <TextInput label="First name" />
    <TextInput label="Middle name" />
    <TextInput label="Last name" />
    <TextInput label="Street" />
    <TextInput label="Suburb" />
    <TextInput label="Postcode" />
  </FieldGrid>
);

export const FourColumns = () => (
  <FieldGrid columns={FieldGridColumns.Four}>
    <TextInput label="Day" />
    <TextInput label="Month" />
    <TextInput label="Year" />
    <Select
      label="Country"
      onValueChange={() => null}
      placeholder="Select country"
      options={[
        { label: 'Australia', value: 'au' },
        { label: 'United Kingdom', value: 'uk' },
      ]}
    />
  </FieldGrid>
);

export const NonResponsive = () => (
  <FieldGrid columns={FieldGridColumns.Three} responsive={false}>
    <TextInput label="Field A" />
    <TextInput label="Field B" />
    <TextInput label="Field C" />
  </FieldGrid>
);

export const CustomGap = () => (
  <FieldGrid gap="8px">
    <TextInput label="Username" />
    <TextInput label="Password" />
    <TextInput label="Confirm password" />
    <TextInput label="Email" />
  </FieldGrid>
);
