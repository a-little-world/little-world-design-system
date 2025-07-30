import { getButtonStyles, gradientStyles } from "../Button/styles";
import BaseText from "../Text/BaseText";
import { getLinkStyles, getLinkTextStyles } from "./styles";
import {
  ButtonAppearance,
  ButtonSizes,
  ButtonVariations,
  LinkBaseProps,
  TextTypes,
} from "@a-little-world/little-world-design-system-core";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { forwardRef } from "react";
import { Pressable, PressableProps, ViewStyle, Linking, StyleProp } from "react-native";
import { useTheme } from "styled-components/native";
import Gradient from "../Gradient/Gradient";

export type LinkProps = Omit<PressableProps, "onPress"> &
  LinkBaseProps & {
    params?: Record<string, any>;
    style?: StyleProp<ViewStyle>;
  };

/**
 * Link component for React Native
 * - Uses React Navigation for internal navigation (to)
 * - Uses Linking API for external links (href)
 */
const Link = forwardRef<any, LinkProps>(
  (
    {
      active,
      bold,
      buttonAppearance,
      buttonSize,
      children,
      href,
      to,
      params,
      style,
      textType,
      textDecoration = true,
      onClick,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();
    // Use try/catch to handle cases when NavigationContainer isn't available
    let navigation: NavigationProp<any> | undefined;
    try {
      navigation = useNavigation();
    } catch (error) {
      // Navigation container not available, will handle in onPress
    }
    const hasGradient =
      buttonAppearance === ButtonAppearance.Primary;

    const handlePress = () => {
      if (onClick) {
        onClick();
      }

      if (href) {
        // Handle external link
        Linking.openURL(href).catch((err) => {
          console.error("Failed to open URL:", err);
        });
      } else if (to && navigation) {
        // Handle internal navigation if navigation is available
        navigation.navigate(to, params);
      } else if (to) {
        console.warn(
          "Navigation not available. Make sure your Link is inside NavigationContainer."
        );
      }
    };

    const linkStyles = buttonAppearance
      ? getButtonStyles({
        theme,
        appearance: buttonAppearance,
        size: buttonSize || ButtonSizes.Stretch,
        variation: ButtonVariations.Basic,
      })
      : getLinkStyles({ theme });

    return (
      <Pressable
        ref={ref}
        onPress={handlePress}
        accessibilityRole="link"
        style={[linkStyles, style]}
        {...props}
      >
        {hasGradient && (
          <Gradient
            gradient={theme.color.gradient.orange10}
            style={{ ...linkStyles, ...gradientStyles.fullSize }}
          />
        )}
        <BaseText
          type={textType || TextTypes.Body5}
          bold={Boolean(buttonAppearance || bold)}
          style={getLinkTextStyles({
            theme,
            buttonAppearance,
            textDecoration: buttonAppearance ? false : textDecoration
          })}
        >
          {children}
        </BaseText>
      </Pressable>
    );
  }
);

export default Link;
