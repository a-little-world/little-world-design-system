import React from 'react';

import Loading, { LoadingSizes, LoadingType } from './Loading';

export default {
  component: Loading,
  title: 'Components/Loading',
};

export const Default = args => (
  <div>
    <div>Love</div>
    <Loading {...args} />
    <div>Love</div>
  </div>
);

Default.args = {
  href: 'www.little-world.com',
};

export const Logo = args => (
  <div>
    <Loading {...args} type={LoadingType.Logo} size={LoadingSizes.XXLarge} />
  </div>
);
