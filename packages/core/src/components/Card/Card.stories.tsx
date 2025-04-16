import React, { useState } from 'react';

import Button, { ButtonAppearance } from '../Button/Button';
import Card, { CardFooter, CardHeader } from './Card';

export default {
  component: Card,
  title: 'Components/Card',
};

export const Default = args => <Card {...args}>Blah Blah</Card>;

export const CardWithSubElements = args => (
  <Card {...args}>
    <CardHeader>Card Header</CardHeader>
    This is the card content.
    <CardFooter align="space-between">
      <Button appearance={ButtonAppearance.Secondary}>Reject</Button>
      <Button>Accept</Button>
    </CardFooter>
  </Card>
);
