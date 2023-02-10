import React from 'react';
import Text from './Text';

export default {
  component: Text,
  title: 'Components/Text',
  argTypes: {
    text: { control: 'text' },
  },
};

export const Default = ({ text, ...rest }) => <Text {...rest}>{text}</Text>;

Default.args = {
  text: 'Little World for a better society',
};
