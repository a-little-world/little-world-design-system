import type { AccordionSingleProps } from '@radix-ui/react-accordion';
import React from 'react';
import { FlattenInterpolation, ThemeProps } from 'styled-components';

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
  contentCss?: FlattenInterpolation<ThemeProps<any>>;
  headerType?: keyof typeof TextTypes;
  headerColor?: string;
  items: {
    content: string | React.ReactNode;
    header: string;
  }[];
}

const Accordion: React.FC<AccordionProps> = ({
  className,
  contentCss,
  headerType,
  headerColor,
  items,
}) => {
  return (
    <AccordionRoot className={className} type="single" collapsible>
      {items.map(({ content, header }) => (
        <AccordionItem value={header} key={header}>
          <AccordionHeader>
            <AccordionTrigger>
              <Text type={headerType || TextTypes.Body4} color={headerColor}>
                {header}
              </Text>
              <TriggerIcon
                label="accordion toggle icon"
                labelId="accordion-toggle-icon"
                width="14px"
                height="14px"
                color={headerColor}
              />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent css={contentCss}>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
};

export default Accordion;
