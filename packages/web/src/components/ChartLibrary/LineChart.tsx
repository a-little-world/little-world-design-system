import React from 'react';
import type { ChartBaseProps } from './types';

const DEFAULT_COLOR = '#6366F1';

const LineChart: React.FC<ChartBaseProps> = ({
  data,
  title,
  width = 400,
  height = 260,
  showValues = false,
  className,
}) => {
  const max = Math.max(...data.map((d) => d.value), 1);
  const padX = 30;
  const padY = 20;
  const innerW = width - padX * 2;
  const innerH = height - padY * 2 - 20;

  const points = data.map((d, i) => ({
    x: padX + (i / Math.max(data.length - 1, 1)) * innerW,
    y: padY + innerH - (d.value / max) * innerH,
    label: d.label,
    value: d.value,
  }));

  const polyline = points.map((p) => `${p.x},${p.y}`).join(' ');

  return (
    <figure className={className} aria-label={title} style={{ margin: 0 }}>
      {title && <figcaption style={{ textAlign: 'center', marginBottom: 8 }}>{title}</figcaption>}
      <svg width={width} height={height} role="img" aria-label={title}>
        <polyline
          points={polyline}
          fill="none"
          stroke={DEFAULT_COLOR}
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {points.map((p) => (
          <g key={p.label}>
            <circle cx={p.x} cy={p.y} r={4} fill={DEFAULT_COLOR} />
            <text x={p.x} y={height - 6} textAnchor="middle" fontSize={11} fill="#6B7280">
              {p.label}
            </text>
            {showValues && (
              <text x={p.x} y={p.y - 8} textAnchor="middle" fontSize={11} fill="#374151">
                {p.value}
              </text>
            )}
          </g>
        ))}
      </svg>
    </figure>
  );
};

export default LineChart;
