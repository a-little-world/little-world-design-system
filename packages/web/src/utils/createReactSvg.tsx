import React from 'react';
import { SvgTransformOptions, ParsedSvg, SvgElement, Gradients } from '@a-little-world/little-world-design-system-core';
import IconGradient from '../components/Icon/IconGradient';

// Helper function to safely render children, filtering out null values
const renderChildren = (children: SvgElement[], options: SvgTransformOptions, parentIndex: string | number) => {
  return children
    .map((child, i) => renderSvgElement(child, options, `${parentIndex}-${i}`))
    .filter(Boolean); // Filter out null elements
};

// Renders SVG elements recursively
const renderSvgElement = (element: SvgElement, options: SvgTransformOptions, index: string | number) => {
  const { gradient, gradientId, color } = options;
  
  // Get all attributes and override fill for path elements if needed
  const attrs = {...element.attributes};
  
  // Handle fill attributes for SVG elements
  if (element.type === 'path') {
    if (gradient) {
      attrs.fill = `url(#gradient${gradientId})`;
    } else if (color && !attrs.fill) {
      attrs.fill = color;
    } else if (attrs.fill === undefined) {
      // Set default fill to 'none' if no fill is specified
      attrs.fill = 'none';
    }
  } else {
    // For non-path elements, also ensure fill is explicitly set
    if (attrs.fill === undefined) {
      attrs.fill = 'none';
    }
  }
  
  // Add key attribute
  attrs.key = index.toString();
  
  switch (element.type) {
    case 'path':
      return <path {...attrs} />;
    case 'g':
      return (
        <g {...attrs}>
          {renderChildren(element.children, options, index)}
        </g>
      );
    case 'defs':
      return (
        <defs {...attrs}>
          {renderChildren(element.children, options, index)}
        </defs>
      );
    case 'linearGradient':
      return (
        <linearGradient {...attrs}>
          {renderChildren(element.children, options, index)}
        </linearGradient>
      );
    case 'clipPath':
      return (
        <clipPath {...attrs}>
          {renderChildren(element.children, options, index)}
        </clipPath>
      );
    case 'stop':
      return <stop {...attrs} />;
    case 'circle':
      return <circle {...attrs} />;
    case 'rect':
      return <rect {...attrs} />;
    case 'line':
      return <line {...attrs} />;
    case 'polygon':
      return <polygon {...attrs} />;
    case 'polyline':
      return <polyline {...attrs} />;
    case 'ellipse':
      return <ellipse {...attrs} />;
    default:
      console.warn(`Unsupported SVG element type: ${element.type}`);
      return null;
  }
};

export const createReactSvg = (svgData: ParsedSvg, options: SvgTransformOptions) => {
  const {
    width,
    height,
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
      {svgData.elements.map((element, index) => 
        renderSvgElement(element, options, index)
      )}
      {gradient && <IconGradient variation={gradient as unknown as Gradients} id={gradientId as string} />}
    </svg>
  );
};