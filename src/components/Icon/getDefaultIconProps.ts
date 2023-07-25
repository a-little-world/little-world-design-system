import { IconSvgProps } from './Icon';
export const getDefaultIconProps = ({
  circular,
  color,
  height,
  width,
  ...rest
}: IconSvgProps): IconSvgProps => ({
  circular,
  color: color || 'currentColor',
  height: height || '32',
  width: width || '32',
  ...rest,
});
