import styled, { css, keyframes } from "styled-components";
import {
  LoadingDimensions,
  LoadingSizes,
} from "@a-little-world/little-world-design-system-core";
import { pixelate } from "../../utils/styles";

const loading = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const LoadingContainer = styled.div<{
  $align?: string;
  $color?: string;
  $inline?: boolean;
  $size?: LoadingSizes;
}>`
  display: ${({ $inline }) => ($inline ? "inline-flex" : "flex")};
  align-items: center;
  justify-content: ${({ $align }) => $align || "center"};
  position: relative;
  width: ${({ $inline, $size }) =>
    $inline ? pixelate(LoadingDimensions[$size || LoadingSizes.Small]) : "100%"};
  height: 100%;
  min-height: ${({ $size }) => pixelate(LoadingDimensions[$size || LoadingSizes.Small])};
`;

export const LoadingElement = styled.div<{
  $color?: string;
  $size?: LoadingSizes;
}>`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${({ $size }) => pixelate(LoadingDimensions[$size || LoadingSizes.Small])};
    height: ${({ $size }) => pixelate(LoadingDimensions[$size || LoadingSizes.Small])};
    border: 2px solid ${({ $color }) => $color || "currentColor"};
    border-radius: 50%;
    animation: ${loading} 1.4s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ $color }) => $color || "currentColor"} transparent
    transparent transparent;

    ${({ $size }) => {
      if ($size === LoadingSizes.Medium)
        return css`
          border-width: 2px;
        `;

      if ($size === LoadingSizes.Large)
        return css`
          border-width: 4px;
        `;
    }}

    &:nth-child(1) {
        animation-delay: -0.45s;
    }

    &:nth-child(2) {
        animation-delay: -0.3s;
    }

    &:nth-child(3) {
        animation-delay: -0.15s;
    }
}
`;
