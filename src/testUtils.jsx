import '@testing-library/jest-dom/extend-expect';
import { render as defaultRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

function render(ui, { wrapper, router, mocks = [], ...options } = {}) {
  if (!wrapper) {
    // eslint-disable-next-line react/display-name
    wrapper = ({ children }) => children;
  }

  return defaultRender(ui, {
    wrapper,
    ...options,
  });
}

function renderWithUser(jsx, options) {
  return {
    user: userEvent.setup(),
    ...render(jsx, options),
  };
}

// re-export everything
export * from '@testing-library/react';
export { render, renderWithUser };
