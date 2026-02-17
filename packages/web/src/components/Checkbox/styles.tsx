import {
  CheckboxDimensions,
  CheckboxSizes,
} from '@a-little-world/little-world-design-system-core';
import * as Checkbox from '@radix-ui/react-checkbox';
import styled, { css, keyframes } from 'styled-components';

import Label from '../Label/Label';
import { pixelate } from '../../utils/styles';

const checkmarkAnimation = keyframes`
  0% {
    transform: translateY(5px);
  }
  50% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const CheckboxWrapper = styled.div``;

export const CheckboxButtonContainer = styled(Checkbox.Root)<{
  $hasError?: boolean;
  $size?: CheckboxSizes;
}>`
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xxsmall};
  display: flex;
  align-items: center;
  border: 1px solid
    ${({ theme, checked, $hasError }) =>
      checked
        ? $hasError
          ? theme.color.border.error
          : theme.color.border.selected
        : theme.color.border.subtle};
  border-radius: ${({ theme }) => theme.radius.xxsmall};
  background: ${({ checked, $hasError, theme }) =>
    checked
      ? $hasError
        ? theme.color.surface.error
        : theme.color.surface.accent
      : theme.color.surface.secondary};

  label {
    cursor: pointer;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.xxxxsmall} 0;
  cursor: pointer;
`;

const CHECKBOX_STYLES = css<{
  $hasError?: boolean;
  $color?: string;
  $size: CheckboxSizes;
  checked: Checkbox.CheckboxProps['checked'];
}>`
  all: unset;
  cursor: pointer;
  background: ${({ theme }) => theme.color.surface.primary};
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.color.border.contrast};
  border-radius: ${({ theme }) => theme.radius.xxxsmall};
  color: ${({ theme }) => theme.color.text.primary};
  width: ${({ $size }) => pixelate(CheckboxDimensions[$size])};
  height: ${({ $size }) => pixelate(CheckboxDimensions[$size])};
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
  $size: CheckboxSizes;
  checked: Checkbox.CheckboxProps['checked'];
}>`
  ${CHECKBOX_STYLES}
`;

export const NonInteractiveCheckbox = styled.div<{
  $color?: string;
  $size: CheckboxSizes;
  checked: Checkbox.CheckboxProps['checked'];
}>`
  ${CHECKBOX_STYLES}
`;

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${checkmarkAnimation} 0.25s ease-out;
`;

export const StyledLabel = styled(Label)`
  margin-left: ${({ theme }) => theme.spacing.xxsmall};
`;
