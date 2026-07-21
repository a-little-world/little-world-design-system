export function yAxisTicks(
  maxVal: number,
  tickCount = 4,
): { niceMax: number; ticks: number[] } {
  if (maxVal <= 0) {
    return {
      niceMax: tickCount,
      ticks: Array.from({ length: tickCount + 1 }, (_, i) => i),
    };
  }
  const rough = maxVal / tickCount;
  const magnitude = Math.pow(10, Math.floor(Math.log10(rough)));
  const normalized = rough / magnitude;
  let niceFactor: number;
  if (normalized <= 1.5) niceFactor = 1;
  else if (normalized <= 3) niceFactor = 2;
  else if (normalized <= 7) niceFactor = 5;
  else niceFactor = 10;
  const step = niceFactor * magnitude;
  const niceMax = Math.ceil(maxVal / step) * step;
  const ticks = Array.from(
    { length: Math.round(niceMax / step) + 1 },
    (_, i) => i * step,
  );
  return { niceMax, ticks };
}

export function formatTickValue(v: number): string {
  if (v >= 1_000_000) return `${v / 1_000_000}M`;
  if (v >= 1_000) return `${v / 1_000}k`;
  return String(v);
}
