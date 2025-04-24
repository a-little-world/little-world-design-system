import React from "react";

import { Illustration, SvgProps } from "../Illustration";
import { friendshipIllustration } from "@a-little-world/little-world-design-system-core";
import { createReactSvg } from "../../../utils/createReactSvg";

const LABEL_ID = "Friendship Illustration";

export const FriendshipImage = ({ height, width }: SvgProps) => {
  return (
    <Illustration labelId={LABEL_ID} label={LABEL_ID} labelVisible={false}>
      {createReactSvg(friendshipIllustration, {
        width,
        height,
      })}
    </Illustration>
  );
};
