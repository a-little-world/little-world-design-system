import * as Select from '@radix-ui/react-select';
import styled from 'styled-components';

import { INPUT_ERROR_CSS } from '../InputError/InputError';
import { BODY_5_CSS } from '../Text/styles';
import { InputHeight } from '../TextInput/TextInput';

export const DROPDOWN_MAX_WIDTH = '300px';

export const DropdownWrapper = styled.div<{ $maxWidth?: string }>`
  position: relative;
  max-width: ${({ $maxWidth }) => $maxWidth || DROPDOWN_MAX_WIDTH};
  width: 100%;
`;

export const SelectTrigger = styled(Select.Trigger)<{
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

  > span:first-child,
  > span:first-child p {
    ${BODY_5_CSS}

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    opacity: 80%;
  }

  svg {
    color: ${({ theme }) => theme.color.text.secondary};
  }

  &[data-placeholder] {
    background-color: ${({ theme }) => theme.color.surface.primary};
    color: ${({ theme }) => theme.color.text.tertiary};

    svg {
      color: ${({ theme }) => theme.color.text.highlight};
    }
  }

  ${({ $hasError }) => $hasError && INPUT_ERROR_CSS}
`;

export const SelectValue = styled(Select.Value)`
  &[data-placeholder] {
    background-color: ${({ theme }) => theme.color.surface.primary};
  }
`;

export const SelectContent = styled(Select.Content)`
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.surface.primary};
  border-radius: 6px;
  box-shadow:
    0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  z-index: 100;
`;

export const SelectViewport = styled(Select.Viewport)`
  padding: ${({ theme }) => theme.spacing.xxsmall}
    ${({ theme }) => theme.spacing.xxxsmall};
  max-height: 200px;
  overflow: scroll;
`;

export const SelectIcon = styled(Select.Icon)`
  display: flex;
`;

export const SelectItem = styled(Select.Item)`
  font-size: 13px;
  line-height: 1;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 ${({ theme }) => theme.spacing.large} 0
    ${({ theme }) => theme.spacing.medium};
  position: relative;
  user-select: none;

  &:disabled {
    color: gray;
    pointer-events: none;
  }
`;

export const SelectItemIndicator = styled(Select.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
