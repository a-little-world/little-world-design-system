import {
  ButtonAppearance,
  ButtonSizes,
  ButtonVariations,
  getLinkKind,
  LinkBaseProps,
  TextTypes,
  withScheme,
} from '@a-little-world/little-world-design-system-core';
import { useLinkTo } from '@react-navigation/native';
import React, { forwardRef } from 'react';
import {
  Linking,
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useTheme } from 'styled-components/native';
import { getButtonStyles, gradientStyles } from '../Button/styles';
import Gradient from '../Gradient/Gradient';
import BaseText from '../Text/BaseText';
import { getLinkStyles, getLinkTextStyles } from './styles';

export type LinkProps = Omit<PressableProps, 'onPress'> &
  LinkBaseProps & {
    style?: StyleProp<ViewStyle>;
  };

/**
 * Link component for React Native
 * - Root-absolute `href`s (`/app/...`) resolve through React Navigation's linking config
 * - Everything else opens via the Linking API
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
      style,
      textType,
      textDecoration = true,
      onClick,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme();
    const linkTo = useLinkTo();
    const hasGradient = buttonAppearance === ButtonAppearance.Primary;

    const handlePress = () => {
      if (onClick) {
        onClick();
      }

      if (!href) return;

      if (getLinkKind(href) === 'internal') {
        linkTo(href);
      } else {
        Linking.openURL(withScheme(href)).catch(err => {
          console.error('Failed to open URL:', err);
        });
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
