import Text from "../Text/Text";
import {
  ProgressBarBaseProps,
  calculateProgress,
} from "@a-little-world/little-world-design-system-core";
import { TextTypes } from "@a-little-world/little-world-design-system-core";
import * as ProgressPrimitive from "@rn-primitives/progress";
import React, { useEffect, useState } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { useTheme } from "styled-components/native";
import { getProgressBarStyles } from "./styles";

interface ProgressBarProps extends ProgressBarBaseProps {
  style?: StyleProp<ViewStyle>;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ style, max, value = 0 }) => {
  const [progress, setProgress] = useState(calculateProgress(max, value));
  const theme = useTheme();
  const styles = getProgressBarStyles({ theme });

  useEffect(() => {
    setProgress(calculateProgress(max, value));
  }, [max, value]);

  return (
    <View style={[styles.wrapper, style]}>
      <Text id="progressBarIndicator" tag="span" type={TextTypes.Body6}>
        {value}/{max}
      </Text>
      <ProgressPrimitive.Root
        aria-labelledby="progressBarIndicator"
        value={value}
        max={max}
        style={styles.root}
      >
        <ProgressPrimitive.Indicator
          style={[styles.indicator, { transform: `translateX(-${100 - progress}%)` }]}
        />
      </ProgressPrimitive.Root>
    </View>
  );
};

export default ProgressBar;
