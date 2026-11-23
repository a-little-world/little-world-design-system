import React from 'react';
import { useTheme } from 'styled-components';

import {
  ButtonAppearance,
  ButtonSizes,
  ButtonVariations,
  DialogSize,
  FlexAlignType,
} from '@a-little-world/little-world-design-system-core';
import { CloseIcon } from '../Icon';
import {
  DialogCloseButton,
  DialogContent,
  ModalBody,
  ModalDialog,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from './styles';
import Modal from './Modal';

const CLOSE_BUTTON_LABEL = 'dialog close button';

type BaseDialogProps = {
  children: React.ReactNode;
  className?: string;
  /**
   * Accessible name of the close button. Callers pass the translated string.
   * Falls back to "dialog close button" when omitted.
   */
  closeLabel?: string;
  closeOnBackdropClick?: boolean;
  contentAlign?: FlexAlignType;
  createInPortal?: boolean;
  footer?: React.ReactNode;
  /**
   * Accessible name of the dialog. When omitted, `title` is used.
   * Callers pass the translated string.
   */
  label?: string;
  open: boolean;
  parent?: any;
  size?: DialogSize;
  title?: string;
};

type UnlockedDialogProps = BaseDialogProps & {
  locked?: false;
  onClose: () => void;
};

type LockedDialogProps = BaseDialogProps & {
  closeOnBackdropClick?: never;
  locked: true;
  onClose?: () => void;
};

export type DialogProps = UnlockedDialogProps | LockedDialogProps;

const Dialog = ({
  children,
  className,
  closeLabel,
  closeOnBackdropClick,
  contentAlign,
  createInPortal,
  footer,
  label,
  locked,
  onClose,
  open,
  parent,
  size = DialogSize.Medium,
  title,
}: DialogProps) => {
  const theme = useTheme();
  const dialogLabel = label?.trim() ? label : title;
  const closeButtonLabel = closeLabel?.trim() ? closeLabel : CLOSE_BUTTON_LABEL;

  const dialogContent = (
    <DialogContent $alignItems={contentAlign}>
      <ModalDialog $size={size}>
        {(title || !locked) && (
          <ModalHeader>
            {title && <ModalTitle>{title}</ModalTitle>}
            {!locked && (
              <DialogCloseButton
                variation={ButtonVariations.Circle}
                appearance={ButtonAppearance.Secondary}
                backgroundColor={theme.color.surface.secondary}
                color={theme.color.text.primary}
                onClick={onClose}
                size={ButtonSizes.Medium}
              >
                <CloseIcon label={closeButtonLabel} height="20" width="20" />
              </DialogCloseButton>
            )}
          </ModalHeader>
        )}
        <ModalBody>{children}</ModalBody>
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalDialog>
    </DialogContent>
  );

  if (locked) {
    return (
      <Modal
        className={className}
        createInPortal={createInPortal}
        hideCloseButton
        label={dialogLabel}
        locked
        noContentWrapper
        onClose={onClose}
        open={open}
        parent={parent}
      >
        {dialogContent}
      </Modal>
    );
  }

  return (
    <Modal
      className={className}
      closeOnBackdropClick={closeOnBackdropClick}
      createInPortal={createInPortal}
      hideCloseButton
      label={dialogLabel}
      noContentWrapper
      onClose={onClose}
      open={open}
      parent={parent}
    >
      {dialogContent}
    </Modal>
  );
};

export default Dialog;
