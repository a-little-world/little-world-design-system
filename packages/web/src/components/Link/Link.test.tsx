// @ts-nocheck
import React from 'react';

import { render, renderWithUser, screen } from '../../testUtils';
import Link from './Link';

export const MOCK_TEXT = 'Great content';
export const MOCK_SLUG = '/home';

test('Link renders correctly when "href" provided', () => {
  render(<Link href={MOCK_SLUG}>{MOCK_TEXT}</Link>);
  const link = screen.getByRole('link');
  expect(link.textContent).toEqual(MOCK_TEXT);
  expect(link).toHaveAttribute('href', MOCK_SLUG);
});

test('Link on click should call function', async () => {
  const onClick = jest.fn();
  const { user } = renderWithUser(
    <Link href={MOCK_SLUG} onClick={onClick}>
      {MOCK_TEXT}
    </Link>,
  );
  const link = screen.getByRole('link');
  await user.click(link);
  expect(onClick).toHaveBeenCalled();
});
