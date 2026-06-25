import React from 'react';
import PDFViewer from './PDFViewer';

export default {
  component: PDFViewer,
  title: 'Components/PDFViewer',
};

const SAMPLE_PDF = 'https://www.w3.org/WAI/WCAG21/wcag21.pdf';

export const Default = () => <PDFViewer src={SAMPLE_PDF} title="WCAG 2.1" />;

export const NoToolbar = () => (
  <PDFViewer src={SAMPLE_PDF} title="PDF without toolbar" showToolbar={false} />
);

export const CustomSize = () => (
  <PDFViewer
    src={SAMPLE_PDF}
    title="Custom size PDF"
    width="800px"
    height="800px"
  />
);

export const WithCallbacks = () => (
  <PDFViewer
    src={SAMPLE_PDF}
    title="PDF with callbacks"
    onLoad={() => console.log('PDF loaded')}
    onError={() => console.error('PDF failed to load')}
  />
);
