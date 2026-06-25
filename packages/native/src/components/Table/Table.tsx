import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'styled-components/native';

import Text from '../Text/Text';
import { getTableStyles } from './styles';

export type TableColumn<T> = {
  key: keyof T & string;
  header: string;
  /** Fixed pixel width. When omitted, flex is used instead. */
  width?: number;
  /** Flex proportion relative to other columns (default: 1). Ignored when `width` is set. */
  flex?: number;
};

export type TableProps<T extends Record<string, unknown>> = {
  columns: TableColumn<T>[];
  data: T[];
  /** Called when the user taps a row. */
  onRowPress?: (row: T, index: number) => void;
  /** Alternate background color on odd rows. */
  striped?: boolean;
  /** Render a border around the whole table. */
  showBorder?: boolean;
  /** Message shown when `data` is empty. */
  emptyText?: string;
};

const Table = <T extends Record<string, unknown>>({
  columns,
  data,
  onRowPress,
  striped = false,
  showBorder = true,
  emptyText = 'No data',
}: TableProps<T>) => {
  const theme = useTheme();
  const styles = getTableStyles({ theme, showBorder });

  const cellStyle = (col: TableColumn<T>) =>
    col.width != null
      ? [styles.cell, { width: col.width }]
      : [styles.cell, { flex: col.flex ?? 1 }];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
      <View style={styles.table}>
        <View style={styles.headerRow}>
          {columns.map(col => (
            <View key={col.key} style={cellStyle(col)}>
              <Text bold>{col.header}</Text>
            </View>
          ))}
        </View>

        {data.length === 0 ? (
          <View style={styles.emptyCell}>
            <Text color={theme.color.text.secondary}>{emptyText}</Text>
          </View>
        ) : (
          data.map((row, rowIndex) => {
            const isLast = rowIndex === data.length - 1;
            const isStriped = striped && rowIndex % 2 === 1;

            const rowStyle = [
              styles.dataRow,
              isLast && styles.dataRowLast,
              isStriped && styles.stripedRow,
            ];

            const cells = columns.map(col => (
              <View key={col.key} style={cellStyle(col)}>
                <Text>{String(row[col.key] ?? '')}</Text>
              </View>
            ));

            if (onRowPress) {
              return (
                <TouchableOpacity
                  key={rowIndex}
                  onPress={() => onRowPress(row, rowIndex)}
                  activeOpacity={0.7}
                >
                  <View style={rowStyle}>{cells}</View>
                </TouchableOpacity>
              );
            }

            return (
              <View key={rowIndex} style={rowStyle}>
                {cells}
              </View>
            );
          })
        )}
      </View>
    </ScrollView>
  );
};

/**
 * @deprecated Use Table instead. DataGrid is kept as a semantic alias for
 * structured, queryable data contexts; both render identically.
 */
const DataGrid = Table;

export default Table;
export { DataGrid };
export type { TableProps as DataGridProps };
