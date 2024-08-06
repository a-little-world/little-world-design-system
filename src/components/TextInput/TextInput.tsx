import React, { ChangeEvent } from 'react';

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

export enum InputWidth {
  Small = '136px',
  Medium = '240px',
  Large = '480px',
}
interface Props extends React.ComponentPropsWithoutRef<'input'> {
  error?: string;
  id: string;
  inline?: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
  label: string;
  labelTooltip?: string;
  onSubmit?: () => boolean;
  type: string;
  width?: InputWidth;
}

const TextInput: React.FC<Props> = ({
  error,
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
          />
        ) : (
          <Input
            ref={inputRef}
            $hasError={Boolean(error)}
            type={inputType}
            id={id}
            onChange={onChange}
            onKeyDown={handleKeyDown}
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
                labelId="showPassword"
                width={PASSWORD_TOGGLE_ICON_SIZE}
                height={PASSWORD_TOGGLE_ICON_SIZE}
              />
            ) : (
              <EyeOpenIcon
                label="hide password"
                labelId="hidePassword"
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
