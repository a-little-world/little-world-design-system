import React from 'react';
import { Gradients } from '@a-little-world/little-world-design-system-core';

import { render, screen } from '../../testUtils';
import { Icon } from './Icon';
import { PhoneIcon } from './index';

const svgIn = (container: HTMLElement) =>
  container.querySelector('svg') as SVGSVGElement;

const unknownPropWarnings = (calls: unknown[][]) =>
  calls
    .map(call => call.map(part => String(part)).join(' '))
    .filter(message =>
      /does not recognize|non-boolean attribute|unknown prop/i.test(message),
    );

const expectDistinctGradients = (container: HTMLElement) => {
  const svgs = Array.from(container.querySelectorAll('svg'));
  expect(svgs).toHaveLength(2);

  const ids = svgs.map(svg => {
    const gradient = svg.querySelector('linearGradient');
    const id = gradient?.getAttribute('id');
    expect(id).toEqual(expect.stringMatching(/^[A-Za-z0-9_-]+$/));
    expect(id).not.toContain('Call');

    const fills = Array.from(svg.querySelectorAll('*'))
      .map(node => node.getAttribute('fill'))
      .filter((fill): fill is string => Boolean(fill));
    expect(fills).toContain(`url(#${id})`);

    return id;
  });

  expect(ids[0]).not.toBe(ids[1]);
};

test('a labelled icon is an image with that accessible name', () => {
  const { container } = render(<PhoneIcon label="Call" />);
  const svg = screen.getByRole('img', { name: 'Call' });

  expect(svg).toBe(svgIn(container));
  expect(svg).toHaveAttribute('role', 'img');
  expect(svg).toHaveAttribute('aria-label', 'Call');
  expect(svg).not.toHaveAttribute('aria-labelledby');
  expect(document.getElementById('Call')).toBeNull();
});

test('an icon without a label is decorative', () => {
  const { container } = render(<PhoneIcon />);
  const svg = svgIn(container);

  expect(svg).toHaveAttribute('aria-hidden', 'true');
  expect(svg).not.toHaveAttribute('aria-label');
  expect(svg).not.toHaveAttribute('aria-labelledby');
  expect(screen.queryByRole('img')).not.toBeInTheDocument();
});

test.each(['', '   '])('a blank label (%j) is treated as decorative', label => {
  const { container } = render(<PhoneIcon label={label} />);
  const svg = svgIn(container);

  expect(svg).toHaveAttribute('aria-hidden', 'true');
  expect(svg).not.toHaveAttribute('aria-label');
  expect(screen.queryByRole('img')).not.toBeInTheDocument();
});

test('a visible label is a caption and the svg is hidden', () => {
  const { container } = render(<PhoneIcon label="Call" labelVisible />);
  const caption = screen.getByText('Call');

  expect(caption).toBeVisible();
  expect(caption).not.toHaveAttribute('id');
  expect(svgIn(container)).toHaveAttribute('aria-hidden', 'true');
  expect(svgIn(container)).not.toHaveAttribute('aria-label');
  expect(screen.queryByRole('img')).not.toBeInTheDocument();
});

test('icons that share a label still get their own gradient', () => {
  const { container } = render(
    <>
      <PhoneIcon label="Call" gradient={Gradients.Blue} />
      <PhoneIcon label="Call" gradient={Gradients.Blue} />
    </>,
  );

  expectDistinctGradients(container);
});

test('gradient icons without a label still get their own gradient', () => {
  const { container } = render(
    <>
      <PhoneIcon gradient={Gradients.Blue} />
      <PhoneIcon gradient={Gradients.Blue} />
    </>,
  );

  expectDistinctGradients(container);
});

test("a caller's aria-label reaches the svg and wins over label", () => {
  const { container } = render(<PhoneIcon label="Call" aria-label="Phone" />);
  const svg = svgIn(container);

  expect(svg).toHaveAttribute('aria-label', 'Phone');
  expect(screen.getByRole('img', { name: 'Phone' })).toBe(svg);
  expect(screen.queryByRole('img', { name: 'Call' })).not.toBeInTheDocument();
});

test("a caller's aria-hidden reaches the svg", () => {
  const { container } = render(<PhoneIcon label="Call" aria-hidden />);
  const svg = svgIn(container);

  expect(svg).toHaveAttribute('aria-hidden', 'true');
  expect(svg).not.toHaveAttribute('aria-label');
  expect(screen.queryByRole('img')).not.toBeInTheDocument();
});

test('non-svg props do not produce unknown DOM prop warnings', () => {
  const error = jest.spyOn(console, 'error').mockImplementation(() => {});

  const { container } = render(
    <PhoneIcon
      label="Call"
      circular
      backgroundColor="#fff"
      borderColor="#000"
      labelTop="40px"
      size={32}
    />,
  );

  expect(unknownPropWarnings(error.mock.calls)).toEqual([]);
  expect(svgIn(container).hasAttribute('backgroundColor')).toBe(false);
  expect(svgIn(container).hasAttribute('circular')).toBe(false);
  error.mockRestore();
});

test('Icon renders a visible caption without an id', () => {
  render(
    <Icon label="mock label" labelVisible>
      <svg data-testid="svg" />
    </Icon>,
  );

  const caption = screen.getByText('mock label');
  expect(screen.getByTestId('svg')).toBeInTheDocument();
  expect(caption).toBeVisible();
  expect(caption).not.toHaveAttribute('id');
});

test('Icon does not render a hidden label', () => {
  render(
    <Icon label="mock label">
      <svg data-testid="svg" />
    </Icon>,
  );

  expect(screen.getByTestId('svg')).toBeInTheDocument();
  expect(screen.queryByText('mock label')).not.toBeInTheDocument();
  expect(document.getElementById('mock label')).toBeNull();
});

test("a caller's aria-labelledby reaches the svg and wins over label", () => {
  const { container } = render(
    <>
      <span id="phone-name">Phone</span>
      <PhoneIcon label="Call" aria-labelledby="phone-name" />
    </>,
  );
  const svg = svgIn(container);

  expect(svg).toHaveAttribute('aria-labelledby', 'phone-name');
  expect(svg).not.toHaveAttribute('aria-label');
  expect(svg).not.toHaveAttribute('aria-hidden');
  expect(screen.getByRole('img', { name: 'Phone' })).toBe(svg);
});

test('aria-labelledby alone names an icon without a label', () => {
  const { container } = render(
    <>
      <span id="phone-name">Phone</span>
      <PhoneIcon aria-labelledby="phone-name" />
    </>,
  );

  expect(screen.getByRole('img', { name: 'Phone' })).toBe(svgIn(container));
});
