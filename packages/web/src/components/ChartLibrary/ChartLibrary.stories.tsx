import React from 'react';
import { BarChart, LineChart, PieChart } from './index';

export default {
  title: 'Components/ChartLibrary',
};

const SALES_DATA = [
  { label: 'Jan', value: 42 },
  { label: 'Feb', value: 78 },
  { label: 'Mar', value: 55 },
  { label: 'Apr', value: 91 },
  { label: 'May', value: 63 },
  { label: 'Jun', value: 110 },
];

const CATEGORY_DATA = [
  { label: 'Design', value: 35 },
  { label: 'Dev', value: 50 },
  { label: 'QA', value: 15 },
];

export const Bar = () => (
  <BarChart data={SALES_DATA} title="Monthly Sales" showValues />
);

export const BarWithLegend = () => (
  <BarChart data={CATEGORY_DATA} title="Team Distribution" showLegend />
);

export const Line = () => (
  <LineChart data={SALES_DATA} title="Sales Trend" showValues />
);

export const Pie = () => (
  <PieChart data={CATEGORY_DATA} title="Team Distribution" showLegend />
);

export const AllCharts = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
    <BarChart data={SALES_DATA} title="Bar Chart" />
    <LineChart data={SALES_DATA} title="Line Chart" />
    <PieChart data={CATEGORY_DATA} title="Pie Chart" />
  </div>
);
