// @ts-nocheck
import React from 'react';
import { renderWithUser, screen } from '../../testUtils';
import StarRating from './StarRating';

const getStarShape = (starNumber: number) =>
  screen
    .getByRole('radio', { name: `${starNumber} stars` })
    .querySelector('path');

test('StarRating registers clicks on the star shape of an unfocused star', async () => {
  const onChangeMock = jest.fn();
  const { user } = renderWithUser(<StarRating onChange={onChangeMock} />);

  await user.click(getStarShape(3));
  expect(onChangeMock).toHaveBeenLastCalledWith(3);

  await user.click(getStarShape(5));
  expect(onChangeMock).toHaveBeenLastCalledWith(5);

  expect(screen.getByRole('radio', { name: '5 stars' })).toHaveAttribute(
    'aria-checked',
    'true',
  );
});
