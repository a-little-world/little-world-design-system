import type { AccordionSingleProps } from '@radix-ui/react-accordion';
import React from 'react';

import Text from '../Text/Text';
import TextTypes from '../Text/TextTypes';
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
  TriggerIcon,
} from './styles';

type Props = {
  className?: string;
  items: {
    content: string;
    header: string;
  }[];
} & AccordionSingleProps;

const Accordion: React.FC<Props> = ({ className, items }: Props) => {
  return (
    <AccordionRoot className={className} type="single" collapsible>
      {items.map(({ content, header }) => (
        <AccordionItem value={header} key={header}>
          <AccordionHeader>
            <AccordionTrigger>
              <Text type={TextTypes.Body4}>{header}</Text>
              <TriggerIcon
                label="accordion toggle icon"
                labelId="accordion-toggle-icon"
                width="14px"
                height="14px"
              />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <Text>{content}</Text>
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
};

export default Accordion;
