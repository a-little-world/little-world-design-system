import React, { useMemo, useState } from 'react';
import {
  SortDirection,
  Column,
  TableProps,
} from '@a-little-world/little-world-design-system-core';
import {
  TableWrapper,
  StyledTable,
  TableHead,
  TableBody,
  EmptyCell,
} from './styles';

export { SortDirection, Column, TableProps };

function getSortIcon(
  sortKey: string | null,
  sortDir: SortDirection,
  colKey: string,
): string {
  if (sortKey !== colKey) return ' ↕';
  return sortDir === 'asc' ? ' ▲' : ' ▼';
}

function getAriaSortDir(
  sortKey: string | null,
  sortDir: SortDirection,
  colKey: string,
): 'ascending' | 'descending' | undefined {
  if (sortKey !== colKey) return undefined;
  return sortDir === 'asc' ? 'ascending' : 'descending';
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
    const col = columns.find(c => c.key === sortKey);
    if (!col) return data;
    return [...data].sort((a, b) => {
      const av = col.accessor(a);
      const bv = col.accessor(b);
      if (typeof av === 'number' && typeof bv === 'number') {
        return sortDir === 'asc' ? av - bv : bv - av;
      }
      const aStr =
        typeof av === 'string' || typeof av === 'number' ? String(av) : '';
      const bStr =
        typeof bv === 'string' || typeof bv === 'number' ? String(bv) : '';
      return sortDir === 'asc'
        ? aStr.localeCompare(bStr)
        : bStr.localeCompare(aStr);
    });
  }, [data, sortKey, sortDir, columns]);

  const renderBody = () => {
    if (loading) {
      return (
        <tr>
          <EmptyCell colSpan={columns.length} aria-live="polite">
            Loading…
          </EmptyCell>
        </tr>
      );
    }
    if (sortedData.length === 0) {
      return (
        <tr>
          <EmptyCell colSpan={columns.length}>{emptyMessage}</EmptyCell>
        </tr>
      );
    }
    return sortedData.map((row, i) => (
      <tr
        key={rowKey(row)}
        onClick={() => onRowClick?.(row, i)}
        style={{ cursor: onRowClick ? 'pointer' : undefined }}
        tabIndex={onRowClick ? 0 : undefined}
        onKeyDown={e => {
          if (onRowClick && (e.key === 'Enter' || e.key === ' ')) {
            onRowClick(row, i);
          }
        }}
      >
        {columns.map(col => (
          <td key={col.key}>{col.accessor(row)}</td>
        ))}
      </tr>
    ));
  };

  return (
    <TableWrapper role="region" aria-label={caption ?? 'Data table'}>
      <StyledTable aria-label={caption}>
        {caption && <caption>{caption}</caption>}
        <TableHead>
          <tr>
            {columns.map(col => (
              <th
                key={col.key}
                style={{ width: col.width }}
                aria-sort={getAriaSortDir(sortKey, sortDir, col.key)}
              >
                {col.sortable ? (
                  <button
                    type="button"
                    onClick={() => handleSort(col.key)}
                    aria-label={`Sort by ${col.key}`}
                  >
                    {col.header}
                    <span aria-hidden="true">
                      {getSortIcon(sortKey, sortDir, col.key)}
                    </span>
                  </button>
                ) : (
                  col.header
                )}
              </th>
            ))}
          </tr>
        </TableHead>
        <TableBody>{renderBody()}</TableBody>
      </StyledTable>
    </TableWrapper>
  );
}

export default Table;
