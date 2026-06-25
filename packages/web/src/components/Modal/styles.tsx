import styled, { css } from 'styled-components';

import Button from '../Button/Button';

export type ModalSize = 'sm' | 'md' | 'lg' | 'fullscreen';

const modalWidths: Record<ModalSize, string> = {
  sm: '400px',
  md: '600px',
  lg: '900px',
  fullscreen: '100%',
};

export const ModalDialog = styled.div<{ $size: ModalSize }>`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color?.surface?.primary ?? '#fff'};
  border-radius: ${({ $size }) => ($size === 'fullscreen' ? '0' : '8px')};
  width: 100%;
  max-width: ${({ $size }) => modalWidths[$size]};
  max-height: ${({ $size }) => ($size === 'fullscreen' ? '100vh' : '90vh')};
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing?.medium ?? '16px'};
  border-bottom: 1px solid ${({ theme }) => theme.color?.border?.default ?? '#E5E7EB'};
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.color?.text?.primary ?? '#111827'};
`;

export const ModalBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing?.medium ?? '16px'};
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing?.small ?? '8px'};
  padding: ${({ theme }) => theme.spacing?.medium ?? '16px'};
  border-top: 1px solid ${({ theme }) => theme.color?.border?.default ?? '#E5E7EB'};
`;

export const ModalContent = styled.div`
  transform: translateY(100px);
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  height: 100%;
`;

export const BackdropContainer = styled.dialog<{ $active: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: unset;
  height: unset;
  margin: 0;
  padding: ${({ theme }) => theme.spacing.small};
  border: none;
  background-color: rgba(51, 51, 51, 0.3);
  backdrop-filter: blur(8px);
  opacity: 0;
  transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 200ms;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.modal};
  overflow: auto;
  overscroll-behavior: contain;

  ${({ $active }) =>
    $active &&
    css`
      transition-duration: 250ms;
      transition-delay: 0ms;
      opacity: 1;

      ${ModalContent} {
        transform: translateY(0);
        opacity: 1;
        transition-delay: 150ms;
        transition-duration: 350ms;
      }
    `}

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: ${({ theme }) => theme.spacing.large};
  }
`;

export const CloseButton = styled(Button)`
  position: absolute;
  top: ${({ theme }) => theme.spacing.xsmall};
  right: ${({ theme }) => theme.spacing.xsmall};
  z-index: ${({ theme }) => theme.zIndex.control};
  border: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    top: ${({ theme }) => theme.spacing.medium};
    right: ${({ theme }) => theme.spacing.medium};
  }
`;
