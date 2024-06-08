import * as Checkbox from '@radix-ui/react-checkbox';
import styled, { css } from 'styled-components';

import Label from '../Label/Label';

const ITEM_WIDTH = '16px';

export const CheckboxWrapper = styled.div``;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.xxxxsmall} 0;
`;

const CHECKBOX_STYLES = css<{
  $hasError?: boolean;
  $color?: string;
  checked: Checkbox.CheckboxProps['checked'];
}>`
  all: unset;
  background: ${({ theme }) => theme.color.surface.primary};
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.color.border.contrast};
  color: ${({ theme }) => theme.color.text.primary};
  width: ${ITEM_WIDTH};
  height: ${ITEM_WIDTH};
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: ${({ $hasError, theme }) =>
    $hasError ? theme.color.border.error : theme.color.border.contrast};

  ${({ $color, checked, theme }) =>
    $color &&
    checked &&
    css`
      background: ${$color};
      border-color: ${$color};
      color: ${theme.color.text.reversed};
    `}
`;

export const CheckboxRoot = styled(Checkbox.Root)<{
  $hasError?: boolean;
  $color?: string;
  checked: Checkbox.CheckboxProps['checked'];
}>`
  ${CHECKBOX_STYLES}
`;

export const NonInteractiveCheckbox = styled.div<{
  $color?: string;
  checked: Checkbox.CheckboxProps['checked'];
}>`
  ${CHECKBOX_STYLES}
`;

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLabel = styled(Label)`
  margin-left: ${({ theme }) => theme.spacing.xxsmall};
`;
