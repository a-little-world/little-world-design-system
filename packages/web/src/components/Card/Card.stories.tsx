import React, { useState } from 'react';

import Button, { ButtonAppearance } from '../Button/Button';
import Card, { CardContent, CardFooter, CardHeader } from './Card';

export default {
  component: Card,
  title: 'Components/Card',
};

export const Default = args => <Card {...args}>Blah Blah</Card>;

export const CardWithSubElements = args => (
  <Card {...args}>
    <CardHeader>Card Header</CardHeader>
    <CardContent>This is the card content.</CardContent>
    <CardFooter align="space-between">
      <Button appearance={ButtonAppearance.Secondary}>Reject</Button>
      <Button>Accept</Button>
    </CardFooter>
  </Card>
);
