import type { AccordionSingleProps } from '@radix-ui/react-accordion';
import React from 'react';
import { FlattenInterpolation, ThemeProps } from 'styled-components';

import { AccordionBaseProps } from '@a-little-world/little-world-design-system-core';
import Text from '../Text/Text';
import { TextTypes } from '@a-little-world/little-world-design-system-core';
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
  TriggerIcon,
} from './styles';

interface AccordionProps extends AccordionBaseProps, AccordionSingleProps {
  className?: string;
  contentCss?: FlattenInterpolation<ThemeProps<any>>;
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
          <AccordionHeader id={header}>
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
