import * as RadixPopover from '@radix-ui/react-popover';
import styled, { css } from 'styled-components';

import {
  InputHeight,
  InputWidth,
} from '@a-little-world/little-world-design-system-core';
import { INPUT_ERROR_CSS } from '../InputError/InputError';
import { INPUT_CSS } from '../TextInput/styles';
import { POPOVER_CONTENT_CSS } from '../Popover/styles';
import { pixelate } from '../../utils/styles';

export const TimePickerWrapper = styled.div<{ $width: InputWidth }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ $width }) => pixelate($width)};
  position: relative;
`;

export const TimePickerTrigger = styled.button<{
  $hasError: boolean;
  $height?: InputHeight;
  $disabled?: boolean;
  $hasValue: boolean;
}>`
  all: unset;
  box-sizing: border-box;
  ${INPUT_CSS}
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  color: ${({ theme, $hasValue }) =>
    $hasValue ? theme.color.text.primary : theme.color.text.tertiary};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.border.accent};
    outline-offset: 1px;
  }

  ${({ $disabled, theme }) =>
    $disabled &&
    css`
      background-color: ${theme.color.surface.disabled};
      color: ${theme.color.text.disabled};
      pointer-events: none;
    `}

  ${({ $hasError }) => $hasError && INPUT_ERROR_CSS}
`;

export const TriggerIconWrapper = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.text.secondary};
  flex-shrink: 0;
`;

export const TimePickerPopoverContent = styled(RadixPopover.Content)`
  ${POPOVER_CONTENT_CSS}
  background-color: ${({ theme }) => theme.color.surface.elevated};
  padding: ${({ theme }) => theme.spacing.small};
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  width: 200px;
`;

export const TimeColumnsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2px;
`;

export const TimeColumn = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 200px;
  flex: 1;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.border.subtle};
    border-radius: 4px;
  }
`;

export const TimeOption = styled.button<{ $isSelected: boolean }>`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xxxxsmall} 0;
  font-size: 0.875rem;
  border-radius: ${({ theme }) => theme.radius.xxsmall};
  cursor: pointer;
  font-weight: ${({ $isSelected }) => ($isSelected ? '600' : '400')};
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.color.text.button : theme.color.text.primary};
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.color.surface.accent : 'transparent'};
  transition: background-color 0.1s;

  &:hover {
    background-color: ${({ theme, $isSelected }) =>
      $isSelected ? theme.color.surface.accent : theme.color.surface.secondary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.border.accent};
    outline-offset: 1px;
  }
`;

export const ColumnDivider = styled.span`
  display: flex;
  align-items: center;
  padding: 6px 2px 0;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.text.secondary};
  flex-shrink: 0;
`;

export const AMPMContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxxxsmall};
  justify-content: center;
  padding-left: ${({ theme }) => theme.spacing.xxsmall};
  padding-top: 2px;
`;

export const AMPMButton = styled.button<{ $isSelected: boolean }>`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xxxxsmall}
    ${({ theme }) => theme.spacing.xsmall};
  font-size: 0.8125rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.xxsmall};
  cursor: pointer;
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.color.text.button : theme.color.text.secondary};
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.color.surface.accent : theme.color.surface.secondary};
  transition: background-color 0.1s;

  &:hover {
    background-color: ${({ theme, $isSelected }) =>
      $isSelected ? theme.color.surface.accent : theme.color.surface.tertiary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.border.accent};
    outline-offset: 1px;
  }
`;
