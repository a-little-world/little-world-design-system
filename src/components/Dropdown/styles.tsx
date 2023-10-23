import * as Select from '@radix-ui/react-select';
import styled from 'styled-components';
import tokens from '../../tokens';
import { coreColors } from '../../tokens/core';
import { BODY_3_CSS } from '../Text/styles';
import { INPUT_ERROR_CSS } from '../InputError/InputError';

export const DROPDOWN_MAX_WIDTH = '300px';

export const DropdownWrapper = styled.div`
  position: relative;
  max-width: ${DROPDOWN_MAX_WIDTH};
  width: 100%;
`;

export const SelectTrigger = styled(Select.Trigger)<{ $hasError: boolean }>`
  all: unset;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: ${tokens.spacing.xxsmall} ${tokens.spacing.small};
  line-height: 1.25;
  height: 33px;
  gap: ${tokens.spacing.xsmall};
  background-color: ${tokens.color.theme.light.surface.secondary};
  border-radius: 5px;
  border: 2px solid ${tokens.color.theme.light.border.subtle};
  width: 100%;
  color: ${tokens.color.theme.light.text.secondary};
  margin-bottom: ${tokens.spacing.xxxxsmall};

  > span {
    ${BODY_3_CSS}

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    opacity: 80%;
  }

  svg {
    color: ${coreColors.gray40};
  }

  &[data-placeholder] {
    background-color: ${tokens.color.theme.light.surface.primary};
    color: ${tokens.color.theme.light.text.tertiary};

    svg {
      color: ${coreColors.orange};
    }
  }

  ${({ $hasError }) => $hasError && INPUT_ERROR_CSS}
`;

export const SelectValue = styled(Select.Value)`
  &[data-placeholder] {
    background-color: ${tokens.color.theme.light.surface.primary};
  }
`;

export const SelectContent = styled(Select.Content)`
  overflow: hidden;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  z-index: 1;
`;

export const SelectViewport = styled(Select.Viewport)`
  padding: ${tokens.spacing.xxsmall} ${tokens.spacing.xxxsmall};
  max-height: 200px;
  overflow: scroll;
`;

export const SelectItem = styled(Select.Item)`
  font-size: 13px;
  line-height: 1;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 ${tokens.spacing.large} 0 ${tokens.spacing.medium};
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
