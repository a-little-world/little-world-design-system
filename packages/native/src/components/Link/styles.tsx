import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { ThemeProps } from 'styled-components';

import { ButtonAppearance, ButtonSizes } from '@a-little-world/little-world-design-system-core';
import Text from '../Text/Text';

const getButtonStyles = (
  theme: any, 
  buttonAppearance: ButtonAppearance | undefined, 
  size: ButtonSizes | undefined
) => {
  const sizeStyles = size ? { /* Add size-specific styles based on ButtonSizes */ } : {};
  
  if (buttonAppearance === ButtonAppearance.Primary) {
    return {
      backgroundColor: theme.color.gradient.orange10,
      padding: 10,
      borderRadius: 4,
      ...sizeStyles,
    };
  } else if (buttonAppearance === ButtonAppearance.Secondary) {
    return {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: theme.color.border.bold,
      padding: 10,
      borderRadius: 4,
      ...sizeStyles,
    };
  }
  
  return {};
};

interface LinkStyledProps {
  $active?: boolean;
  $color?: string;
  $buttonAppearance?: ButtonAppearance;
  $size?: ButtonSizes;
}

export const TouchableLink = styled(TouchableOpacity)<LinkStyledProps>`
  ${({ theme, $buttonAppearance, $size, $color }: ThemeProps<any> & LinkStyledProps) => {
    if ($buttonAppearance) {
      return getButtonStyles(theme, $buttonAppearance, $size);
    }
    
    return {
      color: $color || theme.color.text.link,
    };
  }}
`;

export const ExternalLink = styled(TouchableOpacity)<LinkStyledProps>`
  ${({ theme, $buttonAppearance, $size, $color }: ThemeProps<any> & LinkStyledProps) => {
    if ($buttonAppearance) {
      return getButtonStyles(theme, $buttonAppearance, $size);
    }
    
    return {
      color: $color || theme.color.text.link,
    };
  }}
`;

interface LinkTextProps {
  $buttonAppearance?: ButtonAppearance;
  $color?: string;
  $underlineOnHover?: boolean;
}

export const LinkText = styled(Text)<LinkTextProps>`
  ${({ theme, $buttonAppearance, $color }: ThemeProps<any> & LinkTextProps) => 
    $buttonAppearance === ButtonAppearance.Primary
      ? { color: theme.color.text.button }
      : { color: $color || theme.color.text.link }
  }
  
  ${({ $underlineOnHover }) => 
    $underlineOnHover && {
      textDecorationLine: 'underline'
    }
  }
`;

// For the underline effect when needed
export const UnderlineView = styled.View<{ $color?: string }>`
  height: 1px;
  background-color: ${({ theme, $color }: ThemeProps<any> & { $color?: string }) => $color || theme.color.text.link};
  width: 100%;
  margin-top: 2px;
`;
