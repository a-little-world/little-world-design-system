import React, { ReactElement } from "react";
import { View } from "react-native";
import Svg, {
  Path,
  G,
  Circle,
  Rect,
  Line,
  Polygon,
  Polyline,
  Ellipse,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg";
import {
  SvgTransformOptions,
  ParsedSvg,
  Gradients,
  SvgElement,
} from "@a-little-world/little-world-design-system-core";
import IconGradient from "../components/Icon/IconGradient";

const BLACK_HEX = '#000';

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
  parentIndex: string | number
): ReactElement[] => {
  return children
    .map((child, i) => renderSvgElement(child, options, `${parentIndex}-${i}`))
    .filter(Boolean) as ReactElement[]; // Filter out null elements and cast to ReactElement[]
};

// Renders SVG elements recursively
const renderSvgElement = (
  element: SvgElement,
  options: SvgTransformOptions,
  index: string | number
): ReactElement | null => {
  const { gradient, gradientId, color } = options;

  // Get all attributes and override fill for path elements if needed
  const attrs = { ...element.attributes };
  
  // Handle color attributes for SVG elements based on the colorAttribute property
  // If element has color set that isn't #000 - do not override
  if (element.colorAttribute && element.colorAttribute !== "none") {
    if (attrs[element.colorAttribute] === BLACK_HEX) {
      attrs[element.colorAttribute] = color || BLACK_HEX;
    } else {
      if (gradient) {
        attrs[element.colorAttribute] = `url(#gradient${gradientId})`;
      } else {
        attrs[element.colorAttribute] =
          attrs[element.colorAttribute] || color || BLACK_HEX;
      }
    }
  }

  // Add unique key attribute
  const key = generateUniqueKey(element, index);

  switch (element.type) {
    case "path":
      return <Path key={key} {...attrs} />;
    case "g":
      return (
        <G key={key} {...attrs}>
          {renderChildren(element.children, options, index)}
        </G>
      );
    case "defs":
      return (
        <Defs key={key} {...attrs}>
          {renderChildren(element.children, options, index)}
        </Defs>
      );
    case "linearGradient":
      return (
        <LinearGradient key={key} {...attrs}>
          {renderChildren(element.children, options, index)}
        </LinearGradient>
      );
    case "stop":
      return <Stop key={key} {...attrs} />;
    case "clipPath":
      return (
        <ClipPath key={key} {...attrs}>
          {renderChildren(element.children, options, index)}
        </ClipPath>
      );
    case "circle":
      return <Circle key={key} {...attrs} />;
    case "rect":
      return <Rect key={key} {...attrs} />;
    case "line":
      return <Line key={key} {...attrs} />;
    case "polygon":
      return <Polygon key={key} {...attrs} />;
    case "polyline":
      return <Polyline key={key} {...attrs} />;
    case "ellipse":
      return <Ellipse key={key} {...attrs} />;
    default:
      console.warn(`Unsupported SVG element type: ${element.type}`);
      return null;
  }
};

export const createReactNativeSvg = (
  svgData: ParsedSvg,
  options: SvgTransformOptions
) => {
  const { label, width, height, gradient, gradientId, style } = options;
  
  return (
    <View key={`${Math.random().toString(36).substring(2, 11)}`} style={style}>
      <Svg
        accessible={true}
        accessibilityLabel={label}
        width={width}
        height={height}
        viewBox={svgData.viewBox}
        fill="none"
      >
        {gradient && (
          <IconGradient
            variation={gradient as Gradients}
            id={gradientId as string}
          />
        )}

        {svgData.elements.map((element, index) =>
          renderSvgElement(element, options, index)
        )}
      </Svg>
    </View>
  );
};

export default createReactNativeSvg;
