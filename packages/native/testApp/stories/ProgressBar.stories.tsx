import React from 'react';
import { ProgressBar } from '@a-little-world/little-world-design-system-native';

export default {
  component: ProgressBar,
  title: 'Components/ProgressBar',
};

export const Default = args => {
  return <ProgressBar {...args} />;
};

Default.args = {
  max: 10,
};
