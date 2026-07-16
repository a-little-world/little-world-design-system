import React from 'react';
import PDFViewer from './PDFViewer';

export default {
  component: PDFViewer,
  title: 'Components/PDFViewer',
};

// Build a minimal valid single-page PDF and return a blob URL so the story
// has no dependency on any external host that may block iframe embedding.
function makeSamplePdfUrl(): string {
  const parts = [
    '%PDF-1.0\n',
    '1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj\n',
    '2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj\n',
    '3 0 obj<</Type/Page/MediaBox[0 0 612 792]>>endobj\n',
  ];

  let cursor = 0;
  const offsets = parts.map(p => { const o = cursor; cursor += p.length; return o; });
  const xrefStart = cursor;

  const xref = [
    'xref\n',
    `0 ${parts.length}\n`,
    '0000000000 65535 f \n',
    ...offsets.slice(1).map(o => `${String(o).padStart(10, '0')} 00000 n \n`),
    `trailer<</Size ${parts.length}/Root 1 0 R>>\n`,
    'startxref\n',
    `${xrefStart}\n`,
    '%%EOF',
  ].join('');

  const pdf = parts.join('') + xref;
  return URL.createObjectURL(new Blob([pdf], { type: 'application/pdf' }));
}

const SAMPLE_PDF = makeSamplePdfUrl();

export const Default = () => <PDFViewer src={SAMPLE_PDF} title="Sample PDF" />;

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
