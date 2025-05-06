import styled, { css } from "styled-components";

import { INPUT_ERROR_CSS } from "../InputError/InputError";

export const MultiSelectionWrapper = styled.div`
  width: 100%:
`;

export const Options = styled.div<{ $hasError: boolean }>`
  display: flex;
  border-radius: 15px;
  background: ${({ theme }) => theme.color.surface.tertiary};
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xxsmall};
  padding: ${({ theme }) => theme.spacing.xxsmall};
  margin-bottom: ${({ theme }) => theme.spacing.xxsmall};
  white-space: pre-line;
  border: 1px solid ${({ theme }) => theme.color.border.subtle};

  ${({ $hasError }) => $hasError && INPUT_ERROR_CSS} @media
    (min-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: ${({ theme }) => theme.spacing.small};
  }
`;

export const Option = styled.button<{ $selected: boolean }>`
  font-family: "Signika Negative";
  background: ${({ theme }) => theme.color.surface.primary};
  border-radius: 10px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.03);
  border-radius: 1000px;
  border: 2px solid ${({ theme }) => theme.color.border.reversed};
  padding: ${({ theme }) =>
    `${theme.spacing.xxxsmall} ${theme.spacing.xsmall}`};
  min-width: 60px;
  height: 33px;

  &:hover {
    cursor: pointer;
  }

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.small}) {
      padding: ${theme.spacing.xxsmall} ${theme.spacing.small};
      min-width: 80px;
      height: 45px;
    }
  `}

  ${({ $selected, theme }) =>
    $selected &&
    css`
      border-color: ${theme.color.border.selected};
    `}
`;
