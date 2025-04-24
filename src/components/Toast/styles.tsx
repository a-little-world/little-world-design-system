import * as RadixToast from '@radix-ui/react-toast';
import styled, { keyframes } from 'styled-components';

import Button from '../Button/Button';
import { CloseIcon } from '../Icon';

const hide = keyframes`
	from {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
`;

const slideIn = keyframes`
	from {
		transform: translateX(calc(100% + var(--viewport-padding)));
	}
	to {
		transform: translateX(0);
	}
`;

const slideOut = keyframes`
	from {
    transform: translateX(0);
	}
	to {
    transform: translateX(calc(100% + var(--viewport-padding)));
	}
`;

const swipeOut = keyframes`
	from {
		transform: translateX(var(--radix-toast-swipe-end-x));
	}
	to {
		transform: translateX(calc(100% + var(--viewport-padding)));
	}
`;

export const ToastProvider = styled(RadixToast.ToastProvider)``;

export const ToastViewport = styled(RadixToast.Viewport)`
  --viewport-padding: ${({ theme }) => theme.spacing.medium};
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: var(--viewport-padding);
  gap: ${({ theme }) => theme.spacing.xxsmall};
  width: 390px;
  max-width: 100vw;
  margin: 0;
  list-style: none;
  z-index: 2147483647;
  outline: none;
`;

export const ToastRoot = styled(RadixToast.Root)`
  position: relative;
  --border-radius: ${({ theme }) => theme.radius.xxsmall};
  background-color: ${({ theme }) => theme.color.surface.primary};
  border-radius: var(--border-radius);
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;

  &[data-state='open'] {
    animation: ${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  &[data-state='closed'] {
    animation: ${slideOut} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  &[data-swipe='move'] {
    transform: translateX(var(--radix-toast-swipe-move-x));
  }

  &[data-swipe='cancel'] {
    transform: translateX(0);
    transition: transform 200ms ease-out;
  }

  &[data-swipe='end'] {
    animation: ${swipeOut} 100ms ease-out;
  }
`;

export const ToastCloseButton = styled(Button)<{ $visible?: boolean }>`
  position: absolute;
  top: -8px;
  right: -8px;
  border-radius: ${({ theme }) => theme.radius.half};
  background-color: ${({ theme }) => theme.color.surface.tertiary};
  width: 16px;
  height: 16px;
  box-shadow: 0px 0px 1px 1px ${({ theme }) => theme.color.border.subtle};
`;

export const ToastCloseIcon = styled(CloseIcon)`
  scale: 0.8;
`;

export const ToastContent = styled.div`
  padding: ${({ theme }) => theme.spacing.small};
  display: grid;
  grid-template-areas: 'headline headline' 'title action' 'description action';
  grid-template-columns: auto max-content;
  column-gap: ${({ theme }) => theme.spacing.small};
  align-items: center;
`;

export const ToastHeader = styled.div<{ $backgroundColor?: string }>`
  padding: ${({ theme }) => `${theme.spacing.xxxsmall} ${theme.spacing.xxsmall}`} ;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ $backgroundColor, theme }) =>
    $backgroundColor || theme.color.surface.secondary};
  justify-content: space-between;
`;

export const ToastHeadline = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxxsmall};
`;

export const ToastTitle = styled(RadixToast.ToastTitle)`
  grid-area: title;
  margin-bottom: ${({ theme }) => theme.spacing.xxxsmall};
  font-weight: bold;
  color: ${({ theme }) => theme.color.text.primary};
`;

export const ToastDescription = styled(RadixToast.ToastDescription)`
  grid-area: description;
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
`;

export const ToastAction = styled(RadixToast.ToastAction)`
  grid-area: action;
`;
