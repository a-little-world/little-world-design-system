import styled from 'styled-components';

export const SignatureWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
`;

export const SignatureLabel = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.color?.text?.secondary ?? '#6B7280'};
`;

export const SignatureCanvas = styled.canvas<{ $disabled: boolean }>`
  display: block;
  border: 1px solid ${({ theme }) => theme.color.border.subtle};
  border-radius: 6px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'crosshair')};
  touch-action: none;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  background: ${({ theme }) => theme.color?.surface?.primary ?? '#FFFFFF'};
`;

export const ClearButton = styled.button`
  align-self: flex-end;
  background: none;
  border: 1px solid ${({ theme }) => theme.color.border.subtle};
  border-radius: 6px;
  padding: 4px 12px;
  font-size: 13px;
  cursor: pointer;
  color: ${({ theme }) => theme.color?.text?.secondary ?? '#6B7280'};
  transition: background 0.15s;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.color.surface.secondary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
