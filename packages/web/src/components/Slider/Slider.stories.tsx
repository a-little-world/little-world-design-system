import React from 'react';
import Slider from './Slider';

export default {
  component: Slider,
  title: 'Components/Slider',
  argTypes: {
    step: { control: 'number' },
  },
};

export const Default = args => {
  return <Slider {...args} />;
};

Default.args = {
  ariaLabel: 'German Level Slider',
  label: 'How good is your German?',
  steps: [
    'No chance',
    'I introduce myself',
    'I can order a coffee',
    'I talk about my day',
    'I can have a debate',
    'I am a pro',
  ],
};
