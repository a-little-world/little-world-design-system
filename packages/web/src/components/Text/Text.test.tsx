import React from 'react';

import { render, screen } from '../../testUtils';
import Text from './Text';

test('forwards role onto the element chosen by tag', () => {
  render(
    <Text role="alert" tag="h3">
      Hi
    </Text>,
  );

  const alert = screen.getByRole('alert');
  expect(alert.tagName).toBe('H3');
  expect(alert).toHaveTextContent('Hi');
});

test('forwards aria and data attributes', () => {
  render(
    <Text aria-live="polite" data-testid="greeting">
      Hi
    </Text>,
  );

  const greeting = screen.getByTestId('greeting');
  expect(greeting).toHaveAttribute('aria-live', 'polite');
});

test('does not put color or disableParser on the DOM', () => {
  render(
    <Text color="#ff0000" disableParser>
      Hi
    </Text>,
  );

  const text = screen.getByText('Hi');
  expect(text).not.toHaveAttribute('color');
  expect(text).not.toHaveAttribute('disableParser');
  expect(text).not.toHaveAttribute('disableparser');
});
