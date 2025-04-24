import React from 'react';
import { SvgTransformOptions, ParsedSvg } from '@a-little-world/little-world-design-system-core';
import IconGradient from '../components/Icon/IconGradient';

export const createReactSvg = (svgData: ParsedSvg, options: SvgTransformOptions) => {
    const {
      width,
      height,
      color,
      gradient,
      gradientId,
      className,
      labelId,
    } = options; 
  
    return (
      <svg
        aria-labelledby={labelId}
        fill="none"
        focusable={false}
        width={width}
        height={height}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={svgData.viewBox}
      >
        {svgData.paths.map((path, index) => (
          <path
            key={index}
            d={path.d}
            fill={gradient ? `url(#gradient${gradientId})` : color}
          />
        ))}
        {gradient && <IconGradient variation={gradient} id={gradientId as string} />}
      </svg>
    );
  };