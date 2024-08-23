import * as Switch from '@radix-ui/react-switch';
import styled, { css } from 'styled-components';

export const SwitchWrapper = styled.div<{ $labelInline?: boolean }>`
  ${({ theme, $labelInline }) =>
    $labelInline &&
    css`
      display: flex;
      gap: ${theme.spacing.small};
      align-items: center;
    `}
`;

export const SwitchRoot = styled(Switch.Root)<{ $hasError?: boolean }>`
  width: 56px;
  height: 32px;
  background-color: ${({ theme }) => theme.color.border.subtle};
  border-radius: 9999px;
  position: relative;
  -webkit-tap-highlight-color: ${({ theme }) => theme.color.surface.on};

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color.border.minimal};
  }

  ${({ $hasError }) =>
    $hasError &&
    css`
      box-shadow: 0 0 0 2px ${({ theme }) => theme.color.border.error};
      background-color: ${({ theme }) => theme.color.surface.secondary};

      &:focus {
        box-shadow: 0 0 0 2px ${({ theme }) => theme.color.border.error};
      }
    `}

  &[data-state='checked'] {
    background-color: ${({ theme }) => theme.color.surface.on};
  }
`;

export const SwitchContainer = styled.div``;

export const SwitchThumb = styled(Switch.Thumb)`
  display: block;
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.color.surface.primary};
  border-radius: 9999px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: transform 100ms;
  transform: translateX(4px);
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(28px);
  }
`;
