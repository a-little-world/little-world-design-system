import * as Popover from '@radix-ui/react-popover';
import styled, { css } from 'styled-components';

import { INPUT_ERROR_CSS } from '../InputError/InputError';
import { BODY_5_CSS } from '../Text/styles';
import { InputHeight } from '../TextInput/TextInput';

export const SEARCHABLE_SELECT_MAX_WIDTH = '300px';

export const SearchableSelectWrapper = styled.div<{ $maxWidth?: string }>`
  position: relative;
  max-width: ${({ $maxWidth }) => $maxWidth || SEARCHABLE_SELECT_MAX_WIDTH};
  width: 100%;
`;

export const SearchableSelectTrigger = styled(Popover.Trigger)<{
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
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.color.border.subtle};
  width: 100%;
  color: ${({ theme }) => theme.color.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xxxxsmall};
  cursor: pointer;

  &:hover:not(:disabled) {
    opacity: 80%;
  }

  svg {
    color: ${({ theme }) => theme.color.text.secondary};
    flex-shrink: 0;
  }

  ${({ $disabled }) =>
    $disabled &&
    css`
      background-color: ${({ theme }) => theme.color.surface.disabled};
      color: ${({ theme }) => theme.color.text.disabled};
      cursor: not-allowed;
      pointer-events: none;
    `}

  ${({ $hasError }) => $hasError && INPUT_ERROR_CSS}
`;

export const SearchableSelectValueText = styled.span<{ $isPlaceholder: boolean }>`
  ${BODY_5_CSS}
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme, $isPlaceholder }) =>
    $isPlaceholder ? theme.color.text.tertiary : theme.color.text.secondary};
  flex: 1;
  min-width: 0;
`;

export const SearchableSelectIcon = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.text.highlight};
`;

export const SearchableSelectContent = styled(Popover.Content)`
  box-sizing: border-box;
  width: var(--radix-popover-trigger-width);
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.surface.elevated};
  border-radius: 6px;
  box-shadow:
    0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  z-index: ${({ theme }) => theme.zIndex.dropdown};
`;

export const SearchableSelectSearchWrapper = styled.div`
  padding: ${({ theme }) =>
    `${theme.spacing.xxsmall} ${theme.spacing.xxxsmall}`};
  border-bottom: 1px solid ${({ theme }) => theme.color.border.subtle};
`;

export const SearchableSelectSearchInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.color.border.subtle};
  border-radius: 5px;
  padding: ${({ theme }) => `${theme.spacing.xxxsmall} ${theme.spacing.xxsmall}`};
  background-color: ${({ theme }) => theme.color.surface.primary};
  color: ${({ theme }) => theme.color.text.secondary};
  ${BODY_5_CSS}

  &::placeholder {
    color: ${({ theme }) => theme.color.text.tertiary};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.border.minimal};
  }
`;

export const SearchableSelectList = styled.ul`
  list-style: none;
  margin: 0;
  padding: ${({ theme }) => theme.spacing.xxsmall}
    ${({ theme }) => theme.spacing.xxxsmall};
  max-height: 200px;
  overflow-y: auto;
  overscroll-behavior: contain;
`;

export const SearchableSelectItem = styled.li<{ $isSelected: boolean }>`
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

  &:hover {
    background-color: ${({ theme }) => theme.color.surface.accent};
    color: ${({ theme }) => theme.color.text.primary};
  }

  ${({ $isSelected, theme }) =>
    $isSelected &&
    css`
      font-weight: 600;
      color: ${theme.color.text.primary};
    `}
`;

export const SearchableSelectItemIndicator = styled.span`
  position: absolute;
  left: 0;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const SearchableSelectEmpty = styled.div`
  padding: ${({ theme }) => theme.spacing.small};
  font-size: 13px;
  line-height: 1;
  color: ${({ theme }) => theme.color.text.tertiary};
  text-align: center;
`;
