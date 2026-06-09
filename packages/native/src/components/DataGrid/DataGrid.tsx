import React from 'react';
import { StyleProp, ViewStyle, View } from 'react-native';
import Text from '../Text/Text';

export interface DataGridColumn {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string | number;
  render?: (value: any, row: any, rowIndex: number) => React.ReactNode;
}

export type DataGridProps = {
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
  style?: StyleProp<ViewStyle>;
};

const DataGrid: React.FC<DataGridProps> = ({
  columns,
  data,
  loading,
  style,
}) => {
  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={style}>
      <View style={{ flexDirection: 'row', borderBottomWidth: 1 }}>
        {columns.map((col) => (
          <Text
            key={col.key}
            style={{ flex: 1, padding: 8, fontWeight: 'bold' }}
          >
            {col.label}
          </Text>
        ))}
      </View>
      {data.map((row, rowIdx) => (
        <View key={rowIdx} style={{ flexDirection: 'row', borderBottomWidth: 1 }}>
          {columns.map((col) => (
            <Text
              key={`${rowIdx}-${col.key}`}
              style={{ flex: 1, padding: 8 }}
            >
              {col.render
                ? col.render(row[col.key], row, rowIdx)
                : (row[col.key] as any)}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
};

export default DataGrid;
