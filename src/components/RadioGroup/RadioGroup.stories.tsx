import React, { useState } from 'react';
import RadioGroup from './RadioGroup';

export default {
  component: RadioGroup,
  title: 'Components/RadioGroup',
};

export const Default = args => {
  const items = [
    { value: 'love', id: 'love', label: 'Love' },
    { value: 'dreams', id: 'dreams', label: 'Dreams' },
    { value: 'hope', id: 'hope', label: 'Hope' },
  ];
  return <RadioGroup items={items}>Blah Blah</RadioGroup>;
};
