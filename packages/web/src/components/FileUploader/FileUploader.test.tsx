import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, renderWithUser, screen } from '../../testUtils';
import FileUploader from './FileUploader';

const textFile = (name: string) =>
  new File(['content'], name, { type: 'text/plain', lastModified: 1 });

const fileInput = (container: HTMLElement) =>
  container.querySelector('input[type="file"]') as HTMLInputElement;

test('FileUploader ignores files that are already selected', async () => {
  const onFilesChange = jest.fn();
  const first = textFile('a.txt');
  const { user, container } = renderWithUser(
    <FileUploader onFilesChange={onFilesChange} />,
  );

  await user.upload(fileInput(container), first);
  await user.upload(fileInput(container), [
    textFile('a.txt'),
    textFile('b.txt'),
  ]);

  expect(onFilesChange).toHaveBeenLastCalledWith([
    first,
    expect.objectContaining({ name: 'b.txt' }),
  ]);
  expect(screen.getAllByRole('listitem')).toHaveLength(2);
});

test('FileUploader reports too many files and hides the add button at the limit', async () => {
  const onError = jest.fn();
  const { user, container } = renderWithUser(
    <FileUploader maxFiles={2} onError={onError} />,
  );

  await user.upload(fileInput(container), [
    textFile('a.txt'),
    textFile('b.txt'),
    textFile('c.txt'),
  ]);

  expect(onError).toHaveBeenCalledWith(expect.any(String), {
    code: 'too-many',
  });
  expect(screen.getAllByRole('listitem')).toHaveLength(2);
  expect(
    screen.queryByRole('button', { name: 'Add more files' }),
  ).not.toBeInTheDocument();
});

test('FileUploader reports the error code for a file of the wrong type', async () => {
  const onError = jest.fn();
  const wrongType = textFile('notes.txt');
  const user = userEvent.setup({ applyAccept: false });
  const { container } = render(
    <FileUploader accept=".pdf" onError={onError} />,
  );

  await user.upload(fileInput(container), wrongType);

  expect(onError).toHaveBeenCalledWith(expect.any(String), {
    code: 'invalid-type',
    file: wrongType,
  });
});

test('FileUploader replaces the file when multiple is false', async () => {
  const onFilesChange = jest.fn();
  const second = textFile('b.txt');
  const { user, container } = renderWithUser(
    <FileUploader multiple={false} onFilesChange={onFilesChange} />,
  );

  await user.upload(fileInput(container), textFile('a.txt'));
  await user.click(screen.getByRole('button', { name: 'Choose file' }));
  await user.upload(fileInput(container), second);

  expect(onFilesChange).toHaveBeenLastCalledWith([second]);
});

test('FileUploader opens the file picker with the keyboard', async () => {
  const { user, container } = renderWithUser(<FileUploader label="Upload" />);
  const click = jest.spyOn(fileInput(container), 'click');

  screen.getByRole('button', { name: /^Upload/ }).focus();
  await user.keyboard('{Enter}');
  await user.keyboard(' ');

  expect(click).toHaveBeenCalledTimes(2);
});

test('FileUploader uses the given button labels', async () => {
  const { user, container } = renderWithUser(
    <FileUploader
      addFilesLabel="Weitere Dateien"
      removeFileLabel={name => `${name} entfernen`}
    />,
  );

  await user.upload(fileInput(container), [
    textFile('a.txt'),
    textFile('b.txt'),
  ]);

  expect(
    screen.getByRole('button', { name: 'Weitere Dateien' }),
  ).toBeInTheDocument();
  await user.click(screen.getByRole('button', { name: 'a.txt entfernen' }));
  expect(screen.getAllByRole('listitem')).toHaveLength(1);
});

test('FileUploader disables the remove buttons when disabled', async () => {
  const { user, container, rerender } = renderWithUser(<FileUploader />);
  await user.upload(fileInput(container), [
    textFile('a.txt'),
    textFile('b.txt'),
  ]);

  rerender(<FileUploader disabled />);

  expect(screen.getByRole('button', { name: 'Remove a.txt' })).toBeDisabled();
  expect(
    screen.queryByRole('button', { name: 'Add more files' }),
  ).not.toBeInTheDocument();
});

test('FileUploader shows the file limit and how many files are chosen', async () => {
  const { user, container } = renderWithUser(<FileUploader maxFiles={2} />);
  expect(screen.getByText('Up to 2 files')).toBeInTheDocument();

  await user.upload(fileInput(container), textFile('a.txt'));
  expect(screen.getByRole('status')).toHaveTextContent('1 of 2 files');

  await user.upload(fileInput(container), textFile('b.txt'));
  expect(screen.getByRole('status')).toHaveTextContent('2 of 2 files');
  expect(
    screen.queryByRole('button', { name: 'Add more files' }),
  ).not.toBeInTheDocument();
});

test('FileUploader uses the given limit texts', async () => {
  const { user, container } = renderWithUser(
    <FileUploader
      maxFiles={3}
      maxFilesLabel={max => `Bis zu ${max} Dateien`}
      fileCountLabel={(count, max) => `${count} von ${max} Dateien`}
    />,
  );
  expect(screen.getByText('Bis zu 3 Dateien')).toBeInTheDocument();

  await user.upload(fileInput(container), [
    textFile('a.txt'),
    textFile('b.txt'),
  ]);
  expect(screen.getByRole('status')).toHaveTextContent('2 von 3 Dateien');
});
