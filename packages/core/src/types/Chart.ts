export interface DataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface ChartBaseProps {
  data: DataPoint[];
  title?: string;
  width?: number;
  height?: number;
  className?: string;
  showLegend?: boolean;
  showValues?: boolean;
}
