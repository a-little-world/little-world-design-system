import React from 'react';

import Loading from './Loading';

export default {
  component: Loading,
  title: 'Components/Loading',
};

export const Default = args => <Loading {...args} />;

Default.args = {
  href: 'www.little-world.com',
};
