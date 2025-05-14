import React, { forwardRef } from 'react';
import { TouchableOpacityProps, Linking } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { LinkBaseProps, TextTypes } from '@a-little-world/little-world-design-system-core';
import { TouchableLink, ExternalLink, LinkText } from './styles';

export type LinkProps = Omit<TouchableOpacityProps, 'onPress'> & LinkBaseProps & {
  params?: Record<string, any>;
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
    ref,
  ) => {
    // Use try/catch to handle cases when NavigationContainer isn't available
    let navigation: NavigationProp<any> | undefined;
    try {
      navigation = useNavigation();
    } catch (error) {
      // Navigation container not available, will handle in onPress
    }

    const handlePress = () => {
      if (onClick) {
        onClick();
      }
      
      if (href) {
        // Handle external link
        Linking.openURL(href).catch((err) => {
          console.error('Failed to open URL:', err);
        });
      } else if (to && navigation) {
        // Handle internal navigation if navigation is available
        navigation.navigate(to, params);
      } else if (to) {
        console.warn('Navigation not available. Make sure your Link is inside NavigationContainer.');
      }
    };

    // Choose appropriate component based on link type
    const Component = href ? ExternalLink : TouchableLink;
    
    return (
      <Component
        ref={ref}
        $active={active}
        onPress={handlePress}
        $buttonAppearance={buttonAppearance}
        $size={buttonSize}
        style={style}
        accessibilityRole="link"
        {...props}
      >
        <LinkText
          type={textType || TextTypes.Body5}
          bold={Boolean(bold)}
          $buttonAppearance={buttonAppearance}
          $underlineOnHover={textDecoration}
        >
          {children}
        </LinkText>
      </Component>
    );
  },
);

export default Link;
