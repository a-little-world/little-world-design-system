import React from 'react';
import styled, { css, keyframes } from 'styled-components';

export const LOADING_RING_ID = 'loadingRing';

export enum LoadingSizes {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

const loading = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const Loading = styled.div<{ $color?: string; $size?: LoadingSizes }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;

  > div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 18px;
    height: 18px;
    border: 2px solid ${({ $color }) => $color || 'currentColor'};
    border-radius: 50%;
    animation: ${loading} 1.4s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ $color }) => $color || 'currentColor'} transparent
      transparent transparent;

    ${({ $size }) => {
      if ($size === LoadingSizes.Medium)
        return css`
          width: 32px;
          height: 32px;
          border-width: 2px;
        `;

      if ($size === LoadingSizes.Large)
        return css`
          width: 56px;
          height: 56px;
          border-width: 4px;
        `;
    }}
  }

  > div:nth-child(1) {
    animation-delay: -0.45s;
  }

  > div:nth-child(2) {
    animation-delay: -0.3s;
  }

  > div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

export const LoadingRing = ({
  color,
  size,
}: {
  color?: string;
  size?: LoadingSizes;
}) => (
  <Loading $color={color} $size={size} data-testid={LOADING_RING_ID}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </Loading>
);

export default LoadingRing;
