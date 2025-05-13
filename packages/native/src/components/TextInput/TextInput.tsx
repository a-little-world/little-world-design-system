import React from 'react';
import { NativeSyntheticEvent, TextInput as RNTextInput, TextInputKeyPressEventData } from 'react-native';
import { InputWidth, TextInputBaseProps } from '@a-little-world/little-world-design-system-core';
import { ButtonVariations } from '../Button/Button';
import { EyeClosedIcon, EyeOpenIcon } from '../Icon';
import InputError from '../InputError/InputError';
import Button from '../Button/Button';
import {
  Input,
  InputContainer,
  InputWrapper,
  ShowPasswordToggle,
} from './styles';

const PASSWORD_TOGGLE_ICON_SIZE = 20;

interface Props extends React.ComponentProps<typeof RNTextInput>, TextInputBaseProps {
  inputRef?: React.RefObject<RNTextInput>;
  type?: 'text' | 'password' | 'tel';
}

const TextInput: React.FC<Props> = ({
  error,
  height,
  id,
  inline,
  inputRef,
  label,
  labelTooltip,
  onChange,
  onSubmit,
  type = 'text',
  width = InputWidth.Large,
  ...inputProps
}: Props) => {
  const [inputType, setInputType] = React.useState(type);
  const [showPassword, setShowPassword] = React.useState(false);
  const { defaultValue, value, ...propsWithoutValues } = inputProps;

  const errorProps = inline ? { bottom: '-16px', right: '0px' } : {};

  const handlePasswordVisibilityToggle = () => {
    if (inputType === 'password') {
      setInputType('text');
      setShowPassword(true);
    } else {
      setInputType('password');
      setShowPassword(false);
    }
  };

  const handleKeyPress = async (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    if (onSubmit && e.nativeEvent.key === 'Enter') {
      const submitSuccessful = await onSubmit();
    }
  };

  return (
    <InputWrapper width={width}>
      <InputContainer>
        <Input
          hasError={Boolean(error)}
          secureTextEntry={inputType === 'password'}
          id={id}
          onChange={onChange}
          onKeyPress={handleKeyPress}
          height={height}
          {...inputProps}
        />
        {type === 'password' && (
          <ShowPasswordToggle>
            <Button
              variation={ButtonVariations.Icon}
              onPress={handlePasswordVisibilityToggle}
            >
              {showPassword ? (
                <EyeClosedIcon
                  label="show password"
                  width={PASSWORD_TOGGLE_ICON_SIZE}
                  height={PASSWORD_TOGGLE_ICON_SIZE}
                />
              ) : (
                <EyeOpenIcon
                  label="hide password"
                  width={PASSWORD_TOGGLE_ICON_SIZE}
                  height={PASSWORD_TOGGLE_ICON_SIZE}
                />
              )}
            </Button>
          </ShowPasswordToggle>
        )}
      </InputContainer>

      <InputError
        visible={Boolean(error)}
        textAlign={width === InputWidth.Large ? 'right' : 'left'}
        {...errorProps}
      >
        {error}
      </InputError>
    </InputWrapper>
  );
};

export default TextInput;
