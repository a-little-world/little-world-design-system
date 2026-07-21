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
