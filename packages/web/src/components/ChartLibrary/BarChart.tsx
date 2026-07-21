import React from 'react';
import type { ChartBaseProps } from '@a-little-world/little-world-design-system-core';
import { useChartWidth } from './useChartWidth';
import { yAxisTicks, formatTickValue } from './chartUtils';

const DEFAULT_COLORS = [
  '#6366F1',
  '#10B981',
  '#F59E0B',
  '#EF4444',
  '#3B82F6',
  '#8B5CF6',
];

const PAD_LEFT = 44;
const PAD_RIGHT = 8;
const PAD_TOP = 10;
const PAD_BOTTOM = 30;

const BarChart: React.FC<ChartBaseProps> = ({
  data,
  title,
  width: propWidth,
  height = 260,
  showValues = true,
  showLegend = true,
  className,
}) => {
  const { ref, width } = useChartWidth(propWidth);
  const max = data.reduce((m, d) => Math.max(m, d.value), 0);
  const { niceMax, ticks } = yAxisTicks(max);

  const padTop = showValues ? 22 : PAD_TOP;
  const plotW = width - PAD_LEFT - PAD_RIGHT;
  const plotH = height - padTop - PAD_BOTTOM;
  const slotW = plotW / data.length;
  const barWidth = Math.max(4, Math.floor(slotW * 0.65));

  return (
    <figure
      ref={ref}
      className={className}
      aria-label={title}
      style={{ margin: 0, width: propWidth ?? '100%' }}
    >
      {title && (
        <figcaption style={{ textAlign: 'center', marginBottom: 8 }}>
          {title}
        </figcaption>
      )}
      <svg width={width} height={height} role="img" aria-label={title}>
        {/* grid lines + y-axis ticks */}
        {ticks.map(tick => {
          const ty = padTop + plotH - (tick / niceMax) * plotH;
          return (
            <g key={tick}>
              <line
                x1={PAD_LEFT}
                x2={PAD_LEFT + plotW}
                y1={ty}
                y2={ty}
                stroke="#E5E7EB"
                strokeWidth={1}
              />
              <text
                x={PAD_LEFT - 4}
                y={ty + 4}
                textAnchor="end"
                fontSize={10}
                fill="#6B7280"
              >
                {formatTickValue(tick)}
              </text>
            </g>
          );
        })}

        {/* y-axis line */}
        <line
          x1={PAD_LEFT}
          x2={PAD_LEFT}
          y1={padTop}
          y2={padTop + plotH}
          stroke="#D1D5DB"
          strokeWidth={1}
        />

        {/* bars */}
        {data.map((d, i) => {
          const barHeight = Math.max(
            0,
            Math.round((d.value / niceMax) * plotH),
          );
          const x = PAD_LEFT + i * slotW + (slotW - barWidth) / 2;
          const y = padTop + plotH - barHeight;
          const color = d.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length];
          return (
            <g key={d.label}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill={color}
                rx={3}
              />
              <text
                x={PAD_LEFT + i * slotW + slotW / 2}
                y={padTop + plotH + 15}
                textAnchor="middle"
                fontSize={11}
                fill="#6B7280"
              >
                {d.label}
              </text>
              {showValues && (
                <text
                  x={x + barWidth / 2}
                  y={y - 4}
                  textAnchor="middle"
                  fontSize={11}
                  fill="#374151"
                >
                  {d.value}
                </text>
              )}
            </g>
          );
        })}
      </svg>
      {showLegend && (
        <div
          style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}
        >
          {data.map((d, i) => (
            <span
              key={d.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                fontSize: 12,
              }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 2,
                  background:
                    d.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length],
                }}
              />
              {d.label}
            </span>
          ))}
        </div>
      )}
    </figure>
  );
};

export default BarChart;
