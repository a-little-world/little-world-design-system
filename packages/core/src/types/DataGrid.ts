import { ReactNode } from 'react';

export interface DataGridColumn {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string | number;
  render?: (value: any, row: any, rowIndex: number) => ReactNode;
}

export interface DataGridBaseProps {
  columns: DataGridColumn[];
  data: any[];
  paginated?: boolean;
  pageSize?: number;
  sortable?: boolean;
  selectable?: boolean;
  onRowSelect?: (rowIndex: number, row: any) => void;
  className?: string;
  loading?: boolean;
  rowClassName?: (row: any, rowIndex: number) => string;
}

// Alias
export type TableBaseProps = DataGridBaseProps;
