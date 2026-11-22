import React from 'react';

import { render, screen } from '../../testUtils';
import Dialog from './Dialog';

test('Dialog uses its title as the dialog name', () => {
  render(
    <Dialog open onClose={jest.fn()} title="Delete note">
      <p>This cannot be undone.</p>
    </Dialog>,
  );

  expect(
    screen.getByRole('dialog', { name: 'Delete note' }),
  ).toBeInTheDocument();
});

test('an explicit Dialog label wins over the title', () => {
  render(
    <Dialog
      open
      onClose={jest.fn()}
      title="Delete note"
      label="Confirm delete"
    >
      <p>This cannot be undone.</p>
    </Dialog>,
  );

  expect(
    screen.getByRole('dialog', { name: 'Confirm delete' }),
  ).toBeInTheDocument();
});

test('Dialog closeLabel names the close button, with a fallback when omitted', () => {
  const { rerender } = render(
    <Dialog open onClose={jest.fn()} title="Delete note">
      <p>Body</p>
    </Dialog>,
  );

  expect(
    screen.getByRole('button', { name: 'dialog close button' }),
  ).toBeInTheDocument();

  rerender(
    <Dialog open onClose={jest.fn()} title="Delete note" closeLabel="Schließen">
      <p>Body</p>
    </Dialog>,
  );

  expect(screen.getByRole('button', { name: 'Schließen' })).toBeInTheDocument();
});
