import React from 'react';
import styled, { css, keyframes } from 'styled-components';

export const LOADING_RING_ID = 'loadingRing';

const HEIGHTS = {
  Small: '18px',
  Medium: '32px',
  Large: '56px',
};

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

const Loading = styled.div<{
  $align?: string;
  $color?: string;
  $inline?: boolean;
  $size?: LoadingSizes;
}>`
  display: ${({ $inline }) => ($inline ? 'inline-flex' : 'flex')};
  align-items: center;
  justify-content: ${({ $align }) => $align || 'center'};
  position: relative;
  width: ${({ $inline, $size }) =>
    $inline ? HEIGHTS[$size || LoadingSizes.Small] : '100%'};
  height: 100%;
  min-height: ${({ $size }) => HEIGHTS[$size || LoadingSizes.Small]};

  > div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${({ $size }) => HEIGHTS[$size || LoadingSizes.Small]};
    height: ${({ $size }) => HEIGHTS[$size || LoadingSizes.Small]};
    border: 2px solid ${({ $color }) => $color || 'currentColor'};
    border-radius: 50%;
    animation: ${loading} 1.4s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ $color }) => $color || 'currentColor'} transparent
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
  align,
  className,
  color,
  inline,
  size,
}: {
  align?: string;
  className?: string;
  color?: string;
  inline?: boolean;
  size?: LoadingSizes;
}) => (
  <Loading
    className={className}
    $align={align}
    $color={color}
    $inline={inline}
    $size={size}
    data-testid={LOADING_RING_ID}
  >
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </Loading>
);

export default LoadingRing;
