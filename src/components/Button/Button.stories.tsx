import React, { useState } from 'react';
import Button from './Button';

export default {
  component: Button,
  title: 'Components/Button',
};

export const Default = args => <Button {...args}>Blah Blah</Button>;
