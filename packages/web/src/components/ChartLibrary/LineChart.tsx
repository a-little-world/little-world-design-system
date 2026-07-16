import React from 'react';
import type { ChartBaseProps } from '@a-little-world/little-world-design-system-core';
import { useChartWidth } from './useChartWidth';
import { yAxisTicks, formatTickValue } from './chartUtils';

const DEFAULT_COLOR = '#6366F1';

const PAD_LEFT = 44;
const PAD_RIGHT = 15;
const PAD_TOP = 20;
const PAD_BOTTOM = 40;

const LineChart: React.FC<ChartBaseProps> = ({
  data,
  title,
  width: propWidth,
  height = 260,
  showValues = false,
  showLegend = true,
  className,
}) => {
  const { ref, width } = useChartWidth(propWidth);
  const max = data.reduce((m, d) => Math.max(m, d.value), 1);
  const { niceMax, ticks } = yAxisTicks(max);

  const innerW = width - PAD_LEFT - PAD_RIGHT;
  const innerH = height - PAD_TOP - PAD_BOTTOM;

  const points = data.map((d, i) => ({
    x: PAD_LEFT + (i / Math.max(data.length - 1, 1)) * innerW,
    y: PAD_TOP + innerH - (d.value / niceMax) * innerH,
    label: d.label,
    value: d.value,
  }));

  const polyline = points.map(p => `${p.x},${p.y}`).join(' ');

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
          const ty = PAD_TOP + innerH - (tick / niceMax) * innerH;
          return (
            <g key={tick}>
              <line
                x1={PAD_LEFT}
                x2={PAD_LEFT + innerW}
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
          y1={PAD_TOP}
          y2={PAD_TOP + innerH}
          stroke="#D1D5DB"
          strokeWidth={1}
        />

        {/* line + dots */}
        <polyline
          points={polyline}
          fill="none"
          stroke={DEFAULT_COLOR}
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {points.map(p => (
          <g key={p.label}>
            <circle cx={p.x} cy={p.y} r={4} fill={DEFAULT_COLOR} />
            <text
              x={p.x}
              y={height - 6}
              textAnchor="middle"
              fontSize={11}
              fill="#6B7280"
            >
              {p.label}
            </text>
            {showValues && (
              <text
                x={p.x}
                y={p.y - 8}
                textAnchor="middle"
                fontSize={11}
                fill="#374151"
              >
                {p.value}
              </text>
            )}
          </g>
        ))}
      </svg>
      {showLegend && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            marginTop: 8,
          }}
        >
          {data.map(d => (
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
                  width: 12,
                  height: 3,
                  borderRadius: 2,
                  background: d.color ?? DEFAULT_COLOR,
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

export default LineChart;
