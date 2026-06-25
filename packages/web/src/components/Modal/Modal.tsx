import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { lock, unlock } from 'tua-body-scroll-lock';

import {
  ButtonAppearance,
  ButtonSizes,
  ButtonVariations,
} from '../Button/Button';
import { CloseIcon } from '../Icon';
import {
  BackdropContainer,
  CloseButton,
  ModalContent,
  ModalDialog,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
} from './styles';
import type { ModalSize } from './styles';
import { ModalPortalContext } from './ModalPortalContext';
import { useTheme } from 'styled-components';

export const BACKDROP_LABEL = 'dialog backdrop';
const CLOSE_BUTTON_LABEL = 'dialog close button';

type BaseModalProps = {
  children: any;
  className?: string;
  closeOnBackdropClick?: boolean;
  createInPortal?: boolean;
  footer?: React.ReactNode;
  open: boolean;
  parent?: any;
  size?: ModalSize;
  title?: string;
};

type UnlockedModalProps = BaseModalProps & {
  locked?: false;
  onClose: () => void;
};

type LockedModalProps = BaseModalProps & {
  closeOnBackdropClick?: never;
  locked: true;
  onClose?: () => void;
};

type ModalProps = UnlockedModalProps | LockedModalProps;

const Modal = ({
  children,
  closeOnBackdropClick = true,
  createInPortal = true,
  footer,
  open,
  onClose,
  locked,
  parent,
  size = 'md',
  title,
  className,
}: ModalProps) => {
  const [active, setActive] = useState(false);
  const theme = useTheme();

  const backdrop = useRef<HTMLDialogElement>(null);
  const el = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    const target = parent?.appendChild ? parent : document.body;
    target.appendChild(el);

    return () => {
      target.removeChild(el);
    };
  }, [el, parent, className]);

  useEffect(() => {
    const { current } = backdrop;
    const canDismissOnBackdrop = !locked && closeOnBackdropClick;
    const transitionEnd = () => setActive(open);
    const keyHandler = (e: KeyboardEvent) =>
      !locked && e.key === 'Escape' && onClose();
    const clickHandler = (e: Event) =>
      canDismissOnBackdrop && e.target === current && onClose();

    let openTimeout: number;

    if (current) {
      current.addEventListener('transitionend', transitionEnd);
      current.addEventListener('click', clickHandler);
      window.addEventListener('keyup', keyHandler);
    }

    if (open) {
      openTimeout = window.setTimeout(() => {
        lock();
        (document?.activeElement as HTMLElement).blur();
        setActive(open);
        current?.focus();
      }, 10);
    }

    return () => {
      clearTimeout(openTimeout);
      unlock();

      window.removeEventListener('keyup', keyHandler);
      if (current) {
        current.removeEventListener('transitionend', transitionEnd);
        current.removeEventListener('click', clickHandler);
      }
    };
  }, [closeOnBackdropClick, open, locked, onClose]);

  const Backdrop = (
    <ModalPortalContext.Provider value={backdrop}>
      <BackdropContainer
        aria-modal={true}
        aria-label={BACKDROP_LABEL}
        ref={backdrop}
        $active={active && open}
      >
        <ModalDialog $size={size}>
          {(title || !locked) && (
            <ModalHeader>
              {title && <ModalTitle>{title}</ModalTitle>}
              {!locked && (
                <CloseButton
                  variation={ButtonVariations.Circle}
                  appearance={ButtonAppearance.Secondary}
                  backgroundColor={theme.color.surface.secondary}
                  color={theme.color.text.primary}
                  onClick={onClose}
                  size={ButtonSizes.Medium}
                >
                  <CloseIcon label={CLOSE_BUTTON_LABEL} height="20" width="20" />
                </CloseButton>
              )}
            </ModalHeader>
          )}
          <ModalBody>
            <ModalContent>{children}</ModalContent>
          </ModalBody>
          {footer && <ModalFooter>{footer}</ModalFooter>}
        </ModalDialog>
      </BackdropContainer>
    </ModalPortalContext.Provider>
  );

  if (open) return createInPortal ? createPortal(Backdrop, el) : Backdrop;
  return null;
};

export default Modal;
