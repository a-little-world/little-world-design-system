import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

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
