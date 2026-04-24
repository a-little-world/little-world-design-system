import React from 'react';
import { BannerTypes } from '@a-little-world/little-world-design-system-core';
import { MemoryRouter } from 'react-router-dom';

import Banner from './Banner';

// `Link` with `to` needs a router. Avoid `withRouter` from storybook-addon-remix-react-router:
// it pulls `useSearchParams` from `react-router`, which does not export that hook in RR v6.
const withMemoryRouter = (Story: React.FC) => (
  <MemoryRouter initialEntries={['/']}>
    <Story />
  </MemoryRouter>
);

export default {
  title: 'Components/Banner',
  component: Banner,
  decorators: [withMemoryRouter],
};

const baseArgs = {
  title: 'Helping young people stay connected',
  description:
    'Use the Little World community to keep conversations going and discover new activities together.',
  textColor: '#ffffff',
  primaryCtaText: 'Open dashboard',
  primaryCtaUrl: '/dashboard',
  secondaryCtaText: 'Learn more',
  secondaryCtaUrl: '/learn-more',
  image:
    'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80',
  imageAlt: 'Parent and child smiling together',
};

export const Small = args => <Banner {...args} />;
Small.args = {
  ...baseArgs,
  type: BannerTypes.Small,
  background: '#5d66ef',
  primaryCtaHasBorder: true,
};

export const Large = args => <Banner {...args} />;
Large.args = {
  ...baseArgs,
  type: BannerTypes.Large,
  background:
    'linear-gradient(135deg, rgba(85,81,219,1) 0%, rgba(94,178,220,1) 100%)',
  primaryCtaHasBorder: false,
};
