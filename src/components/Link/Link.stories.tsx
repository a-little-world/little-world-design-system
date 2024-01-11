import React from 'react';

import Link from './Link';

export default {
  component: Link,
  title: 'Components/Link',
};

export const Default = args => <Link {...args}>Blah Blah</Link>;

Default.args = {
  href: 'www.little-world.com',
};
