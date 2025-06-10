import React from "react";
import { StyleSheet } from "react-native";

import {
  Button,
  Popover,
  DotsIcon,
  Text,
} from "@a-little-world/little-world-design-system-native";
import { ButtonVariations } from "@a-little-world/little-world-design-system-core";

const styles = StyleSheet.create({
  option: {
    marginBottom: 16,
  },
  trigger: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E5E5E5",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default {
  component: Popover,
  title: "Components/Popover",
};

export const Default = () => (
  <Popover
    showCloseButton={false}
    trigger={
      <Button variation={ButtonVariations.Circle}>
        <DotsIcon label="dotsIcon" />
      </Button>
    }
  >
    <Text>Hello</Text>
    <Button variation={ButtonVariations.Inline} style={styles.option}>
      Open Modal
    </Button>
    <Button variation={ButtonVariations.Inline} style={styles.option}>
      Unmatch
    </Button>
  </Popover>
);

export const AsToolTip = () => (
  <Popover
    asToolTip
    showCloseButton={false}
    trigger={
      <Button variation={ButtonVariations.Circle}>
        <DotsIcon label="dotsIcon" />
      </Button>
    }
  >
    <Text>This is tooltip text with tooltip styling</Text>
  </Popover>
);
