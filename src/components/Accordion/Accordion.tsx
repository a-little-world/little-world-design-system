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

interface AccordionProps extends AccordionSingleProps {
  className?: string;
  contentClassName?: string;
  items: {
    content: string | React.ReactNode;
    header: string;
  }[];
}

const Accordion: React.FC<AccordionProps> = ({
  className,
  contentClassName,
  items,
}) => {
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
          <AccordionContent className={contentClassName}>
            {content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
};

export default Accordion;
