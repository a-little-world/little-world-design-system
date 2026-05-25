import { Combobox } from '@base-ui/react/combobox';
import styled, { css } from 'styled-components';

import { INPUT_ERROR_CSS } from '../InputError/InputError';
import { BODY_5_CSS } from '../Text/styles';
import { InputHeight } from '../TextInput/TextInput';

export const COMBOBOX_MAX_WIDTH = '300px';

export const ComboboxWrapper = styled.div<{ $maxWidth?: string }>`
  position: relative;
  max-width: ${({ $maxWidth }) => $maxWidth || COMBOBOX_MAX_WIDTH};
  width: 100%;
`;

export const ComboboxInputGroup = styled(Combobox.InputGroup)<{
  $disabled: boolean;
  $hasError: boolean;
  $height?: string;
  $multiple?: boolean;
}>`
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: ${({ $multiple }) => ($multiple ? 'stretch' : 'center')};
  flex-wrap: ${({ $multiple }) => ($multiple ? 'wrap' : 'nowrap')};
  gap: ${({ theme, $multiple }) => ($multiple ? theme.spacing.xxxsmall : '0')};
  width: 100%;
  min-height: ${({ $height, $multiple }) => {
    if ($multiple) {
      return $height === InputHeight.Small ? '34px' : '40px';
    }

    return $height === InputHeight.Small ? '34px' : '40px';
  }};
  height: ${({ $height, $multiple }) => {
    if ($multiple) {
      return 'auto';
    }

    return $height === InputHeight.Small ? '34px' : '40px';
  }};
  padding: ${({ theme, $multiple }) =>
    $multiple
      ? `${theme.spacing.xxxsmall} calc(${theme.spacing.xlarge} + ${theme.spacing.small}) ${theme.spacing.xxxsmall} ${theme.spacing.xxxsmall}`
      : '0'};
  background-color: ${({ theme }) => theme.color.surface.primary};
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.color.border.subtle};
  margin-bottom: ${({ theme }) => theme.spacing.xxxxsmall};
  cursor: ${({ $multiple }) => ($multiple ? 'text' : 'default')};

  &:focus-within {
    outline: none;
    border-color: ${({ theme }) => theme.color.border.minimal};
  }

  ${({ $disabled }) =>
    $disabled &&
    css`
      background-color: ${({ theme }) => theme.color.surface.disabled};
    `}

  ${({ $hasError }) => $hasError && INPUT_ERROR_CSS}
`;

export const ComboboxChips = styled(Combobox.Chips)`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  align-self: stretch;
  gap: ${({ theme }) => theme.spacing.xxxsmall};
  flex: 1;
  min-width: 0;
`;

export const ComboboxChip = styled(Combobox.Chip)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: ${({ theme }) => theme.spacing.xxxsmall};
  max-width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.xxxsmall} 0
    ${({ theme }) => theme.spacing.xxsmall};
  border-radius: ${({ theme }) => theme.radius.xxxsmall};
  background-color: ${({ theme }) => theme.color.surface.secondary};
  color: ${({ theme }) => theme.color.text.secondary};
  ${BODY_5_CSS}
  outline: none;
  cursor: default;

  &[data-highlighted] {
    background-color: ${({ theme }) => theme.color.surface.bold};
    color: ${({ theme }) => theme.color.text.primary};
  }
`;

export const ComboboxChipRemove = styled(Combobox.ChipRemove)`
  all: unset;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: ${({ theme }) => theme.radius.xxsmall};
  cursor: pointer;
  color: inherit;

  &:hover {
    background-color: ${({ theme }) => theme.color.surface.tertiary};
  }
`;

export const ComboboxChipOverflow = styled.span`
  ${BODY_5_CSS}
  display: inline-flex;
  align-items: center;
  align-self: stretch;
  color: ${({ theme }) => theme.color.text.tertiary};
  padding: 0 ${({ theme }) => theme.spacing.xxsmall};
`;

export const ComboboxInput = styled(Combobox.Input)<{
  $hasError: boolean;
  $height?: string;
  $multiple?: boolean;
}>`
  box-sizing: border-box;
  flex: 1;
  min-width: ${({ $multiple }) => ($multiple ? '3rem' : '0')};
  height: ${({ $multiple }) => ($multiple ? 'auto' : '100%')};
  align-self: ${({ $multiple }) => ($multiple ? 'stretch' : 'auto')};
  margin: 0;
  padding: ${({ theme, $height, $multiple }) => {
    if ($multiple) {
      return '0';
    }

    return $height === InputHeight.Small
      ? `0 ${theme.spacing.xlarge} 0 ${theme.spacing.xxsmall}`
      : `0 calc(${theme.spacing.xlarge} + ${theme.spacing.small}) 0 ${theme.spacing.xsmall}`;
  }};
  border: none;
  border-radius: 5px;
  background: transparent;
  color: ${({ theme }) => theme.color.text.secondary};
  ${BODY_5_CSS}

  &::placeholder {
    color: ${({ theme }) => theme.color.text.tertiary};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const ComboboxActionButtons = styled.div<{ $multiple?: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 100%;
  padding-right: ${({ theme }) => theme.spacing.xxsmall};
`;

const actionButtonStyles = css`
  all: unset;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 100%;
  cursor: pointer;
  color: ${({ theme }) => theme.color.text.secondary};

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  svg {
    color: currentColor;
  }
`;

export const ComboboxClear = styled(Combobox.Clear)`
  ${actionButtonStyles}
`;

export const ComboboxTrigger = styled(Combobox.Trigger)`
  ${actionButtonStyles}
`;

export const ComboboxPositioner = styled(Combobox.Positioner)`
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  outline: none;
`;

export const ComboboxPopup = styled(Combobox.Popup)`
  box-sizing: border-box;
  width: var(--anchor-width);
  max-width: var(--available-width);
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.surface.elevated};
  border-radius: 6px;
  box-shadow:
    0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  transform-origin: var(--transform-origin);
  transition:
    opacity 0.1s,
    transform 0.1s;

  &[data-starting-style],
  &[data-ending-style] {
    opacity: 0;
    transform: scale(0.95);
  }
`;

export const ComboboxList = styled(Combobox.List)`
  box-sizing: border-box;
  overflow-y: auto;
  overscroll-behavior: contain;
  outline: none;
  max-height: min(200px, var(--available-height));
  padding: ${({ theme }) => theme.spacing.xxsmall}
    ${({ theme }) => theme.spacing.xxxsmall};

  &[data-empty] {
    padding: 0;
  }
`;

export const ComboboxItem = styled(Combobox.Item)`
  font-size: 13px;
  line-height: 1;
  border-radius: 3px;
  display: flex;
  align-items: center;
  min-height: 25px;
  padding: 0 ${({ theme }) => theme.spacing.large} 0
    ${({ theme }) => theme.spacing.medium};
  position: relative;
  user-select: none;
  cursor: default;
  color: ${({ theme }) => theme.color.text.secondary};

  &[data-highlighted] {
    background-color: ${({ theme }) => theme.color.surface.accent};
    color: ${({ theme }) => theme.color.text.primary};
  }

  &:disabled {
    color: ${({ theme }) => theme.color.text.tertiary};
    pointer-events: none;
  }
`;

export const ComboboxItemIndicator = styled(Combobox.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const ComboboxEmpty = styled.div`
  padding: ${({ theme }) => theme.spacing.small};
  font-size: 13px;
  line-height: 1;
  color: ${({ theme }) => theme.color.text.tertiary};
`;
