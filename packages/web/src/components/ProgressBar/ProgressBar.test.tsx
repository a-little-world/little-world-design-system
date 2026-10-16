import React from 'react';

import {
  calculateProgress,
  getMarkers,
  getScaleLabelSteps,
} from '@a-little-world/little-world-design-system-core';

import { render, screen } from '../../testUtils';
import ProgressBar, { ProgressBarVariations } from './ProgressBar';

describe('getMarkers', () => {
  test('includes every step below max when step does not divide max', () => {
    expect(getMarkers(100, 30).map(m => m.value)).toEqual([30, 60, 90]);
  });

  test('excludes max when step divides max', () => {
    expect(getMarkers(300, 100).map(m => m.value)).toEqual([100, 200]);
  });

  test('does not drop ticks to float drift', () => {
    expect(getMarkers(0.3, 0.1).map(m => m.value)).toEqual([0.1, 0.2]);
  });
});

describe('getScaleLabelSteps', () => {
  test('uses even subdivisions when step divides max', () => {
    expect(getScaleLabelSteps(300, 30)).toEqual({
      base: 150,
      small: 60,
      medium: 30,
    });
  });

  test('labels every step on wide layouts when step does not divide max', () => {
    expect(getScaleLabelSteps(100, 30)).toEqual({
      base: 60,
      small: 30,
      medium: 30,
    });
  });
});

test('calculateProgress clamps to 0–100', () => {
  expect(calculateProgress(10, 12)).toBe(100);
  expect(calculateProgress(10, -1)).toBe(0);
  expect(calculateProgress(0, 5)).toBe(0);
});

describe('basic ProgressBar accessible name', () => {
  test('is labelled by the visible label', () => {
    render(<ProgressBar max={10} value={4} />);
    expect(screen.getByRole('progressbar', { name: '4/10' })).toBeTruthy();
  });

  test('keeps a name when fullWidth hides the label', () => {
    render(<ProgressBar fullWidth max={10} value={4} />);
    expect(screen.queryByText('4/10')).toBeNull();
    expect(screen.getByRole('progressbar', { name: '4/10' })).toBeTruthy();
  });

  test('gives each bar its own label', () => {
    render(
      <>
        <ProgressBar max={10} value={3} />
        <ProgressBar max={10} value={7} />
      </>,
    );
    expect(screen.getByRole('progressbar', { name: '3/10' })).toBeTruthy();
    expect(screen.getByRole('progressbar', { name: '7/10' })).toBeTruthy();
  });

  test('clamps the visible label to 0…max', () => {
    render(
      <>
        <ProgressBar max={10} value={12} />
        <ProgressBar max={10} value={-3} />
      </>,
    );
    expect(screen.getByText('10/10')).toBeTruthy();
    expect(screen.getByText('0/10')).toBeTruthy();
  });

  test('prefers the label prop', () => {
    render(<ProgressBar max={10} value={4} label="Profile steps" />);
    expect(
      screen.getByRole('progressbar', { name: 'Profile steps' }),
    ).toBeTruthy();
  });
});

test('scale ProgressBar clamps value above max', () => {
  render(
    <ProgressBar
      variation={ProgressBarVariations.Scale}
      max={300}
      value={400}
      label="Call minutes"
    />,
  );
  expect(
    screen.getByRole('progressbar', { name: 'Call minutes' }),
  ).toHaveAttribute('aria-valuenow', '300');
});
