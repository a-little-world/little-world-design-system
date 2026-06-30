// @ts-nocheck
import React from 'react';
import { render, screen, fireEvent } from '../../testUtils';
import Table from './Table';

const columns = [
  { key: 'name', header: 'Name', accessor: (r) => r.name, sortable: true },
  { key: 'age', header: 'Age', accessor: (r) => r.age },
];

const data = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Carol', age: 35 },
];

test('renders column headers', () => {
  render(<Table columns={columns} data={data} rowKey={(r) => r.id} />);
  expect(screen.getByText('Name')).toBeInTheDocument();
  expect(screen.getByText('Age')).toBeInTheDocument();
});

test('renders row data', () => {
  render(<Table columns={columns} data={data} rowKey={(r) => r.id} />);
  expect(screen.getByText('Alice')).toBeInTheDocument();
  expect(screen.getByText('Bob')).toBeInTheDocument();
});

test('shows empty message when data is empty', () => {
  render(
    <Table
      columns={columns}
      data={[]}
      rowKey={(r) => r.id}
      emptyMessage="Nothing here"
    />,
  );
  expect(screen.getByText('Nothing here')).toBeInTheDocument();
});

test('shows loading state', () => {
  render(<Table columns={columns} data={[]} rowKey={(r) => r.id} loading />);
  expect(screen.getByText('Loading…')).toBeInTheDocument();
});

test('calls onRowClick when row is clicked', () => {
  const onRowClick = jest.fn();
  render(
    <Table
      columns={columns}
      data={data}
      rowKey={(r) => r.id}
      onRowClick={onRowClick}
    />,
  );
  fireEvent.click(screen.getByText('Alice').closest('tr'));
  expect(onRowClick).toHaveBeenCalledWith(data[0], 0);
});

test('sorts ascending then descending on header click', () => {
  render(<Table columns={columns} data={data} rowKey={(r) => r.id} />);
  const sortBtn = screen.getByLabelText('Sort by name');
  fireEvent.click(sortBtn);
  const cells = screen.getAllByRole('cell').filter((c) => ['Alice', 'Bob', 'Carol'].includes(c.textContent));
  expect(cells[0].textContent).toBe('Alice');
  fireEvent.click(sortBtn);
  const cellsDesc = screen.getAllByRole('cell').filter((c) => ['Alice', 'Bob', 'Carol'].includes(c.textContent));
  expect(cellsDesc[0].textContent).toBe('Carol');
});
