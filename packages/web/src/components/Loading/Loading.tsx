import React from "react";
import {
  LoadingBaseProps,
  LoadingSizes,
} from "@a-little-world/little-world-design-system-core";
import { LoadingContainer, LoadingElement } from "./styles";

// Re-export enum for easy access
export { LoadingSizes };

export const LOADING_RING_ID = "loadingRing";

interface LoadingProps extends LoadingBaseProps {
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({
  align,
  className,
  color,
  inline = false,
  size = LoadingSizes.Small,
}) => (
  <LoadingContainer
    className={className}
    $align={align}
    $color={color}
    $inline={inline}
    $size={size}
    data-testid={LOADING_RING_ID}
  >
    <LoadingElement $color={color} $size={size} />
    <LoadingElement $color={color} $size={size} />
    <LoadingElement $color={color} $size={size} />
    <LoadingElement $color={color} $size={size} />
  </LoadingContainer>
);

export default Loading;
