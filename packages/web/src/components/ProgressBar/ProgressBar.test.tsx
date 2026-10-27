import React from 'react';

import {
  calculateProgress,
  getMarkers,
  getScaleLabelSteps,
} from '@a-little-world/little-world-design-system-core';

import { act, render, screen } from '../../testUtils';
import { getFillLabelPlacement, markerOverlapsFillLabel } from './fillLabel';
import ProgressBar, { ProgressBarVariations } from './ProgressBar';
import { PROGRESS_MOTION_MS } from './ProgressBar.styles';

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

describe('fill label placement', () => {
  const trackWidth = 300;
  const labelWidth = 80;

  test('keeps the label just past the fill below 60%', () => {
    expect(getFillLabelPlacement(50, trackWidth, labelWidth)).toEqual({
      onFill: false,
      startPx: 166,
      endPx: 246,
    });
  });

  test('insets the label 16px from the fill edge once it is inside', () => {
    expect(getFillLabelPlacement(90, trackWidth, labelWidth)).toEqual({
      onFill: true,
      startPx: 174,
      endPx: 254,
    });
  });

  test('uses the roomier side, in its colour, when it fits neither side', () => {
    // 200px track, 55% fill = 110px: too narrow inside, too wide outside.
    const inside = getFillLabelPlacement(55, 200, labelWidth);
    expect(inside.onFill).toBe(true);
    expect(inside.startPx).toBeCloseTo(14);

    // 100px label, 45% fill = 90px: more room on the empty track, so it
    // is clamped to the track end and stays dark.
    const outside = getFillLabelPlacement(45, 200, 100);
    expect(outside.onFill).toBe(false);
    expect(outside.startPx).toBeCloseTo(100);
  });

  test('hides only ticks that cross the label', () => {
    const placement = getFillLabelPlacement(90, trackWidth, labelWidth);

    expect(markerOverlapsFillLabel(50, placement, trackWidth)).toBe(false);
    expect(markerOverlapsFillLabel(60, placement, trackWidth)).toBe(true);
    expect(markerOverlapsFillLabel(80, placement, trackWidth)).toBe(true);
    expect(markerOverlapsFillLabel(90, placement, trackWidth)).toBe(false);
  });
});

const rect = (width: number, height: number): DOMRect =>
  ({
    width,
    height,
    top: 0,
    left: 0,
    right: width,
    bottom: height,
    x: 0,
    y: 0,
    toJSON: () => ({}),
  }) as DOMRect;

describe('scale fill label', () => {
  const originalRect = HTMLElement.prototype.getBoundingClientRect;

  beforeEach(() => {
    HTMLElement.prototype.getBoundingClientRect = function () {
      if (this.dataset.scaleTrack != null) {
        return rect(300, 36);
      }
      if (this.dataset.fillLabel != null) {
        return rect(80, 14);
      }
      return originalRect.call(this);
    };
  });

  afterEach(() => {
    HTMLElement.prototype.getBoundingClientRect = originalRect;
  });

  test('is hidden unless showValueInBar is set', () => {
    render(
      <ProgressBar
        variation={ProgressBarVariations.Scale}
        max={300}
        value={270}
        label="Call minutes"
        endLabel="300 Min"
      />,
    );

    expect(screen.queryByTestId('progress-fill-label')).toBeNull();
    expect(document.querySelector('[data-marker="210"]')).toBeVisible();
  });

  test('renders the value and end label inside the track', () => {
    render(
      <ProgressBar
        variation={ProgressBarVariations.Scale}
        max={300}
        value={270}
        step={30}
        label="Call minutes"
        endLabel="300 Min"
        showValueInBar
      />,
    );

    const fillLabel = screen.getByTestId('progress-fill-label');
    expect(fillLabel).toHaveTextContent('270/ 300 Min');
    expect(fillLabel).toHaveAttribute('aria-hidden', 'true');
  });

  test('hides markers that overlap the label once it shows', () => {
    jest.useFakeTimers();
    render(
      <ProgressBar
        variation={ProgressBarVariations.Scale}
        max={300}
        value={270}
        step={30}
        label="Call minutes"
        endLabel="300 Min"
        showValueInBar
      />,
    );

    // Ticks stay while the fill moves and the label is still hidden.
    expect(document.querySelector('[data-marker="210"]')).toBeVisible();

    act(() => {
      jest.advanceTimersByTime(PROGRESS_MOTION_MS);
    });
    jest.useRealTimers();

    expect(document.querySelector('[data-marker="150"]')).toBeVisible();
    expect(document.querySelector('[data-marker="180"]')).not.toBeVisible();
    expect(document.querySelector('[data-marker="210"]')).not.toBeVisible();
    expect(document.querySelector('[data-marker="240"]')).not.toBeVisible();
    expect(document.querySelector('[data-marker="270"]')).toBeVisible();
  });
});

describe('scale ProgressBar header', () => {
  test('is hidden unless title, showValue, or scoreRest is set', () => {
    render(
      <ProgressBar
        variation={ProgressBarVariations.Scale}
        max={300}
        value={165}
        label="Call minutes"
      />,
    );

    expect(screen.queryByText('Gesprächsminuten')).toBeNull();
    expect(screen.queryByText('165')).toBeNull();
  });

  test('shows the title without the value unless showValue is set', () => {
    render(
      <ProgressBar
        variation={ProgressBarVariations.Scale}
        max={300}
        value={165}
        label="Call minutes"
        title="Gesprächsminuten"
      />,
    );

    expect(screen.getByText('Gesprächsminuten')).toBeTruthy();
    expect(screen.queryByText('165')).toBeNull();
  });

  test('shows the current value when showValue is set', () => {
    render(
      <ProgressBar
        variation={ProgressBarVariations.Scale}
        max={300}
        value={165}
        label="Call minutes"
        showValue
      />,
    );

    expect(screen.getByText('165')).toBeTruthy();
  });

  test('shows scoreRest without the value unless showValue is set', () => {
    render(
      <ProgressBar
        variation={ProgressBarVariations.Scale}
        max={300}
        value={165}
        label="Call minutes"
        scoreRest="von 300 Minuten"
      />,
    );

    expect(screen.getByText('von 300 Minuten')).toBeTruthy();
    expect(screen.queryByText('165')).toBeNull();
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
