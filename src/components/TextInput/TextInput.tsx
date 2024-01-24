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
  label: string;
  labelTooltip?: string;
  type: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  width?: InputWidth;
}

const TextInput: React.FC<Props> = ({
  error,
  label,
  labelTooltip,
  id,
  type = 'text',
  inputRef,
  width = InputWidth.Large,
  onChange,
  ...inputProps
}: Props) => {
  const [inputType, setInputType] = React.useState(type); // ['text', 'password'
  const [showPassword, setShowPassword] = React.useState(false);
  const { defaultValue, value, ...propsWithoutValues } = inputProps;
  const defaultTelephoneVal = (value ?? defaultValue)?.toString() as
    | string
    | undefined;

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
      >
        {error}
      </InputError>
    </InputWrapper>
  );
};

export default TextInput;
