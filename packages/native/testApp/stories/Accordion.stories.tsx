import React from 'react';

import {
  Accordion,
  Select,
  Text,
  TextInput,
} from '@a-little-world/little-world-design-system-native';
import { View } from 'react-native';

export default {
  component: Accordion,
  title: 'Components/Accordion',
};

const accordionItems = [
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
]

export const Default = args => {
  return <Accordion items={accordionItems} {...args} />;
};

export const LongFormSectionGrouping = () => (
  <Accordion
    items={[
      {
        header: 'Personal Information',
        content: (
          <View style={{ gap: 12 }}>
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
          </View>
        ),
      },
      {
        header: 'Contact Details',
        content: (
          <View style={{ gap: 12 }}>
            <TextInput label="Email address" id="email" />
            <TextInput label="Phone number" id="phone" type="tel" />
            <TextInput label="Preferred contact time" id="contact-time" />
          </View>
        ),
      },
      {
        header: 'Address',
        content: (
          <View style={{ gap: 12 }}>
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
              ]}
            />
          </View>
        ),
      },
      {
        header: 'Employment',
        content: (
          <View style={{ gap: 12 }}>
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
          </View>
        ),
      },
    ]}
  />
);

