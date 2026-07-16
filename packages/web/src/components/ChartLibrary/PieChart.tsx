import React from 'react';
import type { ChartBaseProps } from '@a-little-world/little-world-design-system-core';
import { useChartWidth } from './useChartWidth';

const DEFAULT_COLORS = [
  '#6366F1',
  '#10B981',
  '#F59E0B',
  '#EF4444',
  '#3B82F6',
  '#8B5CF6',
];

const polarToCartesian = (
  cx: number,
  cy: number,
  r: number,
  angleDeg: number,
) => {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
};

const slicePath = (
  cx: number,
  cy: number,
  r: number,
  start: number,
  end: number,
) => {
  const s = polarToCartesian(cx, cy, r, start);
  const e = polarToCartesian(cx, cy, r, end);
  const large = end - start > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y} Z`;
};

const PieChart: React.FC<ChartBaseProps> = ({
  data,
  title,
  width: propWidth,
  height = 260,
  showLegend = true,
  className,
}) => {
  const { ref, width } = useChartWidth(propWidth);
  const rawTotal = data.reduce((s, d) => s + d.value, 0);
  const total = rawTotal || 1;
  const cx = width / 2;
  const cy = height / 2;
  const r = Math.min(cx, cy) - 20;

  let cursor = 0;
  const slices = data.map((d, i) => {
    const angle = (d.value / total) * 360;
    const isFull = angle >= 360;
    const path = isFull ? null : slicePath(cx, cy, r, cursor, cursor + angle);
    cursor += angle;
    return {
      ...d,
      path,
      isFull,
      color: d.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length],
    };
  });

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
        {rawTotal === 0 ? (
          <circle cx={cx} cy={cy} r={r} fill="#E5E7EB" />
        ) : (
          slices.map(s =>
            s.isFull ? (
              <circle key={s.label} cx={cx} cy={cy} r={r} fill={s.color}>
                <title>{`${s.label}: ${s.value}`}</title>
              </circle>
            ) : (
              <path key={s.label} d={s.path ?? ''} fill={s.color}>
                <title>{`${s.label}: ${s.value}`}</title>
              </path>
            ),
          )
        )}
      </svg>
      {showLegend && (
        <div
          style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}
        >
          {slices.map(s => (
            <span
              key={s.label}
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
                  borderRadius: '50%',
                  background: s.color,
                }}
              />
              {s.label} ({Math.round((s.value / total) * 100)}%)
            </span>
          ))}
        </div>
      )}
    </figure>
  );
};

export default PieChart;
