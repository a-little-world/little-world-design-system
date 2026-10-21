// @ts-nocheck
import React, { ReactNode } from 'react';
import '@testing-library/jest-dom';
import {
  render as defaultRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';
import { MemoryRouter, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { themes } from './theme';

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  wrapper?: React.ComponentType<{ children: ReactNode }>;
  router?: unknown;
  mocks?: unknown[];
}

function render(
  ui: ReactNode,
  {
    wrapper: CustomWrapper,
    router,
    mocks = [],
    ...options
  }: CustomRenderOptions = {},
): RenderResult {
  const Wrapper =
    CustomWrapper ||
    (({ children }: { children: ReactNode }) => (
      <ThemeProvider theme={themes.light}>{children}</ThemeProvider>
    ));

  return defaultRender(ui, { wrapper: Wrapper, ...options });
}

function renderWithUser(
  ui: ReactNode,
  options?: CustomRenderOptions,
): RenderResult & { user: UserEvent } {
  return {
    user: userEvent.setup(),
    ...render(ui, options),
  };
}

const LocationDisplay = () => {
  const { pathname, search, hash } = useLocation();
  return <div data-testid="location">{pathname + search + hash}</div>;
};

function TestRouter({
  children,
  initialPath = '/',
}: {
  children: ReactNode;
  initialPath?: string;
}) {
  return (
    <MemoryRouter
      initialEntries={[initialPath]}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      {children}
      <LocationDisplay />
    </MemoryRouter>
  );
}

// Re-export everything
export * from '@testing-library/react';
export { render, renderWithUser, TestRouter };
