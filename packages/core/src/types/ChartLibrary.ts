export type ChartType = 'line' | 'bar' | 'pie' | 'area' | 'scatter' | 'radar';

export interface ChartDataPoint {
  label: string;
  value: number;
  [key: string]: any;
}

export interface ChartBaseProps {
  type: ChartType;
  data: ChartDataPoint[];
  title?: string;
  width?: string | number;
  height?: string | number;
  colors?: string[];
  legend?: boolean;
  tooltip?: boolean;
  responsive?: boolean;
  className?: string;
  customOptions?: any;
}
