import { ReactNode } from 'react';

export interface PDFViewerBaseProps {
  src: string | ArrayBuffer;
  width?: string | number;
  height?: string | number;
  className?: string;
  loading?: ReactNode;
  error?: ReactNode;
  controls?: boolean;
  zoom?: boolean;
  download?: boolean;
  print?: boolean;
  scale?: number;
}
