import * as RadioGroup from '@radix-ui/react-radio-group';
import styled, { css } from 'styled-components';

const ITEM_WIDTH = '13px';
const HOVER_TINT = 'rgba(0, 0, 0, 0.04)';

export const RadioGroupWrapper = styled.div<{ $inline?: boolean }>`
  display: flex;
  flex-direction: ${({ $inline }) => ($inline ? 'row' : 'column')};
  align-items: ${({ $inline }) => ($inline ? 'center' : 'flex-start')};
  gap: ${({ theme, $inline }) =>
    $inline ? theme.spacing.medium : theme.spacing.xxsmall};
`;

export const RadioGroupRoot = styled(RadioGroup.Root)<{ $inline?: boolean }>`
  display: flex;
  flex-direction: ${({ $inline }) => ($inline ? 'row' : 'column')};
  gap: ${({ theme, $inline }) =>
    $inline ? theme.spacing.small : theme.spacing.xxsmall};
  align-items: flex-start;
  width: ${({ $inline }) => ($inline ? 'auto' : '100%')};
`;

export const PillRoot = styled(RadioGroup.Root)<{ $inline?: boolean }>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xxsmall};
  align-items: center;
  width: ${({ $inline }) => ($inline ? 'auto' : '100%')};
  margin-bottom: ${({ theme, $inline }) =>
    $inline ? '0' : theme.spacing.xxxsmall};
`;

export const PillItem = styled(RadioGroup.Item)<{
  $hasError: boolean;
  $inline?: boolean;
}>`
  all: unset;
  font-family: 'Signika Negative';
  font-weight: 600;
  background: ${({ theme }) => theme.color.surface.primary};
  border-radius: ${({ theme }) => theme.radius.small};
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.03);
  border: 2px solid ${({ theme }) => theme.color.border.subtle};
  padding: ${({ theme }) => `${theme.spacing.xxsmall} ${theme.spacing.xsmall}`};
  min-width: 64px;
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: filter 0.2s ease-in-out;

  ${({ theme, $inline }) =>
    $inline
      ? css`
          font-weight: normal;
          padding: ${theme.spacing.xxxsmall} ${theme.spacing.xsmall};
        `
      : css`
          @media (min-width: ${theme.breakpoints.small}) {
            padding: ${theme.spacing.xsmall} ${theme.spacing.small};
            min-width: 80px;
          }
        `}

  &[data-state='checked'] {
    border-color: ${({ $hasError, theme }) =>
      $hasError ? theme.color.border.error : theme.color.border.selected};
  }

  &:hover {
    filter: brightness(0.97);
    transition: filter 0.2s ease-in-out;
  }
`;

export const RadioGroupItem = styled(RadioGroup.Item)<{ $hasError: boolean }>`
  all: unset;
  background: ${({ theme }) => theme.color.surface.primary};
  position: relative;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.color.surface.contrast};
  width: ${ITEM_WIDTH};
  height: ${ITEM_WIDTH};
  border-radius: 100%;
  margin-right: ${({ theme }) => theme.spacing.xxsmall};
  border: 1px solid ${({ theme }) => theme.color.border.subtle};
  border-radius: 50%;
  color: ${({ theme }) => theme.color.border.selected};
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease,
    background-color 0.15s ease;

  &:hover {
    background-color: ${HOVER_TINT};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px
      ${({ $hasError }) =>
        $hasError ? 'rgba(211, 47, 47, 0.18)' : 'rgba(25, 118, 210, 0.18)'};
  }

  &[data-state='checked'] {
    border-color: ${({ $hasError, theme }) =>
      $hasError ? theme.color.border.error : '#1976d2'};
    background-color: ${HOVER_TINT};
  }

  &[data-disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &[data-state='checked']::after {
    content: '';
    position: absolute;
    inset: 0;
    margin: auto;
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: currentColor;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioGroupIndicator = styled(RadioGroup.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.text.primary};
  }
`;
