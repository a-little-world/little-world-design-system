import React, { SVGProps } from 'react';
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

const hasSvgLabel = (label?: string): label is string =>
  typeof label === 'string' && label.trim().length > 0;

const isAriaHidden = (
  value: React.AriaAttributes['aria-hidden'] | undefined,
): boolean => value === true || value === 'true';

/**
 * Accessible name for icons and illustrations.
 * A non-empty label names the svg. A visible label is a caption instead, and
 * the svg is hidden. Omitted or blank labels are decorative.
 * Caller aria-labelledby / aria-label / aria-hidden win over `label`.
 * `label` never adds a second name next to a caller-provided one.
 */
const svgAccessibilityProps = (
  label: string | undefined,
  labelVisible: boolean | undefined,
  svgProps: SVGProps<SVGSVGElement>,
): SVGProps<SVGSVGElement> => {
  const {
    role: callerRole,
    'aria-label': callerAriaLabel,
    'aria-hidden': callerAriaHidden,
    ...rest
  } = svgProps;

  const labelled = hasSvgLabel(label);
  const captionVisible = labelled && Boolean(labelVisible);
  const callerSetLabel = callerAriaLabel !== undefined;
  const callerSetHidden = callerAriaHidden !== undefined;
  const callerLabelledBy = hasSvgLabel(rest['aria-labelledby']);

  let ariaLabel: SVGProps<SVGSVGElement>['aria-label'];
  if (callerSetLabel) {
    ariaLabel = callerAriaLabel;
  } else if (labelled && !captionVisible && !callerLabelledBy) {
    ariaLabel = label;
  }

  const hasName =
    callerLabelledBy ||
    (typeof ariaLabel === 'string' && ariaLabel.trim().length > 0);

  let ariaHidden = callerAriaHidden;
  if (!callerSetHidden && (captionVisible || !hasName)) {
    ariaHidden = true;
  }

  // A hidden svg is unnamed unless the caller explicitly passed aria-label.
  if (isAriaHidden(ariaHidden) && !callerSetLabel) {
    ariaLabel = undefined;
  }

  const exposedName =
    (callerLabelledBy ||
      (typeof ariaLabel === 'string' && ariaLabel.trim().length > 0)) &&
    !isAriaHidden(ariaHidden);

  const role = callerRole ?? (exposedName ? 'img' : undefined);

  return {
    ...rest,
    ...(role ? { role } : {}),
    ...(ariaLabel !== undefined ? { 'aria-label': ariaLabel } : {}),
    ...(ariaHidden !== undefined ? { 'aria-hidden': ariaHidden } : {}),
  };
};

type CreateReactSvgOptions = SvgTransformOptions &
  SVGProps<SVGSVGElement> & {
    backgroundColor?: string;
    borderColor?: string;
    circular?: boolean;
    labelTop?: number | string;
    size?: number | string;
  };

export const createReactSvg = (
  svgData: ParsedSvg,
  options: CreateReactSvgOptions,
) => {
  const {
    className,
    width,
    height,
    gradient,
    gradientId,
    gradientType,
    label,
    labelVisible,
    accessible: _accessible,
    accessibilityLabel: _accessibilityLabel,
    backgroundColor: _backgroundColor,
    borderColor: _borderColor,
    circular: _circular,
    color: _color,
    colorAttr: _colorAttr,
    labelTop: _labelTop,
    size: _size,
    style: _style,
    children: _children,
    ...svgProps
  } = options;

  const accessibilityProps = svgAccessibilityProps(
    label,
    labelVisible,
    svgProps,
  );

  return (
    <svg
      fill="none"
      focusable={false}
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={svgData.viewBox}
      {...accessibilityProps}
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
