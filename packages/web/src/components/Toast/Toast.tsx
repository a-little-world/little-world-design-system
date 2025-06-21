import { Close } from "@radix-ui/react-toast";
import React from "react";
import { ToastBaseProps, TOAST_DEFAULT_DURATION } from "@a-little-world/little-world-design-system-core";

import Button, { ButtonSizes, ButtonVariations } from "../Button/Button";
import { InfoIcon } from "../Icon";
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
} from "./styles";

export const TOAST_ICON_SIZE = "24px";

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
  onClose,
  onDismiss,
  onClick,
  onActionClick,
}: ToastBaseProps) => {
  const actionWellDefined =
    !!actionText === !!actionAltText && !!actionText === !!onActionClick;
  if (!actionWellDefined) {
    throw new Error(
      "The action text, click event and alt text must all be set or unset"
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
              label={"ToastCloseIcon"}
              width={TOAST_ICON_SIZE}
              height={TOAST_ICON_SIZE}
            ></ToastCloseIcon>
          </ToastCloseButton>
        </Close>
        <ToastHeader>
          <ToastHeadline>
            {icon ?? (
              <InfoIcon
                label={"ToastInfoIcon"}
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
