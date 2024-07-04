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

export const CheckboxWrapper = styled.div<{ $checked: boolean }>`
  padding: ${({ theme }) => theme.spacing.xxsmall};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxsmall};
  border: 1px solid
    ${({ theme, $checked }) =>
      $checked ? theme.color.border.selected : theme.color.border.moderate};
  border-radius: ${({ theme }) => theme.radius.xxsmall};

  ${({ $checked, theme }) =>
    $checked &&
    css`
      background: ${theme.color.surface.accent};
    `};
`;

export const StyledCheckbox = styled(Checkbox)<{
  checked: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  ${({ checked, theme }) =>
    checked &&
    css`
      border-color: ${theme.color.border.selected};
    `};
`;
