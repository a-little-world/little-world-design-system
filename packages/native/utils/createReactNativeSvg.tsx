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

// Helper function to safely render children, filtering out null values
const renderChildren = (children: SvgElement[], options: SvgTransformOptions, parentIndex: string | number): ReactElement[] => {
  return children
    .map((child, i) => renderSvgElement(child, options, `${parentIndex}-${i}`))
    .filter(Boolean) as ReactElement[]; // Filter out null elements and cast to ReactElement[]
};

// Renders SVG elements recursively
const renderSvgElement = (element: SvgElement, options: SvgTransformOptions, index: string | number): ReactElement | null => {
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
  
  // Add key attribute - React Native components need string keys
  attrs.key = index.toString();
  
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
    <View style={style}>
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