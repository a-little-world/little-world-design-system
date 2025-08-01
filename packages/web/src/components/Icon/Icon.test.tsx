// @ts-nocheck
import React from 'react';
import { render, screen } from '../../testUtils';
import { Icon } from './Icon';

test('Icon should render correct icon with label', () => {
  const MOCK_LABEL = 'mock label';
  const SVG_ID = 'svg';

  render(
    <Icon label={MOCK_LABEL}>
      <svg aria-labelledby={MOCK_LABEL} data-testid={SVG_ID} />
    </Icon>,
  );

  const svg = screen.getByTestId('svg');
  const label = screen.getByText(MOCK_LABEL);
  expect(svg).toBeInTheDocument();
  expect(label).toBeInTheDocument();
});
