import styled, { css } from 'styled-components';
import tokens from '../../tokens';
import { INPUT_ERROR_CSS } from '../InputError/InputError';

export const MultiSelectionWrapper = styled.div`
  width: 100%:
`;

export const Options = styled.div<{ $hasError: boolean }>`
  display: flex;
  border-radius: 15px;
  background: ${tokens.color.theme.light.surface.secondary};
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  gap: ${tokens.spacing.xxsmall};
  padding: ${tokens.spacing.xxsmall};
  white-space: pre-line;

  ${({ $hasError }) => $hasError && INPUT_ERROR_CSS}

  @media (min-width: ${tokens.breakpoints.small}) {
    padding: ${tokens.spacing.small};
  }
`;

export const Option = styled.button<{ $selected: boolean }>`
  font-family: 'Signika Negative';
  background: ${tokens.color.theme.light.surface.primary};
  border-radius: 10px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.03);
  border-radius: 1000px;
  border: 2px solid ${tokens.color.theme.light.border.reversed};
  padding: ${tokens.spacing.xxxsmall} ${tokens.spacing.xsmall};
  min-width: 60px;
  height: 33px;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: ${tokens.breakpoints.small}) {
    padding: ${tokens.spacing.xxsmall} ${tokens.spacing.small};
    min-width: 80px;
    height: 45px;
  }

  ${({ $selected }) =>
    $selected &&
    css`
      border-color: ${tokens.color.theme.light.border.selected};
    `}
`;
