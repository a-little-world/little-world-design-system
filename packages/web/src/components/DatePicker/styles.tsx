import * as RadixPopover from '@radix-ui/react-popover';
import styled, { css } from 'styled-components';

import { InputHeight, InputWidth } from '@a-little-world/little-world-design-system-core';
import { INPUT_ERROR_CSS } from '../InputError/InputError';
import { INPUT_CSS } from '../TextInput/styles';
import { POPOVER_CONTENT_CSS } from '../Popover/styles';
import { pixelate } from '../../utils/styles';

export const DatePickerWrapper = styled.div<{ $width: InputWidth }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ $width }) => pixelate($width)};
  position: relative;
`;

export const DatePickerTrigger = styled.button<{
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

export const CalendarPopoverContent = styled(RadixPopover.Content)`
  ${POPOVER_CONTENT_CSS}
  background-color: ${({ theme }) => theme.color.surface.elevated};
  padding: ${({ theme }) => theme.spacing.small};
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  width: 280px;
  max-width: calc(100vw - 16px);
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.xsmall};
`;

export const CalendarNavButton = styled.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: ${({ theme }) => theme.radius.xxsmall};
  cursor: pointer;
  color: ${({ theme }) => theme.color.text.secondary};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.color.surface.secondary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.border.accent};
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;

export const CalendarMonthYear = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.text.primary};
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
`;

export const CalendarDayLabel = styled.div`
  text-align: center;
  font-size: 0.6875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.text.tertiary};
  padding: ${({ theme }) => theme.spacing.xxxxsmall} 0;
  text-transform: uppercase;
`;

export const CalendarDay = styled.button<{
  $isCurrentMonth: boolean;
  $isSelected: boolean;
  $isToday: boolean;
  $isDisabled: boolean;
}>`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1;
  font-size: 0.8125rem;
  border-radius: ${({ theme }) => theme.radius.xxsmall};
  cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${({ $isDisabled }) => ($isDisabled ? 'none' : 'auto')};
  transition: background-color 0.1s;

  color: ${({ theme, $isCurrentMonth, $isDisabled, $isSelected }) =>
    $isDisabled
      ? theme.color.text.disabled
      : $isSelected
        ? theme.color.text.button
        : $isCurrentMonth
          ? theme.color.text.primary
          : theme.color.text.quaternary};

  background-color: ${({ theme, $isSelected, $isToday }) =>
    $isSelected
      ? theme.color.surface.accent
      : $isToday
        ? theme.color.surface.secondary
        : 'transparent'};

  font-weight: ${({ $isSelected, $isToday }) =>
    $isSelected || $isToday ? '600' : '400'};

  &:hover {
    background-color: ${({ theme, $isSelected }) =>
      $isSelected ? theme.color.surface.accent : theme.color.surface.secondary};
  }
`;
