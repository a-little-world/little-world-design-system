import * as RadixTabs from '@radix-ui/react-tabs';
import { TabsVariations } from '@a-little-world/little-world-design-system-core';
import styled, { css } from 'styled-components';

type VariationProp = { $variation?: TabsVariations };

const { Root, List, Trigger, Content } = RadixTabs;

export const StyledTabsRoot = styled(Root)<VariationProp>`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({ $variation = TabsVariations.Pill, theme }) =>
    $variation === TabsVariations.Underline &&
    css`
      box-shadow: 0 2px 10px ${theme.color.surface.secondary};
      border-radius: ${theme.radius.small};
      overflow: hidden;
    `}
`;

const pillListStyles = css`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.small};
`;

const underlineListStyles = css`
  flex-shrink: 0;
  display: flex;
  flex-wrap: nowrap;
  gap: 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.border.subtle};
`;

export const StyledTabsList = styled(List)<VariationProp>`
  ${({ $variation = TabsVariations.Pill }) =>
    $variation === TabsVariations.Underline
      ? underlineListStyles
      : pillListStyles}
`;

const pillTriggerStyles = css<{ $activeColor?: string }>`
  padding: ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.color.border.subtle};
  border-radius: ${({ theme }) => theme.radius.small};
  background-color: ${({ theme }) => theme.color.surface.primary};
  color: ${({ theme }) => theme.color.text.primary};
  cursor: pointer;

  &[data-state='active'] {
    border-color: ${({ theme }) => theme.color.border.selected};
    background-color: ${({ theme, $activeColor }) =>
      $activeColor ?? theme.color.surface.selected};
    color: ${({ theme }) => theme.color.text.button};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.border.accent};
    outline-offset: 2px;
  }
`;

const underlineTriggerStyles = css<{ $activeColor?: string }>`
  background-color: ${({ theme }) => theme.color.surface.primary};
  border: none;
  padding: 0 ${({ theme }) => theme.spacing.medium};
  min-height: 45px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  color: ${({ theme }) => theme.color.text.secondary};
  user-select: none;
  border-radius: 0;

  &:first-of-type {
    border-top-left-radius: ${({ theme }) => theme.radius.small};
  }

  &:last-of-type {
    border-top-right-radius: ${({ theme }) => theme.radius.small};
  }

  &:hover {
    color: ${({ theme }) => theme.color.text.accent};
  }

  &[data-state='active'] {
    color: ${({ theme, $activeColor }) =>
      $activeColor ?? theme.color.text.accent};
    box-shadow:
      inset 0 -1px 0 0 currentColor,
      0 1px 0 0 currentColor;
  }

  &:focus-visible {
    position: relative;
    z-index: 1;
    outline: 2px solid ${({ theme }) => theme.color.border.accent};
    outline-offset: 0;
  }
`;

export const StyledTabsTrigger = styled(Trigger)<
  VariationProp & { $activeColor?: string }
>`
  font-family: 'Signika Negative';
  font-size: 1rem;
  cursor: pointer;

  ${({ $variation = TabsVariations.Pill }) =>
    $variation === TabsVariations.Underline
      ? underlineTriggerStyles
      : pillTriggerStyles}
`;

const pillContentStyles = css`
  margin-top: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.small} 0;
`;

const underlineContentStyles = css`
  flex-grow: 1;
  margin-top: 0;
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.color.surface.primary};
  border-bottom-left-radius: ${({ theme }) => theme.radius.small};
  border-bottom-right-radius: ${({ theme }) => theme.radius.small};
`;

export const TabsContent = styled(Content)<VariationProp>`
  outline: none;

  ${({ $variation = TabsVariations.Pill }) =>
    $variation === TabsVariations.Underline
      ? underlineContentStyles
      : pillContentStyles}

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.border.accent};
    outline-offset: 2px;
  }
`;
