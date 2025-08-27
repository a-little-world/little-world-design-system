import React from 'react';
import styled, { css } from 'styled-components';
import {
  StatusBaseProps,
  StatusTypes,
} from '@a-little-world/little-world-design-system-core';
import Text from '../Text/Text';
import { ExclamationIcon } from '../Icon';

const StatusMessageWrapper = styled.div<{
  $type: StatusTypes;
  $visible?: boolean;
  $withBorder?: boolean;
  $withIcon?: boolean;
}>`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxsmall};
  width: 100%;
  min-height: ${({ theme }) => theme.spacing.xlarge};
  padding: ${({ theme, $withBorder }) =>
    $withBorder ? theme.spacing.small : theme.spacing.xxsmall};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: ${({ $visible }) => ($visible ? 'opacity 1s' : 'none')};
  text-align: ${({ $withIcon }) => ($withIcon ? 'left' : 'center')};
  margin: ${({ theme, $withBorder }) =>
      $withBorder ? 0 : theme.spacing.xxsmall}
    0;
  border-radius: ${({ theme, $withBorder }) =>
    $withBorder ? theme.radius.xxsmall : 0};

  ${({ $type, theme, $withBorder }) => {
    if ($type === StatusTypes.Error)
      return css`
        background: ${theme.color.surface.error};
        color: ${theme.color.text.error};
        border: ${$withBorder
          ? `1px solid ${theme.color.border.error}`
          : 'none'};
      `;

    if ($type === StatusTypes.Success)
      return css`
        background: ${theme.color.surface.success};
        color: ${theme.color.text.success};
        border: ${$withBorder
          ? `1px solid ${theme.color.border.success}`
          : 'none'};
      `;

    if ($type === StatusTypes.Warning)
      return css`
        background: ${theme.color.surface.warning};
        color: ${theme.color.text.warning};
        border: ${$withBorder
          ? `1px solid ${theme.color.border.warning}`
          : 'none'};
      `;

    // default is Info type
    return css`
      background: ${theme.color.surface.subtle};
      color: ${theme.color.text.info};
      border: ${$withBorder ? `1px solid ${theme.color.border.info}` : 'none'};
    `;
  }})
`;

const StyledIcon = styled.svg`
  flex-shrink: 0;
  margin-top: 3px;
`;

const STATUS_ICONS = {
  [StatusTypes.Error]: {
    Icon: ExclamationIcon,
    label: 'error icon',
  },
  [StatusTypes.Warning]: {
    Icon: ExclamationIcon,
    label: 'warning icon',
  },
};

const StatusMessage = ({
  className,
  type,
  visible,
  children,
  withBorder,
}: StatusBaseProps) => {
  const icon = STATUS_ICONS[type as keyof typeof STATUS_ICONS];
  const Icon = withBorder && icon?.Icon;
  return (
    <StatusMessageWrapper
      className={className}
      $type={type}
      $visible={visible}
      $withBorder={withBorder}
      $withIcon={!!Icon}
    >
      {Icon && (
        <StyledIcon as={Icon} label={icon.label} width={18} height={18} />
      )}
      <Text>{children}</Text>
    </StatusMessageWrapper>
  );
};

export default StatusMessage;
