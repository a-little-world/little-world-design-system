import React from 'react';
import { renderWithUser, screen } from '../../testUtils';
import FileUploader from './FileUploader';

const textFile = (name: string) =>
  new File(['content'], name, { type: 'text/plain', lastModified: 1 });

const fileInput = (container: HTMLElement) =>
  container.querySelector('input[type="file"]') as HTMLInputElement;

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
