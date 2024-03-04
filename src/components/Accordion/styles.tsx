import * as Accordion from '@radix-ui/react-accordion';
import styled from 'styled-components';

import tokens from '../../tokens';
import { ChevronDownIcon } from '../Icon';

export const AccordionRoot = styled(Accordion.Root)`
  border: 1px solid ${({ theme }) => theme.color.border.subtle};
  border-radius: 8px;

  :root {
    --radix-accordion-content-width: 100%:
    --radix-collapsible-content-width: 100%;
  }
`;

export const AccordionItem = styled(Accordion.Item)`
  box-sizing: border-box;
  margin: 0;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.border.subtle};
  padding: ${tokens.spacing.xxsmall} ${tokens.spacing.small};
  padding-bottom: 0px;

  &:last-child {
    border-top-width: 0px;
    border-bottom-width: 0px;
  }
`;

export const AccordionHeader = styled(Accordion.Header)`
  margin: 0;
  width: 100%;
`;

export const AccordionContent = styled(Accordion.Content)`
  width: 100%;
  background: ${({ theme }) => theme.color.surface.tertiary};
  border-radius: 10px;
  padding: ${tokens.spacing.small};
  margin-bottom: ${tokens.spacing.small};
  line-height: 1.5;
`;

export const AccordionTrigger = styled(Accordion.Trigger)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background: none;
  padding: ${tokens.spacing.xxsmall} 0;
  padding-bottom: ${tokens.spacing.small};
  gap: ${tokens.spacing.small};
  width: 100%;
  border: none;
  text-align: left;
`;

export const TriggerIcon = styled(ChevronDownIcon)`
  flex-shrink: 0;
  margin-top: 6px;
`;
