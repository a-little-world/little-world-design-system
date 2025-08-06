import { ReactNode } from 'react';

import { TextTypes } from './Text';

export interface AccordionItemProps {
  content: string | ReactNode;
  header: string;
}

export interface AccordionBaseProps {
  headerType?: TextTypes;
  headerColor?: string;
  items: AccordionItemProps[];
}
