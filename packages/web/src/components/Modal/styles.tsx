import styled, { css } from 'styled-components';

import {
  DialogSize,
  DialogWidths,
} from '@a-little-world/little-world-design-system-core';
import Button from '../Button/Button';
import Card, { CardContent, CardFooter, CardHeader } from '../Card/Card';

export const ModalDialog = styled(Card)<{ $size: DialogSize }>`
  padding: 0;
  max-width: ${({ $size }) => DialogWidths[$size]};
  max-height: ${({ $size }) =>
    $size === DialogSize.Fullscreen ? '100vh' : '90vh'};
  overflow: hidden;
  ${({ $size }) =>
    $size === DialogSize.Fullscreen &&
    css`
      border-radius: 0;
      border: none;
    `}
`;

export const ModalHeader = styled(CardHeader).attrs({ asContainer: true })`
  flex-direction: row;
  margin-bottom: 0;
  padding: ${({ theme }) => theme.spacing.medium};
  border-bottom: 1px solid ${({ theme }) => theme.color.border.subtle};
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.text.primary};
`;

export const ModalBody = styled(CardContent).attrs({ scrollable: false })`
  flex: 1;
  overflow-y: auto;
  align-items: flex-start;
  gap: 0;
  margin-bottom: 0;
  padding: ${({ theme }) => theme.spacing.medium};
`;

export const ModalFooter = styled(CardFooter).attrs({ align: 'flex-end' })`
  margin-top: 0;
  padding: ${({ theme }) => theme.spacing.medium};
  border-top: 1px solid ${({ theme }) => theme.color.border.subtle};
`;

export const ModalContent = styled.div`
  transform: translateY(100px);
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  height: 100%;
`;

export const DialogContent = styled.div`
  transform: translateY(100px);
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  width: 100%;
  display: flex;
  justify-content: center;
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

      ${ModalContent}, ${DialogContent} {
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

export const DialogCloseButton = styled(Button)`
  flex-shrink: 0;
  margin-left: auto;
  border: none;
`;
