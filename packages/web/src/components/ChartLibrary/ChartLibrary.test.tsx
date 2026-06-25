// @ts-nocheck
import React from 'react';
import { render, screen } from '../../testUtils';
import { BarChart, LineChart, PieChart } from './index';

const data = [
  { label: 'A', value: 10 },
  { label: 'B', value: 20 },
  { label: 'C', value: 30 },
];

describe('BarChart', () => {
  test('renders an SVG', () => {
    const { container } = render(<BarChart data={data} title="Bar test" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  test('renders label text', () => {
    render(<BarChart data={data} title="Bar test" />);
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
  });

  test('shows title', () => {
    render(<BarChart data={data} title="My Bar Chart" />);
    expect(screen.getByText('My Bar Chart')).toBeInTheDocument();
  });
});

describe('LineChart', () => {
  test('renders an SVG', () => {
    const { container } = render(<LineChart data={data} title="Line test" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  test('renders a polyline', () => {
    const { container } = render(<LineChart data={data} />);
    expect(container.querySelector('polyline')).toBeInTheDocument();
  });
});

describe('PieChart', () => {
  test('renders an SVG', () => {
    const { container } = render(<PieChart data={data} title="Pie test" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  test('renders one path per data point', () => {
    const { container } = render(<PieChart data={data} />);
    const paths = container.querySelectorAll('path');
    expect(paths.length).toBe(data.length);
  });

  test('shows legend when showLegend is true', () => {
    render(<PieChart data={data} showLegend />);
    expect(screen.getByText(/A/)).toBeInTheDocument();
  });
});
