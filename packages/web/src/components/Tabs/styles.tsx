import { Content, List, Trigger } from '@radix-ui/react-tabs';
import styled from 'styled-components';

export const StyledTabsList = styled(List)`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const StyledTabsTrigger = styled(Trigger)`
  padding: ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.color.border.subtle};
  border-radius: ${({ theme }) => theme.radius.small};
  background-color: ${({ theme }) => theme.color.surface.primary};
  color: ${({ theme }) => theme.color.text.primary};
  cursor: pointer;

  &[data-state='active'] {
    border-color: ${({ theme }) => theme.color.border.bold};
    background-color: ${({ theme }) => theme.color.surface.secondary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.border.accent};
    outline-offset: 2px;
  }
`;

export const TabsContent = styled(Content)`
  margin-top: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.small} 0;
  outline: none;
`;
