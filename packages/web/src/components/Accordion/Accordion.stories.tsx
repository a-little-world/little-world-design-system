import React from 'react';

import Text from '../Text/Text';
import Accordion, { AccordionContent } from './Accordion';
import FieldGrid, { FieldGridColumns } from '../FieldGrid/FieldGrid';
import Select from '../Select/Select';
import TextInput from '../TextInput/TextInput';
import styled from 'styled-components';

export default {
  component: Accordion,
  title: 'Components/Accordion',
};

export const Default = args => {
  return <Accordion {...args} />;
};

export const WithCustomContent = args => {
  return <Accordion {...args} />;
};

export const LongFormSectionGrouping = () => (
  <Accordion
    defaultValue="Personal Information"
    items={[
      {
        header: 'Personal Information',
        content: (
          <FieldGrid columns={FieldGridColumns.Two}>
            <TextInput label="First name" id="first-name" />
            <TextInput label="Last name" id="last-name" />
            <TextInput label="Date of birth" id="dob" placeholder="DD/MM/YYYY" />
            <Select
              label="Gender"
              onValueChange={() => null}
              placeholder="Select gender"
              options={[
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
                { label: 'Non-binary', value: 'non-binary' },
                { label: 'Prefer not to say', value: 'prefer-not-to-say' },
              ]}
            />
          </FieldGrid>
        ),
      },
      {
        header: 'Contact Details',
        content: (
          <FieldGrid columns={FieldGridColumns.Two}>
            <TextInput label="Email address" id="email" type="email" />
            <TextInput label="Phone number" id="phone" type="tel" />
            <TextInput label="Preferred contact time" id="contact-time" />
          </FieldGrid>
        ),
      },
      {
        header: 'Address',
        content: (
          <FieldGrid columns={FieldGridColumns.Two}>
            <TextInput label="Street address" id="street" />
            <TextInput label="Suburb" id="suburb" />
            <TextInput label="Postcode" id="postcode" />
            <Select
              label="State"
              onValueChange={() => null}
              placeholder="Select state"
              options={[
                { label: 'New South Wales', value: 'nsw' },
                { label: 'Victoria', value: 'vic' },
                { label: 'Queensland', value: 'qld' },
                { label: 'Western Australia', value: 'wa' },
                { label: 'South Australia', value: 'sa' },
                { label: 'Tasmania', value: 'tas' },
              ]}
            />
            <Select
              label="Country"
              onValueChange={() => null}
              placeholder="Select country"
              options={[
                { label: 'Australia', value: 'au' },
                { label: 'New Zealand', value: 'nz' },
                { label: 'United Kingdom', value: 'uk' },
              ]}
            />
          </FieldGrid>
        ),
      },
      {
        header: 'Employment',
        content: (
          <FieldGrid columns={FieldGridColumns.Two}>
            <TextInput label="Employer name" id="employer" />
            <TextInput label="Job title" id="job-title" />
            <Select
              label="Employment type"
              onValueChange={() => null}
              placeholder="Select type"
              options={[
                { label: 'Full-time', value: 'full-time' },
                { label: 'Part-time', value: 'part-time' },
                { label: 'Casual', value: 'casual' },
                { label: 'Self-employed', value: 'self-employed' },
              ]}
            />
            <TextInput label="Annual income" id="income" placeholder="$" />
          </FieldGrid>
        ),
      },
    ]}
  />
);

const CustomContentWrapper = styled(AccordionContent)`
  background-color: ${({ theme }) => theme.color.surface.accent};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.radius.medium};
  border: 1px solid ${({ theme }) => theme.color.border.moderate};
`;

Default.args = {
  items: [
    {
      content: (
        <Text>This is content of the highest quality. The finest degree.</Text>
      ),
      header: 'High quality content',
    },
    {
      content: <Text>This is content of a medium quality. A new normal.</Text>,
      header:
        'Content of a mid range but testing out a longer sentence to see the design when it is multi-line',
    },
    {
      content: <Text>This is content of the lowest quality. A new low.</Text>,
      header: 'Low quality content',
    },
  ],
};

WithCustomContent.args = {
  ContentWrapper: CustomContentWrapper,
  items: [
    {
      content: (
        <Text>This is content of the highest quality. The finest degree.</Text>
      ),
      header: 'High quality content',
    },
    {
      content: <Text>This is content of a medium quality. A new normal.</Text>,
      header:
        'Content of a mid range but testing out a longer sentence to see the design when it is multi-line',
    },
    {
      content: <Text>This is content of the lowest quality. A new low.</Text>,
      header: 'Low quality content',
    },
  ],
};
