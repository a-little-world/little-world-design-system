// @ts-nocheck
import React from 'react';
import { render, screen, fireEvent } from '../../testUtils';
import FileUploader from './FileUploader';

const onFilesChange = jest.fn();
const onError = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

test('renders label text', () => {
  render(<FileUploader label="Drop files here" onFilesChange={onFilesChange} />);
  expect(screen.getByText('Drop files here')).toBeInTheDocument();
});

test('is disabled when disabled prop is set', () => {
  render(<FileUploader disabled onFilesChange={onFilesChange} />);
  const dropZone = screen.getByRole('button');
  expect(dropZone).toHaveAttribute('aria-disabled', 'true');
});

test('calls onFilesChange when files are selected', () => {
  render(<FileUploader onFilesChange={onFilesChange} />);
  const input = document.querySelector('input[type="file"]');
  const file = new File(['hello'], 'hello.txt', { type: 'text/plain' });
  Object.defineProperty(input, 'files', { value: { 0: file, length: 1, item: () => file, [Symbol.iterator]: [][Symbol.iterator] } });
  fireEvent.change(input, { target: { files: [file] } });
  expect(onFilesChange).toHaveBeenCalled();
});

test('shows file in list after drop', () => {
  render(<FileUploader onFilesChange={onFilesChange} />);
  const file = new File(['content'], 'test.pdf', { type: 'application/pdf' });
  const dropZone = screen.getByRole('button');
  fireEvent.drop(dropZone, {
    dataTransfer: { files: [file] },
  });
  expect(screen.getByText('test.pdf')).toBeInTheDocument();
});

test('calls onError when file exceeds maxSizeBytes', () => {
  render(
    <FileUploader
      maxSizeBytes={10}
      onFilesChange={onFilesChange}
      onError={onError}
    />,
  );
  const file = new File(['this is larger than 10 bytes'], 'large.txt', {
    type: 'text/plain',
  });
  const dropZone = screen.getByRole('button');
  fireEvent.drop(dropZone, { dataTransfer: { files: [file] } });
  expect(onError).toHaveBeenCalled();
});
