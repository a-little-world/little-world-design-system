import styled, { css } from 'styled-components';

import Button from '../Button/Button';

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
  z-index: 1000;
  overflow: auto;
  overscroll-behavior: contain;

  > div {
    transform: translateY(100px);
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
  }

  ${({ $active }) =>
    $active &&
    css`
      transition-duration: 250ms;
      transition-delay: 0ms;
      opacity: 1;

      > div {
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
  z-index: 2;
  padding: 7px;
  background: ${({ theme }) => theme.color.surface.secondary};
  border-radius: ${({ theme }) => theme.radius.full};

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    top: ${({ theme }) => theme.spacing.medium};
    right: ${({ theme }) => theme.spacing.medium};
  }
`;
