import React, { useState } from 'react';
import Card from './Card';

export default {
  component: Card,
  title: 'Components/Card',
};

export const Default = args => <Card {...args}>Blah Blah</Card>;
