import React from 'react';
import {
  StyleProp,
  ViewStyle,
  View,
  Modal as RNModal,
  Pressable,
} from 'react-native';
import Text from '../Text/Text';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  closeButton?: boolean;
  backdrop?: boolean;
  onBackdropClick?: () => void;
  style?: StyleProp<ViewStyle>;
}

const sizeStyles: Record<string, { width: string }> = {
  small: { width: '60%' },
  medium: { width: '80%' },
  large: { width: '95%' },
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'medium',
  closeButton = true,
  backdrop = true,
  onBackdropClick,
  style,
}) => {
  return (
    <RNModal
      visible={isOpen}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable
        onPress={() => {
          if (backdrop && onBackdropClick) onBackdropClick();
        }}
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={[
            {
              backgroundColor: 'white',
              borderRadius: 8,
              padding: 24,
              ...sizeStyles[size],
            } as ViewStyle,
            style,
          ]}
        >
          {title && (
            <View style={{ marginBottom: 16 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                {title as React.ReactNode}
              </Text>
            </View>
          )}
          {closeButton && (
            <Pressable
              onPress={onClose}
              style={{ position: 'absolute', top: 12, right: 12 }}
            >
              <Text>✕</Text>
            </Pressable>
          )}
          {children}
          {footer && <View style={{ marginTop: 24 }}>{footer}</View>}
        </View>
      </Pressable>
    </RNModal>
  );
};

export default Modal;
