import React, { ChangeEvent } from 'react';
import { InputHeight, InputWidth, TextInputBaseProps } from '@a-little-world/little-world-design-system-core'
import { ButtonVariations } from '../Button/Button';
import { EyeClosedIcon, EyeOpenIcon } from '../Icon';
import InputError from '../InputError/InputError';
import Label from '../Label/Label';
import {
  Input,
  InputContainer,
  InputWrapper,
  ShowPasswordToggle,
  TelephoneInput,
} from './styles';

const PASSWORD_TOGGLE_ICON_SIZE = 20;

export { InputWidth, InputHeight }
interface Props extends Omit<React.ComponentPropsWithoutRef<'input'>, 'height' | 'onSubmit' | 'width'>, TextInputBaseProps {
  inputRef?: React.RefObject<HTMLInputElement>;
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
  const [inputType, setInputType] = React.useState(type); // ['text', 'password'
  const [showPassword, setShowPassword] = React.useState(false);
  const { defaultValue, value, ...propsWithoutValues } = inputProps;
  const defaultTelephoneVal = (value ?? defaultValue)?.toString() as
    | string
    | undefined;

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

  const handleTelephoneChange = (
    value: string,
    country: string,
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    onChange?.(e);
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onSubmit && e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const submitSuccessful = await onSubmit();
    }
  };

  return (
    <InputWrapper $width={width}>
      {label && (
        <Label bold htmlFor={id} toolTipText={labelTooltip}>
          {label}
        </Label>
      )}
      <InputContainer>
        {type === 'tel' ? (
          <TelephoneInput
            country="de"
            onChange={handleTelephoneChange}
            inputProps={{ ...propsWithoutValues, ref: inputRef }}
            $hasError={!!error}
            value={defaultTelephoneVal}
            countryCodeEditable={false}
            $height={height}
          />
        ) : (
          <Input
            ref={inputRef}
            $hasError={Boolean(error)}
            type={inputType}
            id={id}
            onChange={onChange}
            onKeyDown={handleKeyDown}
            $height={height}
            {...inputProps}
          />
        )}
        {type === 'password' && (
          <ShowPasswordToggle
            type="button"
            variation={ButtonVariations.Icon}
            onClick={handlePasswordVisibilityToggle}
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
