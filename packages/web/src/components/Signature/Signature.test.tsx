// @ts-nocheck
import React from 'react';
import { render, screen, fireEvent } from '../../testUtils';
import Signature from './Signature';

beforeEach(() => {
  HTMLCanvasElement.prototype.getContext = jest.fn(() => ({
    fillStyle: '',
    fillRect: jest.fn(),
    beginPath: jest.fn(),
    moveTo: jest.fn(),
    lineTo: jest.fn(),
    stroke: jest.fn(),
    toDataURL: jest.fn(() => 'data:image/png;base64,test'),
  }));
});

test('renders the label', () => {
  render(<Signature label="Please sign" />);
  expect(screen.getByText('Please sign')).toBeInTheDocument();
});

test('renders the clear button', () => {
  render(<Signature clearLabel="Reset" />);
  expect(screen.getByText('Reset')).toBeInTheDocument();
});

test('clear button is initially disabled when canvas is empty', () => {
  render(<Signature />);
  expect(screen.getByRole('button', { name: /clear/i })).toBeDisabled();
});

test('clear button is disabled when disabled prop is set', () => {
  render(<Signature disabled />);
  expect(screen.getByRole('button', { name: /clear/i })).toBeDisabled();
});

test('calls onChange after drawing stops', () => {
  const onChange = jest.fn();
  render(<Signature onChange={onChange} />);
  const canvas = screen.getByRole('img');
  fireEvent.mouseDown(canvas, { clientX: 10, clientY: 10 });
  fireEvent.mouseMove(canvas, { clientX: 20, clientY: 20 });
  fireEvent.mouseUp(canvas);
  expect(onChange).toHaveBeenCalledWith('data:image/png;base64,test');
});
