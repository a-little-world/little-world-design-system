import * as Checkbox from '@radix-ui/react-checkbox';
import styled, { css } from 'styled-components';
import tokens from '../../tokens';
import Label from '../Label/Label';

const ITEM_WIDTH = '13px';

export const CheckboxWrapper = styled.div``;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${tokens.spacing.xxxxsmall};
`;

export const CheckboxRoot = styled(Checkbox.Root)<{
  $hasError?: boolean;
  $color?: string;
  checked: Checkbox.CheckboxProps['checked'];
}>`
  all: unset;
  background: white;
  box-sizing: border-box;
  border: 1px solid black;
  width: ${ITEM_WIDTH};
  height: ${ITEM_WIDTH};
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: ${({ $hasError, theme }) =>
    $hasError ? theme.color.border.error : theme.color.border.contrast};

  ${({ $color, checked }) =>
    $color &&
    checked &&
    css`
      background: ${$color};
      border-color: ${$color};
    `}
`;

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLabel = styled(Label)`
  margin-left: ${tokens.spacing.xxsmall};
`;
