import { createContext, useContext, RefObject } from 'react';

export const ModalPortalContext =
  createContext<RefObject<HTMLElement | null> | null>(null);

export const useModalPortalContainer = () => useContext(ModalPortalContext);
