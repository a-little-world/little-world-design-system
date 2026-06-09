import React from 'react';
import { StyleProp, ViewStyle, View } from 'react-native';
import { FieldHintBaseProps } from '@a-little-world/little-world-design-system-core';
import ToolTip from '../ToolTip/ToolTip';

export type FieldHintProps = FieldHintBaseProps & {
  style?: StyleProp<ViewStyle>;
};

const FieldHint: React.FC<FieldHintProps> = ({
  text,
  trigger,
  icon,
  open,
  side = 'top',
  sideOffset = 8,
  style,
}) => {
  return (
    <View style={style}>
      <ToolTip
        text={text}
        trigger={trigger || icon}
        open={open}
        side={side}
        sideOffset={sideOffset}
      />
    </View>
  );
};

export default FieldHint;
