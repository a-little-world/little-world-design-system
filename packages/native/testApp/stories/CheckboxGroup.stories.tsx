import React, { useState } from 'react';
import { Text, View } from 'react-native';

import {
  CheckboxGroup,
  MultiCheckbox,
} from '@a-little-world/little-world-design-system-native';

export default {
  component: CheckboxGroup,
  title: 'Components/CheckboxGroup',
};

const OPTIONS = [
  { label: 'JavaScript', value: 'js' },
  { label: 'TypeScript', value: 'ts' },
  { label: 'Python', value: 'py' },
  { label: 'Rust', value: 'rs' },
];

export const Horizontal = () => (
  <CheckboxGroup
    heading="Select your languages"
    name="languages"
    options={OPTIONS}
    onSelection={() => {}}
    orientation="horizontal"
  />
);

export const Vertical = () => (
  <CheckboxGroup
    heading="Select your languages"
    name="languages"
    options={OPTIONS}
    onSelection={() => {}}
    orientation="vertical"
  />
);

export const WithPreSelected = () => (
  <CheckboxGroup
    heading="Pre-selected options"
    name="languages"
    options={OPTIONS}
    preSelected={['js', 'ts']}
    onSelection={() => {}}
  />
);

export const WithError = () => (
  <CheckboxGroup
    heading="Required selection"
    name="languages"
    options={OPTIONS}
    onSelection={() => {}}
    error="Please select at least one option"
  />
);

export const Controlled = () => {
  const [selected, setSelected] = useState<string[]>([]);
  return (
    <View style={{ gap: 12 }}>
      <CheckboxGroup
        heading="Pick skills"
        name="skills"
        options={OPTIONS}
        onSelection={setSelected}
      />
      <Text style={{ fontSize: 14 }}>
        Selected:{' '}
        <Text style={{ fontWeight: 'bold' }}>
          {selected.length ? selected.join(', ') : '—'}
        </Text>
      </Text>
    </View>
  );
};

export const MultiCheckboxAlias = () => (
  <MultiCheckbox
    heading="MultiCheckbox (deprecated alias)"
    name="languages"
    options={OPTIONS}
    onSelection={() => {}}
  />
);
