import React, { useState } from 'react';
import { ViewerWrapper, StatusOverlay, DownloadLink, StyledIframe } from './styles';

export interface PDFViewerProps {
  src: string;
  title?: string;
  height?: string | number;
  width?: string | number;
  showToolbar?: boolean;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const toCSSValue = (v: string | number): string =>
  typeof v === 'number' ? `${v}px` : v;

const PDFViewer: React.FC<PDFViewerProps> = ({
  src,
  title = 'PDF document',
  height = '600px',
  width = '100%',
  showToolbar = true,
  className,
  onLoad,
  onError,
}) => {
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  const iframeSrc = showToolbar ? src : `${src}#toolbar=0`;

  return (
    <ViewerWrapper
      $width={toCSSValue(width)}
      $height={toCSSValue(height)}
      className={className}
      role="region"
      aria-label={title}
    >
      {status === 'loading' && (
        <StatusOverlay aria-live="polite">Loading PDF…</StatusOverlay>
      )}
      {status === 'error' && (
        <StatusOverlay role="alert">
          Failed to load PDF.{' '}
          <DownloadLink href={src} download>
            Download instead
          </DownloadLink>
        </StatusOverlay>
      )}
      <StyledIframe
        src={iframeSrc}
        title={title}
        style={{ display: status === 'error' ? 'none' : 'block' }}
        onLoad={() => {
          setStatus('ready');
          onLoad?.();
        }}
        onError={() => {
          setStatus('error');
          onError?.();
        }}
      />
    </ViewerWrapper>
  );
};

export default PDFViewer;
