export const getDefaultProps = props => ({
  color: props.color || 'currentColor',
  height: props.height || '32',
  strokeWidth: props.strokeWidth || 2,
  width: props.width || '32',
  ...props,
});
