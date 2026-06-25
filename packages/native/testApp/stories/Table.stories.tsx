import React, { useState } from 'react';
import { Text, View } from 'react-native';

import {
  DataGrid,
  Table,
} from '@a-little-world/little-world-design-system-native';

export default {
  component: Table,
  title: 'Components/Table',
};

type Person = {
  id: string;
  name: string;
  role: string;
  status: string;
};

const COLUMNS = [
  { key: 'name' as const, header: 'Name', flex: 2 },
  { key: 'role' as const, header: 'Role', flex: 2 },
  { key: 'status' as const, header: 'Status', flex: 1 },
];

const DATA: Person[] = [
  { id: '1', name: 'Alice Johnson', role: 'Engineer', status: 'Active' },
  { id: '2', name: 'Bob Smith', role: 'Designer', status: 'Active' },
  { id: '3', name: 'Carol White', role: 'Manager', status: 'Away' },
  { id: '4', name: 'David Lee', role: 'Engineer', status: 'Inactive' },
];

export const Default = () => (
  <Table<Person> columns={COLUMNS} data={DATA} />
);

export const Striped = () => (
  <Table<Person> columns={COLUMNS} data={DATA} striped />
);

export const NoBorder = () => (
  <Table<Person> columns={COLUMNS} data={DATA} showBorder={false} />
);

export const WithRowPress = () => {
  const [lastPressed, setLastPressed] = useState<string | null>(null);
  return (
    <View style={{ gap: 12 }}>
      <Table<Person>
        columns={COLUMNS}
        data={DATA}
        striped
        onRowPress={row => setLastPressed(row.name)}
      />
      <Text style={{ fontSize: 14 }}>
        Last tapped:{' '}
        <Text style={{ fontWeight: 'bold' }}>{lastPressed ?? '—'}</Text>
      </Text>
    </View>
  );
};

export const Empty = () => (
  <Table<Person>
    columns={COLUMNS}
    data={[]}
    emptyText="No team members found."
  />
);

export const FixedColumnWidths = () => (
  <Table<Person>
    columns={[
      { key: 'name', header: 'Name', width: 160 },
      { key: 'role', header: 'Role', width: 120 },
      { key: 'status', header: 'Status', width: 80 },
    ]}
    data={DATA}
  />
);

export const DataGridAlias = () => (
  <DataGrid<Person>
    columns={COLUMNS}
    data={DATA}
    striped
  />
);
