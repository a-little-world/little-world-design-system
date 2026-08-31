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

test('Icon should display a number in the center when displayNumber is provided', () => {
  render(
    <Icon label="calendar" displayNumber={15} height={32} width={32}>
      <svg data-testid="svg" />
    </Icon>,
  );

  expect(screen.getByText('15')).toBeInTheDocument();
  expect(screen.getByTestId('svg')).toBeInTheDocument();
});

test('Icon should display zero when displayNumber is 0', () => {
  render(
    <Icon label="count" displayNumber={0}>
      <svg data-testid="svg" />
    </Icon>,
  );

  expect(screen.getByText('0')).toBeInTheDocument();
});

test('Icon should not display a number when displayNumber is omitted', () => {
  render(
    <Icon label="calendar">
      <svg data-testid="svg" />
    </Icon>,
  );

  expect(screen.queryByText('0')).not.toBeInTheDocument();
});

test('Icon displayNumber should have a circular primary surface background', () => {
  render(
    <Icon label="calendar" displayNumber={8} height={32} width={32}>
      <svg data-testid="svg" />
    </Icon>,
  );

  expect(screen.getByText('8')).toHaveStyle({
    backgroundColor: '#FFFFFF',
    borderRadius: '50%',
  });
});

test('Icon displayNumber can be offset with displayNumberTop and displayNumberRight', () => {
  render(
    <Icon
      label="calendar"
      displayNumber={8}
      displayNumberTop={4}
      displayNumberRight={6}
      height={32}
      width={32}
    >
      <svg data-testid="svg" />
    </Icon>,
  );

  expect(screen.getByText('8')).toHaveStyle({
    top: '4px',
    right: '6px',
  });
});
