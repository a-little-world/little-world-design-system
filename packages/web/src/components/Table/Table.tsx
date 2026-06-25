import React, { useMemo, useState } from 'react';
import { TableWrapper, StyledTable, TableHead, TableBody, EmptyCell } from './styles';

export type SortDirection = 'asc' | 'desc' | null;

export interface Column<T = Record<string, unknown>> {
  key: string;
  header: React.ReactNode;
  accessor: (row: T) => React.ReactNode;
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

function Table<T = Record<string, unknown>>({
  columns,
  data,
  caption,
  emptyMessage = 'No data available.',
  loading = false,
  onRowClick,
  rowKey,
}: TableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<SortDirection>(null);

  const handleSort = (key: string) => {
    if (sortKey !== key) {
      setSortKey(key);
      setSortDir('asc');
    } else if (sortDir === 'asc') {
      setSortDir('desc');
    } else {
      setSortKey(null);
      setSortDir(null);
    }
  };

  const sortedData = useMemo(() => {
    if (!sortKey || !sortDir) return data;
    const col = columns.find((c) => c.key === sortKey);
    if (!col) return data;
    return [...data].sort((a, b) => {
      const av = col.accessor(a);
      const bv = col.accessor(b);
      const aStr = typeof av === 'string' || typeof av === 'number' ? String(av) : '';
      const bStr = typeof bv === 'string' || typeof bv === 'number' ? String(bv) : '';
      return sortDir === 'asc' ? aStr.localeCompare(bStr) : bStr.localeCompare(aStr);
    });
  }, [data, sortKey, sortDir, columns]);

  return (
    <TableWrapper role="region" aria-label={caption ?? 'Data table'}>
      <StyledTable aria-label={caption}>
        {caption && <caption>{caption}</caption>}
        <TableHead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                style={{ width: col.width }}
                aria-sort={
                  sortKey === col.key
                    ? sortDir === 'asc'
                      ? 'ascending'
                      : 'descending'
                    : undefined
                }
              >
                {col.sortable ? (
                  <button
                    type="button"
                    onClick={() => handleSort(col.key)}
                    aria-label={`Sort by ${col.key}`}
                  >
                    {col.header}
                    {sortKey === col.key && (sortDir === 'asc' ? ' ▲' : ' ▼')}
                  </button>
                ) : (
                  col.header
                )}
              </th>
            ))}
          </tr>
        </TableHead>
        <TableBody>
          {loading ? (
            <tr>
              <EmptyCell colSpan={columns.length} aria-live="polite">
                Loading…
              </EmptyCell>
            </tr>
          ) : sortedData.length === 0 ? (
            <tr>
              <EmptyCell colSpan={columns.length}>{emptyMessage}</EmptyCell>
            </tr>
          ) : (
            sortedData.map((row, i) => (
              <tr
                key={rowKey(row)}
                onClick={() => onRowClick?.(row, i)}
                style={{ cursor: onRowClick ? 'pointer' : undefined }}
                tabIndex={onRowClick ? 0 : undefined}
                onKeyDown={(e) => {
                  if (onRowClick && (e.key === 'Enter' || e.key === ' ')) {
                    onRowClick(row, i);
                  }
                }}
              >
                {columns.map((col) => (
                  <td key={col.key}>{col.accessor(row)}</td>
                ))}
              </tr>
            ))
          )}
        </TableBody>
      </StyledTable>
    </TableWrapper>
  );
}

export default Table;
