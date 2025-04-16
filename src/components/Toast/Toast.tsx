import * as RadixToast from '@radix-ui/react-toast';
import React, { ReactNode, useState } from 'react';

import { ButtonSizes, ButtonVariations } from '../Button/Button';
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
  actionNode?: ReactNode;
  actionAltText?: string;
  duration?: number;
  onClose?: () => void;
  onDismiss?: () => void;
  onClick?: () => void;
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
  actionNode,
  actionAltText,
  duration = TOAST_DEFAULT_DURATION,
  onClose,
  onDismiss,
  onClick,
}: ToastProps) => {
  const [closeButtonVisible, setCloseButtonVisible] = useState(false);

  if (!!actionNode !== !!actionAltText) {
    throw new Error('The action node and altText must both be set or unset');
  }

  function dismissToast(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation(); // prevent toast onClick event from firing
    onDismiss?.();
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
        onPointerEnter={() => setCloseButtonVisible(true)}
        onPointerLeave={() => setCloseButtonVisible(false)}
        onClick={onClick}
      >
        <RadixToast.Close asChild>
          <ToastCloseButton
            variation={ButtonVariations.Icon}
            size={ButtonSizes.Small}
            data-visible={closeButtonVisible}
            onClick={dismissToast}
          >
            <ToastCloseIcon
              label={'ToastCloseIcon'}
              labelId={'ToastCloseIcon'}
              width={TOAST_ICON_SIZE}
              height={TOAST_ICON_SIZE}
            ></ToastCloseIcon>
          </ToastCloseButton>
        </RadixToast.Close>
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
          {actionNode && actionAltText && (
            <ToastAction
              className="ToastAction"
              asChild
              altText={actionAltText}
            >
              {actionNode}
            </ToastAction>
          )}
        </ToastContent>
      </ToastRoot>
    </div>
  );
};

export default Toast;
