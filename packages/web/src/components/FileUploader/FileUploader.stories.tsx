import React from 'react';
import FileUploader from './FileUploader';

export default {
  component: FileUploader,
  title: 'Components/FileUploader',
};

export const Default = (args) => <FileUploader {...args} />;

export const ImageOnly = (args) => (
  <FileUploader
    {...args}
    accept="image/*"
    label="Drop images here, or click to browse"
    hint="PNG, JPG, GIF up to 5MB"
  />
);

export const SingleFile = (args) => (
  <FileUploader
    {...args}
    multiple={false}
    maxFiles={1}
    label="Upload a single document"
    hint="PDF or Word documents only"
    accept=".pdf,.doc,.docx"
  />
);

export const Disabled = (args) => (
  <FileUploader {...args} disabled label="File upload is disabled" />
);

export const WithSizeLimit = (args) => (
  <FileUploader
    {...args}
    maxSizeBytes={2 * 1024 * 1024}
    hint="Max file size: 2MB"
    onError={(msg) => alert(msg)}
  />
);
