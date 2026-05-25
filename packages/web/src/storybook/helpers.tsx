import { MemoryRouter } from 'react-router-dom';
import React from 'react';
// `Link` with `to` needs a router. Avoid `withRouter` from storybook-addon-remix-react-router:
// it pulls `useSearchParams` from `react-router`, which does not export that hook in RR v6.
export const withMemoryRouter = (Story: React.FC) => (
  <MemoryRouter initialEntries={['/']}>
    <Story />
  </MemoryRouter>
);
