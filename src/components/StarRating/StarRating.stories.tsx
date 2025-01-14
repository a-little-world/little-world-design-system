import React from 'react';

import StarRating from './StarRating';

export default {
  component: StarRating,
  title: 'Components/StarRating',
  argTypes: {
    step: { control: 'number' },
  },
};

export const Default = args => {
  return <StarRating {...args} />;
};

Default.args = {
  maxRating: 5,
  initialRating: 0,
  // onChange?: (rating: number) => void;
  // name?: string;
  // id?: string;
};
