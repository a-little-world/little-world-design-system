import { useLayoutEffect, useRef, useState } from 'react';

export function useChartWidth(propWidth?: number) {
  const ref = useRef<HTMLElement>(null);
  const [measured, setMeasured] = useState<number | undefined>(undefined);

  useLayoutEffect(() => {
    if (propWidth !== undefined || !ref.current) return;

    const el = ref.current;
    const update = () => setMeasured(el.clientWidth || undefined);
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [propWidth]);

  return {
    ref,
    width: propWidth ?? measured ?? 400,
  };
}
