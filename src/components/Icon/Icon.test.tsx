import React from 'react';
import { render, screen } from '../../testUtils';
import Icon from './Icon';

test('Icon should render correct icon with label', () => {
  const MOCK_LABEL = 'mock label';
  const LABEL_ID = 'svg label';
  const SVG_ID = 'svg';

  render(
    <Icon labelId={LABEL_ID} label={MOCK_LABEL}>
      <svg aria-labelledby={LABEL_ID} data-testid={SVG_ID} />
    </Icon>,
  );

  const svg = screen.getByTestId('svg');
  const label = screen.getByLabelText(MOCK_LABEL);
  expect(svg).toBeInTheDocument();
  expect(label).toBeInTheDocument();
});
