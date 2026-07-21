import { ReactNode } from 'react';

export type SortDirection = 'asc' | 'desc' | null;

export interface Column<T = Record<string, unknown>> {
  key: string;
  header: ReactNode;
  accessor: (row: T) => ReactNode;
  sortValue?: (row: T) => string | number;
  sortable?: boolean;
  width?: string;
}

export interface TableProps<T = Record<string, unknown>> {
  columns: Column<T>[];
  data: T[];
  caption?: string;
  emptyMessage?: string;
  loading?: boolean;
  onRowClick?: (row: T, index: number) => void;
  rowKey: (row: T) => string | number;
}
