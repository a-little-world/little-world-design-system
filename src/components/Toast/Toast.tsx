import { Close } from '@radix-ui/react-toast';
import React, { ReactNode } from 'react';

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

export interface ToastProps {
  className?: string;
  icon?: ReactNode;
  headline: string;
  title?: string;
  description?: string;
  timestamp?: string;
  actionText?: string;
  actionAltText?: string;
  duration?: number;
  onClose?: () => void;
  onDismiss?: () => void;
  onClick?: () => void;
  onActionClick?: () => void;
}

const TOAST_DEFAULT_DURATION = 3000;
export const TOAST_ICON_SIZE = '24px';

const Toast: React.FC<ToastProps> = ({
  className,
  icon,
  headline,
  title,
  description,
  timestamp,
  actionText,
  actionAltText,
  duration = TOAST_DEFAULT_DURATION,
  onClose,
  onDismiss,
  onClick,
  onActionClick,
}: ToastProps) => {
  const actionWellDefined =
    !!actionText === !!actionAltText && !!actionText === !!onActionClick;
  if (!actionWellDefined) {
    throw new Error(
      'The action text, click event and alt text must all be set or unset',
    );
  }

  function dismissToast(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation(); // prevent toast onClick event from firing
    onDismiss?.();
  }

  function onActionClickInternal(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    onActionClick?.();
  }

  function onOpenChange(open: boolean): void {
    if (!open) {
      onClose?.();
    }
  }

  return (
    <div className={className}>
      <ToastRoot
        className="ToastRoot"
        defaultOpen={true}
        onOpenChange={onOpenChange}
        duration={duration}
        onClick={onClick}
      >
        <Close asChild>
          <ToastCloseButton
            variation={ButtonVariations.Icon}
            size={ButtonSizes.Small}
            onClick={dismissToast}
          >
            <ToastCloseIcon
              label={'ToastCloseIcon'}
              labelId={'ToastCloseIcon'}
              width={TOAST_ICON_SIZE}
              height={TOAST_ICON_SIZE}
            ></ToastCloseIcon>
          </ToastCloseButton>
        </Close>
        <ToastHeader>
          <ToastHeadline>
            {icon ?? (
              <InfoIcon
                label={'ToastInfoIcon'}
                labelId={'ToastInfoIcon'}
                width={TOAST_ICON_SIZE}
                height={TOAST_ICON_SIZE}
              />
            )}
            <span>{headline}</span>
          </ToastHeadline>
          <div>{timestamp}</div>
        </ToastHeader>
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
