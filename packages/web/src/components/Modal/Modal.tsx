import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { ButtonVariations } from '../Button/Button';
import { CloseIcon } from '../Icon';
import { BackdropContainer, CloseButton } from './styles';

export const BACKDROP_LABEL = 'dialog backdrop';
const ROOT_LABEL = '#root';
const CLOSE_BUTTON_LABEL = 'dialog close button';

type BaseModalProps = {
  children: any;
  className?: string;
  createInPortal?: boolean;
  open: boolean;
  parent?: any;
};

type UnlockedModalProps = BaseModalProps & {
  locked?: false;
  onClose: () => void;
};

type LockedModalProps = BaseModalProps & {
  locked: true;
  onClose?: () => void;
};

type ModalProps = UnlockedModalProps | LockedModalProps;

const Modal = ({
  children,
  createInPortal = true,
  open,
  onClose,
  locked,
  parent,
  className,
}: ModalProps) => {
  const [active, setActive] = useState(false);

  const backdrop = useRef<HTMLDialogElement>(null);
  const el = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    const target = parent && parent.appendChild ? parent : document.body;
    target.appendChild(el);

    return () => {
      target.removeChild(el);
    };
  }, [el, parent, className]);

  useEffect(() => {
    const { current } = backdrop;
    const transitionEnd = () => setActive(open);
    const keyHandler = (e: KeyboardEvent) =>
      !locked && e.key === 'Escape' && onClose();
    const clickHandler = (e: Event) =>
      !locked && e.target === current && onClose();

    let openTimeout: number;

    if (current) {
      current.addEventListener('transitionend', transitionEnd);
      current.addEventListener('click', clickHandler);
      window.addEventListener('keyup', keyHandler);
    }

    if (open) {
      openTimeout = window.setTimeout(() => {
        (document?.activeElement as HTMLElement).blur();
        setActive(open);
        document.body.style.overflow = 'hidden';
        document.querySelector(ROOT_LABEL)?.setAttribute('inert', 'true');
        current?.focus();
      }, 10);
    }

    return () => {
      if (current) {
        current.removeEventListener('transitionend', transitionEnd);
        current.removeEventListener('click', clickHandler);
      }

      clearTimeout(openTimeout);
      document.querySelector(ROOT_LABEL)?.removeAttribute('inert');
      document.body.style.overflow = 'unset';

      window.removeEventListener('keyup', keyHandler);
    };
  }, [open, locked, onClose]);

  const Backdrop = (
    <BackdropContainer
      aria-modal={true}
      aria-label={BACKDROP_LABEL}
      ref={backdrop}
      $active={active && open}
    >
      {!locked && (
        <CloseButton variation={ButtonVariations.Icon} onClick={onClose}>
          <CloseIcon
            label={CLOSE_BUTTON_LABEL}
            height="24"
            width="24"
          />
        </CloseButton>
      )}
      {children}
    </BackdropContainer>
  );

  if (open) return createInPortal ? createPortal(Backdrop, el) : Backdrop;
  return null;
};

export default Modal;
