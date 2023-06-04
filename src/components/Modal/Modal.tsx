import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { createPortal } from 'react-dom';
import tokens from '../../tokens';
// import Svg, { CLOSE } from '../Svg/Svg';
// import FocusTrap from 'focus-trap-react';

export const BACKDROP_LABEL = 'dialog backdrop';
const ROOT_LABEL = '#root';

const BackdropContainer = styled.dialog<{ $active: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: unset;
  height: unset;
  margin: 0;
  padding: ${tokens.spacing.large};
  border: none;
  background-color: rgba(51, 51, 51, 0.3);
  backdrop-filter: blur(8px);
  opacity: 0;
  transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 200ms;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

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
}
`;

type ModalProps = {
  children: any;
  className?: string;
  open: boolean;
  onClose: () => void;
  locked?: boolean;
  parent?: any;
};

const Modal = ({
  children,
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
      {!locked && <button onClick={onClose} />}
      {children}
    </BackdropContainer>
  );

  if (open || active) return createPortal(Backdrop, el);
  return null;
};

// <button onClick={onClose}>
//   <Svg aria-hidden={true} name={CLOSE} />
// </button>;

export default Modal;
