import {
  ButtonAppearance,
  ButtonSizes,
  ButtonVariations,
  LinkBaseProps,
  TextTypes,
} from '@a-little-world/little-world-design-system-core';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { forwardRef } from 'react';
import {
  Linking,
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useTheme } from 'styled-components/native';
import { isInternalLink } from '../../utils/links';
import { getButtonStyles, gradientStyles } from '../Button/styles';
import Gradient from '../Gradient/Gradient';
import BaseText from '../Text/BaseText';
import { getLinkStyles, getLinkTextStyles } from './styles';

export type LinkProps = Omit<PressableProps, 'onPress'> &
  LinkBaseProps & {
    params?: Record<string, any>;
    style?: StyleProp<ViewStyle>;
  };

/**
 * Link component for React Native
 * - Uses React Navigation for internal navigation (`to`, or root-absolute `href`)
 * - Uses Linking API for external links (`href`)
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
    ref,
  ) => {
    const theme = useTheme();
    // Always call useNavigation, but handle the case where it's not available
    const navigation = useNavigation<NavigationProp<any>>();
    const hasGradient = buttonAppearance === ButtonAppearance.Primary;
    const isInternalHref = isInternalLink(href);

    const handlePress = () => {
      if (onClick) {
        onClick();
      }

      if (href && !isInternalHref) {
        // Handle external link
        Linking.openURL(href).catch(err => {
          console.error('Failed to open URL:', err);
        });
      } else if (to || isInternalHref) {
        // Handle internal navigation
        try {
          navigation.navigate((href || to) as string, params);
        } catch (_error) {
          console.warn(
            'Navigation not available. Make sure your Link is inside NavigationContainer.',
          );
        }
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
            textDecoration: buttonAppearance ? false : textDecoration,
          })}
        >
          {children}
        </BaseText>
      </Pressable>
    );
  },
);

export default Link;
