import type { TabsProps } from '@a-little-world/little-world-design-system-core';
import {
  TabsVariations,
  TextTypes,
} from '@a-little-world/little-world-design-system-core';
import React, { useState } from 'react';

import Text from '../Text/Text';
import Tabs from './Tabs';

const sampleItems = [
  {
    value: 'account',
    label: 'Account',
    content: (
      <Text type={TextTypes.Body4}>
        Manage your account settings and email preferences.
      </Text>
    ),
  },
  {
    value: 'password',
    label: 'Password',
    content: (
      <Text type={TextTypes.Body4}>
        Change your password and security options here.
      </Text>
    ),
  },
  {
    value: 'notifications',
    label: 'Notifications',
    content: (
      <Text type={TextTypes.Body4}>
        Choose how we can reach you about updates and alerts.
      </Text>
    ),
  },
] as const;

export default {
  component: Tabs,
  title: 'Components/Tabs',
  parameters: {
    layout: 'padded',
  },
};

export const Pill = {
  args: {
    ariaLabel: 'Account settings sections',
    defaultValue: 'account',
    items: [...sampleItems],
    variation: TabsVariations.Pill,
  },
};

/** Traditional full-width tab row with underline active state and card chrome. */
export const Underline = {
  render: (args: TabsProps) => (
    <div style={{ maxWidth: 420 }}>
      <Tabs {...args} />
    </div>
  ),
  args: {
    ariaLabel: 'Account settings sections',
    defaultValue: 'account',
    items: [...sampleItems],
    variation: TabsVariations.Underline,
  },
};

export const Default = {
  ...Underline,
};

export const Controlled = () => {
  const [value, setValue] = useState('password');

  return (
    <Tabs
      ariaLabel="Controlled example tabs"
      items={[...sampleItems]}
      onValueChange={setValue}
      value={value}
      variation={TabsVariations.Pill}
    />
  );
};

export const LabelledByHeading = () => (
  <div>
    <Text
      id="settings-tabs-heading"
      tag="h2"
      type={TextTypes.Heading4}
      style={{ marginBottom: 16 }}
    >
      Settings
    </Text>
    <Tabs
      ariaLabelledBy="settings-tabs-heading"
      defaultValue="account"
      items={[...sampleItems]}
      variation={TabsVariations.Underline}
    />
  </div>
);
