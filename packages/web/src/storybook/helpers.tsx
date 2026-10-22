import { MemoryRouter, useLocation } from 'react-router-dom';
import React from 'react';

const RouterLocation = () => {
  const { pathname, search, hash } = useLocation();
  return <p>Router location: {pathname + search + hash}</p>;
};

// `Link` with an internal `href` needs a router. Avoid `withRouter` from storybook-addon-remix-react-router:
// it pulls `useSearchParams` from `react-router`, which does not export that hook in RR v6.
export const withMemoryRouter = (Story: React.FC) => (
  <MemoryRouter initialEntries={['/']}>
    <Story />
    <RouterLocation />
  </MemoryRouter>
);
