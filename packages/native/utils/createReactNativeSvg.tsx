import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { SvgTransformOptions, ParsedSvg, Gradients } from '@a-little-world/little-world-design-system-core';
import IconGradient from '../components/Icon/IconGradient';

export const createReactNativeSvg = (svgData: ParsedSvg, options: SvgTransformOptions) => {
  const {
    width,
    height,
    color,
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
        
        {svgData.paths.map((path, index) => (
          <Path
            key={index}
            d={path.d}
            fill={gradient ? `url(#gradient${gradientId})` : color}
          />
        ))}
      </Svg>
    </View>
  );
};

export default createReactNativeSvg;