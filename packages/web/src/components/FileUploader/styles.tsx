import styled, { css } from 'styled-components';

export const DropZone = styled.div<{ $dragging: boolean; $disabled: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing?.medium ?? '12px'};
  padding: 32px;
  border: 2px dashed
    ${({ theme, $dragging }) =>
      $dragging
        ? theme.color?.primary?.default ?? '#007AFF'
        : theme.color?.border?.default ?? '#D1D5DB'};
  border-radius: 8px;
  background: ${({ theme, $dragging }) =>
    $dragging
      ? theme.color?.surface?.hover ?? '#F0F7FF'
      : theme.color?.surface?.primary ?? '#FFFFFF'};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: border-color 0.2s, background 0.2s;
  outline: none;

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.5;
    `}

  &:focus-visible {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.color?.focus ?? '#007AFF44'};
  }
`;

export const DropZoneLabel = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.color?.text?.secondary ?? '#6B7280'};
  text-align: center;
`;

export const HintText = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.color?.text?.hint ?? '#9CA3AF'};
`;

export const FileList = styled.ul`
  margin-top: 12px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const FileListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border-radius: 6px;
  background: ${({ theme }) => theme.color?.surface?.secondary ?? '#F9FAFB'};
  font-size: 13px;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.color?.text?.error ?? '#EF4444'};
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 4px;

  &:hover {
    background: ${({ theme }) => theme.color?.surface?.error ?? '#FEE2E2'};
  }
`;
