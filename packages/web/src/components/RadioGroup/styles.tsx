import * as RadioGroup from '@radix-ui/react-radio-group';
import styled, { css } from 'styled-components';

const ITEM_WIDTH = '13px';

export type RadioGroupOrientation = 'vertical' | 'horizontal';

interface RadioGroupWrapperProps {
  $inline?: boolean;
  $orientation?: RadioGroupOrientation;
}

interface RadioGroupRootProps {
  $inline?: boolean;
  $orientation?: RadioGroupOrientation;
}

export const RadioGroupWrapper = styled.div<RadioGroupWrapperProps>`
  display: flex;
  flex-direction: ${({ $inline }) => ($inline ? 'row' : 'column')};
  align-items: ${({ $inline }) => ($inline ? 'center' : 'flex-start')};
  gap: ${({ theme, $inline }) =>
    $inline ? theme.spacing.medium : theme.spacing.xxsmall};
`;

export const RadioGroupRoot = styled(RadioGroup.Root)<RadioGroupRootProps>`
  display: flex;
  flex-direction: ${({ $orientation }) =>
    $orientation === 'vertical' ? 'column' : 'row'};
  gap: ${({ theme, $orientation }) =>
    $orientation === 'vertical' ? theme.spacing.xxsmall : theme.spacing.small};
  align-items: ${({ $orientation }) =>
    $orientation === 'vertical' ? 'flex-start' : 'center'};
  width: ${({ $inline }) => ($inline ? 'auto' : '100%')};
`;

export const PillRoot = styled(RadioGroup.Root)<RadioGroupRootProps>`
  display: flex;
  flex-direction: ${({ $orientation }) =>
    $orientation === 'vertical' ? 'column' : 'row'};
  flex-wrap: ${({ $orientation }) =>
    $orientation === 'vertical' ? 'nowrap' : 'wrap'};
  gap: ${({ theme }) => theme.spacing.xxsmall};
  align-items: ${({ $orientation }) =>
    $orientation === 'vertical' ? 'flex-start' : 'center'};
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
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.color.surface.contrast};
  width: ${ITEM_WIDTH};
  height: ${ITEM_WIDTH};
  border-radius: 100%;
  margin-right: ${({ theme }) => theme.spacing.xxsmall};

  &:focus {
    box-shadow: 0 0 0 2px
      ${({ $hasError, theme }) =>
        $hasError ? theme.color.border.error : '#eeb612'};
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
