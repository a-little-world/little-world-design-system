import React from 'react';
import {
  SvgTransformOptions,
  ParsedSvg,
  SvgElement,
  Gradients,
  GradientTypes,
} from '@a-little-world/little-world-design-system-core';
import IconGradient from '../components/Icon/IconGradient';

// Helper function to generate unique keys
const generateUniqueKey = (element: SvgElement, index: string | number) => {
  return `${element.type}-${index}-${Math.random()
    .toString(36)
    .substring(2, 11)}`;
};

// Helper function to safely render children, filtering out null values
const renderChildren = (
  children: SvgElement[],
  options: SvgTransformOptions,
  parentIndex: string | number,
) => {
  return children
    .map((child, i) => renderSvgElement(child, options, `${parentIndex}-${i}`))
    .filter(Boolean); // Filter out null elements
};

// Renders SVG elements recursively
const renderSvgElement = (
  element: SvgElement,
  options: SvgTransformOptions,
  index: string | number,
) => {
  const { gradient, gradientId, color } = options;

  // Get all attributes and override fill for path elements if needed
  const attrs = { ...element.attributes };

  // Handle color attributes for SVG elements based on the colorAttribute property
  // If element has color set that isn't #000 - do not override
  if (element.colorAttribute && element.colorAttribute !== 'none') {
    if (attrs[element.colorAttribute] === '#000') {
      attrs[element.colorAttribute] = gradient
        ? `url(#${gradientId})`
        : color || 'currentColor';
    } else {
      attrs[element.colorAttribute] =
        attrs[element.colorAttribute] || color || 'currentColor';
    }
  }

  // Add unique key attribute
  const elementKey = generateUniqueKey(element, index);

  switch (element.type) {
    case 'path':
      return <path key={elementKey} {...attrs} />;
    case 'g':
      return (
        <g key={elementKey} {...attrs}>
          {renderChildren(element.children, options, index)}
        </g>
      );
    case 'defs':
      return (
        <defs key={elementKey} {...attrs}>
          {renderChildren(element.children, options, index)}
        </defs>
      );
    case 'linearGradient':
      return (
        <linearGradient key={elementKey} {...attrs}>
          {renderChildren(element.children, options, index)}
        </linearGradient>
      );
    case 'clipPath':
      return (
        <clipPath key={elementKey} {...attrs}>
          {renderChildren(element.children, options, index)}
        </clipPath>
      );
    case 'stop':
      return <stop key={elementKey} {...attrs} />;
    case 'circle':
      return <circle key={elementKey} {...attrs} />;
    case 'rect':
      return <rect key={elementKey} {...attrs} />;
    case 'line':
      return <line key={elementKey} {...attrs} />;
    case 'polygon':
      return <polygon key={elementKey} {...attrs} />;
    case 'polyline':
      return <polyline key={elementKey} {...attrs} />;
    case 'ellipse':
      return <ellipse key={elementKey} {...attrs} />;
    default:
      console.warn(`Unsupported SVG element type: ${element.type}`);
      return null;
  }
};

export const createReactSvg = (
  svgData: ParsedSvg,
  options: SvgTransformOptions,
) => {
  const {
    className,
    width,
    height,
    gradient,
    gradientId,
    gradientType,
    label,
  } = options;

  return (
    <svg
      aria-labelledby={label}
      fill="none"
      focusable={false}
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={svgData.viewBox}
    >
      {svgData.elements.map((element, index) =>
        renderSvgElement(element, options, index),
      )}
      {gradient && (
        <IconGradient
          variation={gradient as Gradients}
          type={gradientType as GradientTypes}
          id={gradientId as string}
        />
      )}
    </svg>
  );
};
