import React from 'react';

import { Icon } from './Icon';
import * as allIcons from './index';
import { tokensPixelated, Gradients } from '@a-little-world/little-world-design-system-core';
import Text from '../Text/Text';
import styled from 'styled-components';
;

export default {
  component: Icon,
  title: 'Components/Icons',
  parameters: {
    docs: {
      description: {
        component:
          'Omit `label` for a decorative icon, including one beside visible text. Pass `label` when the icon is the only content of a control or carries meaning on its own. Callers pass the string.',
      },
    },
  },
  argTypes: {
    color: { control: 'color' },
    gradient: { control: 'select', options: Gradients },
    height: { control: 'text' },
    width: { control: 'text' },
  },
};

export const AllVariants = args => (
  <div
    style={{ display: 'flex', flexWrap: 'wrap', gap: tokensPixelated.spacing.medium }}
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

export const StyledIcon = (args) => {
  return (
    <div>
      <Text>Icon should have custom styles applied: Red and height of 64px</Text>
      <StyledStack label="Stack Icon" />
    </div>
  )
}