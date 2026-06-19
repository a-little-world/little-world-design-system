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
    <TextInput label="First name" id="first-name" />
    <TextInput label="Last name" id="last-name" />
    <TextInput label="Email" id="email" />
    <TextInput label="Phone" id="phone" />
  </FieldGrid>
);

export const ThreeColumns = () => (
  <FieldGrid columns={FieldGridColumns.Three}>
    <TextInput label="First name" id="first-name" />
    <TextInput label="Middle name" id="middle-name" />
    <TextInput label="Last name" id="last-name" />
    <TextInput label="Street" id="street" />
    <TextInput label="Suburb" id="suburb" />
    <TextInput label="Postcode" id="postcode" />
  </FieldGrid>
);

export const FourColumns = () => (
  <FieldGrid columns={FieldGridColumns.Four}>
    <TextInput label="Day" id="day" />
    <TextInput label="Month" id="month" />
    <TextInput label="Year" id="year" />
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
    <TextInput label="Field A" id="field-a" />
    <TextInput label="Field B" id="field-b" />
    <TextInput label="Field C" id="field-c" />
  </FieldGrid>
);

export const CustomGap = () => (
  <FieldGrid gap="8px">
    <TextInput label="Username" id="username" />
    <TextInput label="Password" id="password" />
    <TextInput label="Confirm password" id="confirm-password" />
    <TextInput label="Email" id="email" />
  </FieldGrid>
);
