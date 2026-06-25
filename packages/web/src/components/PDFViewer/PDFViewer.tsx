import React, { useState } from 'react';

export type PDFViewerFit = 'width' | 'height' | 'contain';

export interface PDFViewerProps {
  src: string;
  title?: string;
  height?: string | number;
  width?: string | number;
  fit?: PDFViewerFit;
  showToolbar?: boolean;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}

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
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('loading');

  const iframeSrc = showToolbar ? src : `${src}#toolbar=0`;

  return (
    <div
      className={className}
      style={{ width, height, position: 'relative' }}
      role="region"
      aria-label={title}
    >
      {status === 'loading' && (
        <div
          aria-live="polite"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Loading PDF…
        </div>
      )}
      {status === 'error' && (
        <div
          role="alert"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Failed to load PDF. <a href={src} download>Download instead</a>
        </div>
      )}
      <iframe
        src={iframeSrc}
        title={title}
        width="100%"
        height="100%"
        style={{ border: 'none', display: status === 'error' ? 'none' : 'block' }}
        onLoad={() => {
          setStatus('idle');
          onLoad?.();
        }}
        onError={() => {
          setStatus('error');
          onError?.();
        }}
      />
    </div>
  );
};

export default PDFViewer;
