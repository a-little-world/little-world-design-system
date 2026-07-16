import styled, { css } from 'styled-components';

export const DropZone = styled.div<{ $dragging: boolean; $disabled: boolean }>`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 2px dashed
    ${({ theme, $dragging }) =>
      $dragging ? theme.color.border.accent : theme.color.border.subtle};
  border-radius: 8px;
  background: ${({ theme, $dragging }) =>
    $dragging ? theme.color.surface.subtle : theme.color.surface.secondary};
  transition:
    border-color 0.2s,
    background 0.2s;
  outline: none;

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}

  &:focus-visible {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.color.border.accent};
  }
`;

export const DropZoneIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  padding: 32px;
  cursor: pointer;
`;

export const EmptyTitle = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.color.text.secondary};
  text-align: center;
`;

export const HintText = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.color.text.tertiary};
  text-align: center;
`;

/* ── Single image preview ── */

export const PreviewColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PreviewArea = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 8rem;
  max-height: 13rem;
  padding: ${({ theme }) => theme.spacing.small};
  cursor: pointer;
`;

export const PreviewImage = styled.img`
  max-height: 12rem;
  width: 100%;
  object-fit: contain;
  pointer-events: none;
`;

export const RemoveImageButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.small};
  right: ${({ theme }) => theme.spacing.small};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xsmall};
  border: none;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.65);
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: rgba(0, 0, 0, 0.85);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.border.accent};
    outline-offset: 2px;
  }
`;

export const PreviewFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.small};
  border-top: 1px solid ${({ theme }) => theme.color.border.subtle};
`;

export const PreviewCaption = styled.p`
  margin: 0;
  min-width: 0;
  flex: 1;
  font-size: 0.8125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.color.text.secondary};
`;

/* ── Multi-file list ── */

export const InlineFileList = styled.ul`
  margin: 0;
  padding: ${({ theme }) => theme.spacing.small};
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xsmall};
`;

export const InlineFileItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing.xsmall} ${theme.spacing.small}`};
  border-radius: 6px;
  background: ${({ theme }) => theme.color.surface.primary};
  font-size: 13px;
  color: ${({ theme }) => theme.color.text.primary};
`;

export const RemoveFileButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px;
  border-radius: 4px;
  flex-shrink: 0;

  &:hover {
    background: ${({ theme }) => theme.color.surface.error};
  }
`;

export const InlineFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing.small};
  border-top: 1px solid ${({ theme }) => theme.color.border.subtle};
`;
