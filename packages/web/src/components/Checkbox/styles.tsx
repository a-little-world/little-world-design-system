import {
  CheckboxDimensions,
  CheckboxSizes,
} from '@a-little-world/little-world-design-system-core';
import * as Checkbox from '@radix-ui/react-checkbox';
import styled, { css, keyframes } from 'styled-components';

import Label from '../Label/Label';
import { pixelate } from '../../utils/styles';

const HOVER_TINT = 'rgba(0, 0, 0, 0.04)';

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

const getCheckboxBorderColor = ({
  checked,
  $hasError,
  theme,
}: {
  checked: Checkbox.CheckboxProps['checked'];
  $hasError?: boolean;
  theme: {
    color: {
      border: {
        error: string;
        selected: string;
        subtle: string;
        contrast: string;
      };
    };
  };
}) => {
  if (checked) {
    return $hasError ? theme.color.border.error : theme.color.border.selected;
  }

  return theme.color.border.subtle;
};

const getCheckboxBackground = ({
  checked,
  $hasError,
  theme,
}: {
  checked: Checkbox.CheckboxProps['checked'];
  $hasError?: boolean;
  theme: { color: { surface: { error: string; secondary: string } } };
}) => {
  if (checked) {
    return $hasError ? theme.color.surface.error : HOVER_TINT;
  }

  return theme.color.surface.secondary;
};

export const CheckboxWrapper = styled.div``;

export const CheckboxButtonContainer = styled(Checkbox.Root)<{
  $hasError?: boolean;
  $readOnly?: boolean;
  $size?: CheckboxSizes;
}>`
  cursor: ${({ $readOnly }) => ($readOnly ? 'default' : 'pointer')};
  padding: ${({ theme }) => theme.spacing.xxsmall};
  display: flex;
  align-items: center;
  border: 1px solid
    ${({ theme, checked, $hasError }) =>
      getCheckboxBorderColor({ checked, $hasError, theme })};
  border-radius: ${({ theme }) => theme.radius.xxsmall};
  background: ${({ checked, $hasError, theme }) =>
    getCheckboxBackground({ checked, $hasError, theme })};

  label {
    cursor: pointer;
  }
`;

export const CheckboxContainer = styled.div<{ $readOnly?: boolean }>`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.xxxxsmall} 0;
  cursor: ${({ $readOnly }) => ($readOnly ? 'default' : 'pointer')};
`;

const CHECKBOX_STYLES = css<{
  $hasError?: boolean;
  $color?: string;
  $size: CheckboxSizes;
  checked: Checkbox.CheckboxProps['checked'];
}>`
  all: unset;
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
      background: ${HOVER_TINT};
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
  cursor: pointer;
  ${CHECKBOX_STYLES}
`;

export const NonInteractiveCheckbox = styled.div<{
  $color?: string;
  $size: CheckboxSizes;
  checked: Checkbox.CheckboxProps['checked'];
}>`
  cursor: default;
  ${CHECKBOX_STYLES}
`;

export const CheckboxIndicator = styled(Checkbox.Indicator)<{
  $animate?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${checkmarkAnimation} 0.25s ease-out;
    `}
`;

export const StyledLabel = styled(Label)`
  margin-left: ${({ theme }) => theme.spacing.xxsmall};
`;
