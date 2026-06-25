import React from 'react';
import Table, { Column } from './Table';

export default {
  component: Table,
  title: 'Components/Table',
};

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

const USERS: User[] = [
  { id: 1, name: 'Alice Martin', email: 'alice@example.com', role: 'Admin', status: 'active' },
  { id: 2, name: 'Bob Chen', email: 'bob@example.com', role: 'Editor', status: 'active' },
  { id: 3, name: 'Carol White', email: 'carol@example.com', role: 'Viewer', status: 'inactive' },
  { id: 4, name: 'Dan Garcia', email: 'dan@example.com', role: 'Editor', status: 'active' },
];

const USER_COLUMNS: Column<User>[] = [
  { key: 'name', header: 'Name', accessor: (u) => u.name, sortable: true },
  { key: 'email', header: 'Email', accessor: (u) => u.email, sortable: true },
  { key: 'role', header: 'Role', accessor: (u) => u.role, sortable: true },
  { key: 'status', header: 'Status', accessor: (u) => u.status },
];

export const Default = () => (
  <Table
    columns={USER_COLUMNS}
    data={USERS}
    rowKey={(u) => u.id}
    caption="User list"
  />
);

export const Sortable = () => (
  <Table
    columns={USER_COLUMNS}
    data={USERS}
    rowKey={(u) => u.id}
    caption="Sortable user list"
  />
);

export const Loading = () => (
  <Table
    columns={USER_COLUMNS}
    data={[]}
    rowKey={(u) => u.id}
    loading
    caption="Loading state"
  />
);

export const Empty = () => (
  <Table
    columns={USER_COLUMNS}
    data={[]}
    rowKey={(u) => u.id}
    emptyMessage="No users found."
    caption="Empty state"
  />
);

export const ClickableRows = () => (
  <Table
    columns={USER_COLUMNS}
    data={USERS}
    rowKey={(u) => u.id}
    onRowClick={(u) => alert(`Clicked: ${u.name}`)}
    caption="Clickable rows"
  />
);
