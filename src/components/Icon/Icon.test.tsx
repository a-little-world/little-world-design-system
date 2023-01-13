import React from 'react';
import { render, screen } from '../../testUtils';
import Svg, { FACEBOOK } from './Icon';

test('Svg should render correct icon with label', () => {
  const { container } = render(<Svg name={FACEBOOK} />);

  const svg = screen.getByTestId('svg');
  expect(svg).toBeInTheDocument();
  expect(container).toHaveTextContent(FACEBOOK);
});
