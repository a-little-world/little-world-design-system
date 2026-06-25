// @ts-nocheck
import React from 'react';
import { render, screen, fireEvent } from '../../testUtils';
import PDFViewer from './PDFViewer';

const SRC = '/sample.pdf';

test('renders an iframe with the provided src', () => {
  render(<PDFViewer src={SRC} />);
  const iframe = document.querySelector('iframe');
  expect(iframe).toBeInTheDocument();
  expect(iframe).toHaveAttribute('src', SRC);
});

test('renders loading state initially', () => {
  render(<PDFViewer src={SRC} />);
  expect(screen.getByText('Loading PDF…')).toBeInTheDocument();
});

test('hides loading state after iframe loads', () => {
  render(<PDFViewer src={SRC} />);
  const iframe = document.querySelector('iframe');
  fireEvent.load(iframe);
  expect(screen.queryByText('Loading PDF…')).not.toBeInTheDocument();
});

test('shows error state on iframe error', () => {
  render(<PDFViewer src={SRC} />);
  const iframe = document.querySelector('iframe');
  fireEvent.error(iframe);
  expect(screen.getByRole('alert')).toBeInTheDocument();
  expect(screen.getByText(/Failed to load PDF/)).toBeInTheDocument();
});

test('appends #toolbar=0 when showToolbar is false', () => {
  render(<PDFViewer src={SRC} showToolbar={false} />);
  const iframe = document.querySelector('iframe');
  expect(iframe).toHaveAttribute('src', `${SRC}#toolbar=0`);
});

test('calls onLoad callback after load', () => {
  const onLoad = jest.fn();
  render(<PDFViewer src={SRC} onLoad={onLoad} />);
  fireEvent.load(document.querySelector('iframe'));
  expect(onLoad).toHaveBeenCalled();
});
