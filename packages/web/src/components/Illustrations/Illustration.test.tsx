import React from 'react';

import { render, screen } from '../../testUtils';
import { MatchSearchingImage } from './index';

const svgIn = (container: HTMLElement) =>
  container.querySelector('svg') as SVGSVGElement;

test('a labelled illustration is an image with that accessible name', () => {
  render(<MatchSearchingImage label="Call" />);

  expect(screen.getByRole('img', { name: 'Call' })).toBeInTheDocument();
  expect(document.getElementById('Call')).toBeNull();
});

test('an illustration without a label is decorative', () => {
  const { container } = render(<MatchSearchingImage />);

  expect(svgIn(container)).toHaveAttribute('aria-hidden', 'true');
  expect(svgIn(container)).not.toHaveAttribute('aria-label');
  expect(screen.queryByRole('img')).not.toBeInTheDocument();
});

test('a blank illustration label is decorative', () => {
  const { container } = render(<MatchSearchingImage label="" />);

  expect(svgIn(container)).toHaveAttribute('aria-hidden', 'true');
  expect(screen.queryByRole('img')).not.toBeInTheDocument();
});

test('a visible illustration label is a caption and the svg is hidden', () => {
  const { container } = render(
    <MatchSearchingImage label="Call" labelVisible />,
  );
  const caption = screen.getByText('Call');

  expect(caption).toBeVisible();
  expect(caption).not.toHaveAttribute('id');
  expect(svgIn(container)).toHaveAttribute('aria-hidden', 'true');
});

test("a caller's aria-label and aria-hidden reach the illustration svg", () => {
  const { container: labelled } = render(
    <MatchSearchingImage aria-label="Phone" />,
  );
  expect(svgIn(labelled)).toHaveAttribute('aria-label', 'Phone');
  expect(screen.getByRole('img', { name: 'Phone' })).toBeInTheDocument();

  const { container: hidden } = render(
    <MatchSearchingImage label="Call" aria-hidden />,
  );
  expect(svgIn(hidden)).toHaveAttribute('aria-hidden', 'true');
});

test('non-svg illustration props do not produce unknown DOM prop warnings', () => {
  const error = jest.spyOn(console, 'error').mockImplementation(() => {});

  const { container } = render(
    <MatchSearchingImage
      label="Call"
      circular
      backgroundColor="#fff"
      borderColor="#000"
      size={32}
    />,
  );

  const warnings = error.mock.calls
    .map(call => call.map(part => String(part)).join(' '))
    .filter(message =>
      /does not recognize|non-boolean attribute|unknown prop/i.test(message),
    );

  expect(warnings).toEqual([]);
  expect(svgIn(container).hasAttribute('backgroundColor')).toBe(false);
  expect(svgIn(container).hasAttribute('circular')).toBe(false);
  error.mockRestore();
});
