import { ChevronDownIcon } from "../Icon";
import Text from "../Text/Text";
import { getAccordionStyles } from "./styles";
import {
  AccordionBaseProps,
  TextTypes,
} from "@a-little-world/little-world-design-system-core";
import * as AccordionPrimitive from "@rn-primitives/accordion";
import React, { useMemo } from "react";
import { ViewStyle } from "react-native";
import { useTheme } from "styled-components/native";

interface AccordionProps extends AccordionBaseProps {
  style?: ViewStyle;
  contentStyle?: ViewStyle;
}

const Accordion: React.FC<AccordionProps> = ({
  contentStyle,
  headerType,
  headerColor,
  items,
  style,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getAccordionStyles({ theme }), [theme]);

  return (
    <AccordionPrimitive.Root
      style={[styles.root, style]}
      type="single"
      collapsible
    >
      {items.map(({ content, header }) => (
        <AccordionPrimitive.Item
          value={header}
          key={header}
          style={styles.item}
        >
          <AccordionPrimitive.Header id={header} style={styles.header}>
            <AccordionPrimitive.Trigger style={styles.trigger}>
              <Text type={headerType || TextTypes.Body4} color={headerColor}>
                {header}
              </Text>
              <ChevronDownIcon
                label="accordion toggle icon"
                width={14}
                height={14}
                color={headerColor}
                style={styles.triggerIcon}
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content style={[styles.content, contentStyle]}>
            {content}
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
};

export default Accordion;
