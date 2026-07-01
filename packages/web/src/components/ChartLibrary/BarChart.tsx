import React from 'react';
import type { ChartBaseProps } from './types';

const DEFAULT_COLORS = [
  '#6366F1',
  '#10B981',
  '#F59E0B',
  '#EF4444',
  '#3B82F6',
  '#8B5CF6',
];

const BarChart: React.FC<ChartBaseProps> = ({
  data,
  title,
  width = 400,
  height = 260,
  showValues = true,
  showLegend = false,
  className,
}) => {
  const max = data.reduce((m, d) => Math.max(m, d.value), 1);
  const barAreaHeight = height - 40;
  const barWidth = Math.floor((width - 40) / data.length) - 8;

  return (
    <figure className={className} aria-label={title} style={{ margin: 0 }}>
      {title && (
        <figcaption style={{ textAlign: 'center', marginBottom: 8 }}>
          {title}
        </figcaption>
      )}
      <svg width={width} height={height} role="img" aria-label={title}>
        {data.map((d, i) => {
          const barHeight = Math.round((d.value / max) * barAreaHeight);
          const x = 20 + i * (barWidth + 8);
          const y = height - 30 - barHeight;
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
                x={x + barWidth / 2}
                y={height - 12}
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
