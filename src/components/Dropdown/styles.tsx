import { ForwardedRef } from 'react';
import * as Select from '@radix-ui/react-select';
import styled, { css } from 'styled-components';
import tokens from '../../tokens';
import { coreColors } from '../../tokens/core';
import { BODY_3_CSS } from '../Text/styles';

export const SelectTrigger = styled(Select.Trigger)`
  all: unset;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  line-height: 1;
  height: 33px;
  gap: 8px;
  background-color: ${tokens.color.theme.light.surface.secondary};
  border-radius: 5px;
  border: 2px solid ${tokens.color.theme.light.border.subtle};
  width: 100%;
  max-width: 300px;
  color: ${tokens.color.theme.light.text.secondary};

  > span {
    ${BODY_3_CSS}
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
`;

export const SelectValue = styled(Select.Value)`
  font-weight: 600;

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
`;

export const SelectViewport = styled(Select.Viewport)`
  padding: 5px;
`;

export const SelectItem = styled(Select.Item)`
  font-size: 13px;
  line-height: 1;
  color: var(--violet11);
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 35px 0 25px;
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
