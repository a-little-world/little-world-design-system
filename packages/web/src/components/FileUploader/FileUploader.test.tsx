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
