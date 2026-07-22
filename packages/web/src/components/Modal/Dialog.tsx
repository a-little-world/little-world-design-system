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
  closeOnBackdropClick?: boolean;
  contentAlign?: FlexAlignType;
  createInPortal?: boolean;
  footer?: React.ReactNode;
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
  closeOnBackdropClick,
  contentAlign,
  createInPortal,
  footer,
  locked,
  onClose,
  open,
  parent,
  size = DialogSize.Medium,
  title,
}: DialogProps) => {
  const theme = useTheme();

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
                <CloseIcon label={CLOSE_BUTTON_LABEL} height="20" width="20" />
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
