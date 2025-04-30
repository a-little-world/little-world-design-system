import React, { ReactElement } from 'react';
import { View } from 'react-native';
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
  ClipPath
} from 'react-native-svg';
import { SvgTransformOptions, ParsedSvg, Gradients, SvgElement } from '@a-little-world/little-world-design-system-core';
import IconGradient from '../components/Icon/IconGradient';

// Helper function to generate unique keys
const generateUniqueKey = (element: SvgElement, index: string | number) => {
  return `${element.type}-${index}-${Math.random().toString(36).substring(2, 11)}`;
};

// Helper function to safely render children, filtering out null values
const renderChildren = (children: SvgElement[], options: SvgTransformOptions, parentIndex: string | number): ReactElement[] => {
  return children
    .map((child, i) => renderSvgElement(child, options, `${parentIndex}-${i}`))
    .filter(Boolean) as ReactElement[]; // Filter out null elements and cast to ReactElement[]
};

const FILL_ATTR = 'fill';

// Renders SVG elements recursively
const renderSvgElement = (element: SvgElement, options: SvgTransformOptions, index: string | number): ReactElement | null => {
  const { gradient, gradientId, color } = options;
  
  // Get all attributes and override fill for path elements if needed
  const attrs = {...element.attributes};
  console.log({attrs})
  
  // Handle color attributes for SVG elements based on the colorAttribute property
  if (element.colorAttribute && element.colorAttribute !== 'none') {
    if (gradient) {
      attrs[element.colorAttribute] = `url(#gradient${gradientId})`;
    } else if (color) {
      attrs[element.colorAttribute] = color;
    }
  }
  
  // Add unique key attribute
  const key = generateUniqueKey(element, index);
  
  switch (element.type) {
    case 'path':
      return <Path {...attrs} />;
    case 'g':
      return (
        <G {...attrs}>
          {renderChildren(element.children, options, index)}
        </G>
      );
    case 'defs':
      return (
        <Defs {...attrs}>
          {renderChildren(element.children, options, index)}
        </Defs>
      );
    case 'linearGradient':
      return (
        <LinearGradient {...attrs}>
          {renderChildren(element.children, options, index)}
        </LinearGradient>
      );
    case 'stop':
      return <Stop {...attrs} />;
    case 'clipPath':
      return (
        <ClipPath {...attrs}>
          {renderChildren(element.children, options, index)}
        </ClipPath>
      );
    case 'circle':
      return <Circle {...attrs} />;
    case 'rect':
      return <Rect {...attrs} />;
    case 'line':
      return <Line {...attrs} />;
    case 'polygon':
      return <Polygon {...attrs} />;
    case 'polyline':
      return <Polyline {...attrs} />;
    case 'ellipse':
      return <Ellipse {...attrs} />;
    default:
      console.warn(`Unsupported SVG element type: ${element.type}`);
      return null;
  }
};

export const createReactNativeSvg = (svgData: ParsedSvg, options: SvgTransformOptions) => {
  const {
    width,
    height,
    gradient,
    gradientId,
    style,
  } = options;

  return (
    <View key={`${Math.random().toString(36).substring(2, 11)}`} style={style}>
      <Svg
        width={width}
        height={height}
        viewBox={svgData.viewBox}
      >
        {gradient && <IconGradient variation={gradient as Gradients} id={gradientId as string} />}
        
        {svgData.elements.map((element, index) => 
          renderSvgElement(element, options, index)
        )}
      </Svg>
    </View>
  );
};

export default createReactNativeSvg;