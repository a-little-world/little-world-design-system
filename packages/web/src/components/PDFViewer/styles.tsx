import styled from 'styled-components';

export const ViewerWrapper = styled.div<{ $width: string; $height: string }>`
  position: relative;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  background: ${({ theme }) => theme.color.surface.secondary};
  border: 1px solid ${({ theme }) => theme.color.border.subtle};
  border-radius: 8px;
  overflow: hidden;
`;

export const StatusOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: 14px;
`;

export const DownloadLink = styled.a`
  font-size: 13px;
  color: ${({ theme }) => theme.color.text.link};
  text-decoration: underline;
  cursor: pointer;
`;

export const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  display: block;
`;
