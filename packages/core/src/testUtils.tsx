// @ts-nocheck
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/dom/node_modules/pretty-format';
import { render as defaultRender, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { themes } from './theme';

function render(ui, { wrapper, router, mocks = [], ...options } = {}) {
  if (!wrapper) {
    // eslint-disable-next-line react/display-name
    wrapper = ({ children }) => (
      <ThemeProvider theme={themes.light}>{children}</ThemeProvider>
    );
  }

  return defaultRender(ui, {
    wrapper,
    ...options,
  });
}

function renderWithUser(jsx, options?): any {
  return {
    user: userEvent.setup(),
    ...render(jsx, options),
  };
}

// re-export everything
export * from '@testing-library/react';
export { render, renderWithUser };
