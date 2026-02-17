import {
  TOAST_DEFAULT_DURATION,
  ToastBaseProps,
} from '@a-little-world/little-world-design-system-core';
import { Close } from '@radix-ui/react-toast';
import React, { useState } from 'react';

import Button, { ButtonSizes, ButtonVariations } from '../Button/Button';
import { InfoIcon } from '../Icon';
import {
  ToastAction,
  ToastCloseButton,
  ToastCloseIcon,
  ToastContent,
  ToastDescription,
  ToastHeader,
  ToastHeadline,
  ToastRoot,
  ToastTitle,
} from './styles';

export const TOAST_ICON_SIZE = '24px';

const Toast: React.FC<ToastBaseProps> = ({
  className,
  icon,
  headline,
  title,
  description,
  timestamp,
  actionText,
  actionAltText,
  duration = TOAST_DEFAULT_DURATION,
  showClose = true,
  onClose,
  onDismiss,
  onClick,
  onActionClick,
}: ToastBaseProps) => {
  const actionWellDefined =
    !!actionText === !!actionAltText && !!actionText === !!onActionClick;
  if (!actionWellDefined) {
    throw new Error(
      'The action text, click event and alt text must all be set or unset',
    );
  }

  const [open, setOpen] = useState(true);

  function closeToast(): void {
    setOpen(false);
  }

  function onClickInternal(
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ): void {
    event.stopPropagation();
    onClick?.();
    closeToast();
  }

  function onDismissClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation(); // prevent toast onClick event from firing
    onDismiss?.();
    closeToast();
  }

  function onActionClickInternal(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    onActionClick?.();
    closeToast();
  }

  function onOpenChange(open: boolean): void {
    if (!open) {
      onClose?.();
      closeToast();
    }
  }

  return (
    <div className={className}>
      <ToastRoot
        className="ToastRoot"
        open={open}
        onOpenChange={onOpenChange}
        duration={duration}
        onClick={onClickInternal}
      >
        {showClose && (
          <Close asChild>
            <ToastCloseButton
              variation={ButtonVariations.Icon}
              size={ButtonSizes.Small}
              onClick={onDismissClick}
            >
              <ToastCloseIcon
                label={'ToastCloseIcon'}
                width={TOAST_ICON_SIZE}
                height={TOAST_ICON_SIZE}
              ></ToastCloseIcon>
            </ToastCloseButton>
          </Close>
        )}
        {headline && (
          <ToastHeader>
            <ToastHeadline>
              {icon ?? (
                <InfoIcon
                  label={'ToastInfoIcon'}
                  width={TOAST_ICON_SIZE}
                  height={TOAST_ICON_SIZE}
                />
              )}
              <span>{headline}</span>
            </ToastHeadline>
            <div>{timestamp}</div>
          </ToastHeader>
        )}
        <ToastContent>
          {title && <ToastTitle className="ToastTitle">{title}</ToastTitle>}
          {description && <ToastDescription>{description}</ToastDescription>}
          {actionText && actionAltText && onActionClick && (
            <ToastAction
              className="ToastAction"
              asChild
              altText={actionAltText}
            >
              <Button
                variation={ButtonVariations.Basic}
                size={ButtonSizes.Small}
                onClick={onActionClickInternal}
              >
                {actionText}
              </Button>
            </ToastAction>
          )}
        </ToastContent>
      </ToastRoot>
    </div>
  );
};

export default Toast;
