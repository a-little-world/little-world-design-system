import React from 'react';

import {
  StatusBaseProps,
  StatusTypes,
} from '@a-little-world/little-world-design-system-core';
import { ExclamationIcon } from '../Icon';
import { StatusMessageText, StatusMessageWrapper } from './styles';

const ICON_SIZE = 18;

const STATUS_ICONS = {
  [StatusTypes.Error]: { Icon: ExclamationIcon, label: 'error icon' },
  [StatusTypes.Warning]: { Icon: ExclamationIcon, label: 'warning icon' },
};

const StatusMessage: React.FC<StatusBaseProps> = ({
  type,
  visible,
  children,
  withBorder,
}) => {
  const iconEntry = STATUS_ICONS[type as keyof typeof STATUS_ICONS];
  const Icon = withBorder && iconEntry?.Icon;
  return (
    <StatusMessageWrapper type={type} visible={visible} withBorder={withBorder}>
      {Icon && (
        <Icon label={iconEntry.label} width={ICON_SIZE} height={ICON_SIZE} />
      )}
      <StatusMessageText type={type} withBorder={withBorder}>
        {children}
      </StatusMessageText>
    </StatusMessageWrapper>
  );
};

export default StatusMessage;

/**
 * Semantic aliases for `StatusMessage`. Same component, clearer intent at the
 * call site:
 * - `Alert` — standalone / banner-style status notifications.
 * - `FormMessage` — inline form validation feedback.
 */
export { StatusMessage as Alert, StatusMessage as FormMessage };
export type {
  StatusBaseProps as AlertProps,
  StatusBaseProps as FormMessageProps,
};
