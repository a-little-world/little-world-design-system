import React, { useEffect, useRef, useState } from 'react';
import { PDFViewerProps } from '@a-little-world/little-world-design-system-core';
import {
  ViewerWrapper,
  StatusOverlay,
  DownloadLink,
  StyledIframe,
} from './styles';

export { PDFViewerProps };

const toCSSValue = (v: string | number): string =>
  typeof v === 'number' ? `${v}px` : v;

const buildSrc = (src: string, showToolbar: boolean): string => {
  if (showToolbar) return src;
  const [base, fragment] = src.split('#');
  const params = new URLSearchParams(fragment ?? '');
  params.set('toolbar', '0');
  return `${base}#${params.toString()}`;
};

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
  const iframeSrc = buildSrc(src, showToolbar);

  const [prevSrc, setPrevSrc] = useState(iframeSrc);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>(
    'loading',
  );

  if (prevSrc !== iframeSrc) {
    setPrevSrc(iframeSrc);
    setStatus('loading');
  }

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const onErrorRef = useRef(onError);
  onErrorRef.current = onError;

  // React delegates 'error' events via root capture, which is unreliable for
  // iframes in jsdom. Attach the listener directly to the DOM element instead.
  useEffect(() => {
    const el = iframeRef.current;
    if (!el) return;
    const handleError = () => {
      setStatus('error');
      onErrorRef.current?.();
    };
    el.addEventListener('error', handleError);
    return () => el.removeEventListener('error', handleError);
  }, []);

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
      {/* Browsers fire 'load' on any completed navigation (including auth-
          redirects or 404 HTML pages). Cross-origin restrictions prevent
          inspecting the iframe document, so a successful HTTP redirect to
          an error page will still reach the ready state. */}
      <StyledIframe
        ref={iframeRef}
        src={iframeSrc}
        title={title}
        style={{ display: status === 'error' ? 'none' : 'block' }}
        onLoad={() => {
          setStatus('ready');
          onLoad?.();
        }}
      />
    </ViewerWrapper>
  );
};

export default PDFViewer;
