import React, { useMemo, useState } from 'react';

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
  stickyHeader?: boolean;
}

function Table<T = Record<string, unknown>>({
  columns,
  data,
  caption,
  emptyMessage = 'No data available.',
  loading = false,
  onRowClick,
  rowKey,
  stickyHeader = false,
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
      const aStr = String(av ?? '');
      const bStr = String(bv ?? '');
      return sortDir === 'asc'
        ? aStr.localeCompare(bStr)
        : bStr.localeCompare(aStr);
    });
  }, [data, sortKey, sortDir, columns]);

  return (
    <div role="region" aria-label={caption ?? 'Data table'} style={{ overflowX: 'auto' }}>
      <table aria-label={caption}>
        {caption && <caption>{caption}</caption>}
        <thead>
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
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={columns.length} aria-live="polite">
                Loading…
              </td>
            </tr>
          ) : sortedData.length === 0 ? (
            <tr>
              <td colSpan={columns.length}>{emptyMessage}</td>
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
        </tbody>
      </table>
    </div>
  );
}

export default Table;
