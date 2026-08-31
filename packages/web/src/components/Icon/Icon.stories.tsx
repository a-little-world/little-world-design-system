import React from 'react';

import { Icon } from './Icon';
import * as allIcons from './index';
import {
  tokensPixelated,
  Gradients,
} from '@a-little-world/little-world-design-system-core';
import Text from '../Text/Text';
import styled from 'styled-components';

export default {
  component: Icon,
  title: 'Components/Icons',
  argTypes: {
    color: { control: 'color' },
    displayNumber: { control: 'number' },
    displayNumberTop: { control: 'text' },
    displayNumberRight: { control: 'text' },
    gradient: { control: 'select', options: Gradients },
    height: { control: 'text' },
    width: { control: 'text' },
  },
};

export const AllVariants = args => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: tokensPixelated.spacing.medium,
    }}
  >
    {Object.entries(allIcons).map(([name, Component]) => (
      <Component key={name} label={name} {...args} />
    ))}
  </div>
);

const StyledStack = styled(allIcons.StackIcon)`
  height: 64px;
  width: 64px;
  color: red;
`;

export const StyledIcon = args => {
  return (
    <div>
      <Text>
        Icon should have custom styles applied: Red and height of 64px
      </Text>
      <StyledStack label="Stack Icon" />
    </div>
  );
};

export const WithDisplayNumber = args => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: tokensPixelated.spacing.medium,
      alignItems: 'center',
    }}
  >
    <allIcons.CalendarIcon
      label="Calendar day"
      height={24}
      width={24}
      {...args}
    />
    <allIcons.CalendarIcon
      label="Calendar day"
      height={32}
      width={32}
      {...args}
    />
    <allIcons.CalendarIcon
      label="Calendar day"
      height={48}
      width={48}
      {...args}
    />
    <allIcons.StackIcon label="Stack count" height={32} width={32} {...args} />
    <allIcons.BellIcon
      circular
      label="Notifications"
      height={24}
      width={24}
      {...args}
    />
  </div>
);

WithDisplayNumber.args = {
  displayNumber: 8,
};
