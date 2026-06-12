import * as Select from '@radix-ui/react-select';
import styled, { css } from 'styled-components';

import { INPUT_ERROR_CSS } from '../InputError/InputError';
import { BODY_5_CSS } from '../Text/styles';
import { InputHeight } from '../TextInput/TextInput';

export const SELECT_MAX_WIDTH = '300px';

export const SelectWrapper = styled.div<{ $maxWidth?: string }>`
  position: relative;
  max-width: ${({ $maxWidth }) => $maxWidth || SELECT_MAX_WIDTH};
  width: 100%;
`;

export const SelectTrigger = styled(Select.Trigger)<{
  $disabled?: boolean;
  $hasError: boolean;
  $height?: string;
}>`
  all: unset;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme, $height }) =>
    $height === InputHeight.Small
      ? theme.spacing.xxsmall
      : `${theme.spacing.xxsmall} ${theme.spacing.xsmall}`};
  line-height: 1.25;
  height: ${({ $height }) => ($height === InputHeight.Small ? '34px' : '40px')};
  gap: ${({ theme }) => theme.spacing.xsmall};
  background-color: ${({ theme }) => theme.color.surface.primary};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.border.subtle};
  width: 100%;
  color: ${({ theme }) => theme.color.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xxxxsmall};
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease,
    background-color 0.15s ease;

  > span:first-child,
  > span:first-child p {
    ${BODY_5_CSS}

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  svg {
    color: ${({ theme }) => theme.color.text.secondary};
  }

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.color.border.minimal};
  }

  &:focus-visible {
    outline: none;
    border-color: #1976d2;
    box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.18);
  }

  &[data-state='open'] {
    border-color: #1976d2;
  }

  &[data-placeholder] {
    background-color: ${({ theme }) => theme.color.surface.primary};
    color: ${({ theme }) => theme.color.text.tertiary};

    svg {
      color: ${({ theme }) => theme.color.text.highlight};
    }
  }

  ${({ $disabled }) =>
    $disabled &&
    css`
      &:disabled {
        background-color: ${({ theme }) => theme.color.surface.disabled};
        color: ${({ theme }) => theme.color.text.disabled};
        border-color: ${({ theme }) => theme.color.border.subtle};
        cursor: not-allowed;
      }
    `}
  ${({ $hasError }) => $hasError && INPUT_ERROR_CSS}
`;

export const SelectValue = styled(Select.Value)`
  &[data-placeholder] {
    background-color: ${({ theme }) => theme.color.surface.primary};
  }
`;

export const SelectContent = styled(Select.Content)`
  box-sizing: border-box;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.surface.elevated};
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  width: var(--radix-select-trigger-width);
  min-width: var(--radix-select-trigger-width);
  max-width: var(--radix-select-trigger-width);
  max-height: var(--radix-select-content-available-height);
  box-shadow:
    0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14),
    0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  z-index: ${({ theme }) => theme.zIndex.dropdown};
`;

export const SelectViewport = styled(Select.Viewport)`
  box-sizing: border-box;
  padding: 8px 0;
  max-height: inherit;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const SelectIcon = styled(Select.Icon)`
  display: flex;
`;

export const SelectItem = styled(Select.Item)`
  font-size: 14px;
  line-height: 1.5;
  border-radius: 0;
  display: flex;
  align-items: center;
  min-height: 48px;
  padding: 0 16px 0 16px;
  position: relative;
  user-select: none;
  box-sizing: border-box;

  &[data-highlighted] {
    outline: none;
    background-color: rgba(0, 0, 0, 0.04);
  }

  &[data-state='checked'] {
    background-color: rgba(25, 118, 210, 0.08);
  }

  &:disabled {
    color: gray;
    pointer-events: none;
  }
`;

export const SelectItemIndicator = styled(Select.ItemIndicator)`
  position: absolute;
  right: 12px;
  width: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
