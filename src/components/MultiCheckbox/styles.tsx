import styled, { css } from 'styled-components';

import tokens from '../../tokens';
import Checkbox from '../Checkbox/Checkbox';
import Text from '../Text/Text';

export const MultiCheckboxWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xxsmall};
  margin-bottom: ${({ theme }) => theme.spacing.xxsmall};
`;

export const CheckboxWrapper = styled.div<{
  $checked: boolean;
  $error?: boolean;
}>`
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xxsmall};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxsmall};
  border: 1px solid
    ${({ theme, $checked, $error }) =>
      $checked
        ? $error
          ? theme.color.border.error
          : theme.color.border.selected
        : theme.color.border.accent};
  border-radius: ${({ theme }) => theme.radius.xxsmall};
  background: ${({ $checked, $error, theme }) =>
    $checked
      ? $error
        ? theme.color.surface.error
        : theme.color.surface.accent
      : theme.color.surface.subtle};
`;

export const StyledCheckbox = styled(Checkbox)<{
  checked: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  button {
    border-color: ${({ checked, theme }) =>
      checked ? theme.color.border.selected : theme.color.border.moderate};
  }
`;
