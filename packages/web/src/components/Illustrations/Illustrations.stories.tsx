import React from "react";

import { tokensPixelated } from "@a-little-world/little-world-design-system-core";
import Text from "../Text/Text";
import * as allIllustrations from "./index";
import styled from "styled-components";

export default {
  title: "Components/Illustrations",
  argTypes: {
    color: { control: "color" },
    height: { control: "text" },
    width: { control: "text" },
  },
};

export const AllVariants = (args) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: tokensPixelated.spacing.large }}>
    {Object.entries(allIllustrations).map(([name, Component]) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: tokensPixelated.spacing.xxsmall,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          padding: "8px",
          width: "200px",
        }}
        key={name}
      >
        <Component key={name} {...args} />
        <Text>{name}</Text>
      </div>
    ))}
  </div>
);

const StyledMatchSearching = styled(allIllustrations.MatchSearchingImage)`
  height: 64px;
  width: 64px;
  background-color: red;
`;

export const StyledIllustration = (args) => {
  return (
    <div>
      <Text>Icon should have custom styles applied: Red background and height of 64px</Text>
      <StyledMatchSearching label="Stack Icon" />
    </div>
  )
}