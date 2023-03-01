import React, { useState } from 'react';
import { InfoIcon } from '../Icon';
import Button, { ButtonTypes } from './Button';

export default {
  component: Button,
  title: 'Components/Button',
};

export const Default = args => <Button {...args}>Blah Blah</Button>;

export const ButtonIcon = args => (
  <Button variation={ButtonTypes.Icon}>
    <InfoIcon label="info" labelId="info" />
  </Button>
);
