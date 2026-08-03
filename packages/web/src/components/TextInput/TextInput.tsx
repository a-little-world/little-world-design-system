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
import {
  InputHeight,
  InputWidth,
  TextInputBaseProps,
} from '@a-little-world/little-world-design-system-core';
import React, { ChangeEvent, useEffect, useState } from 'react';

const PASSWORD_TOGGLE_ICON_SIZE = 20;

export { InputWidth, InputHeight };

type TextInputHTMLProps = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'height' | 'onSubmit' | 'width' | 'id'
>;

type TextInputCommonProps = TextInputHTMLProps &
  Omit<TextInputBaseProps, 'label'> & {
    inputRef?: React.RefObject<HTMLInputElement>;
    label?: string;
  };

export type Props =
  | (TextInputCommonProps & {
      label?: undefined;
      id?: string;
    })
  | (TextInputCommonProps & {
      label: string;
      id: string;
    });

const TextInput: React.FC<Props> = ({
  cannotError,
  error,
  height,
  id,
  inline,
  inputRef,
  label,
  labelTooltip,
  onChange,
  onSubmit,
  onlyCountries,
  required,
  type = 'text',
  width = InputWidth.Large,
  ...inputProps
}: Props) => {
  const [inputType, setInputType] = React.useState(type); // ['text', 'password'
  const [showPassword, setShowPassword] = React.useState(false);
  const [displayError, setDisplayError] = useState(error);
  const { defaultValue, value, ...propsWithoutValues } = inputProps;
  const defaultTelephoneVal = (value ?? defaultValue)?.toString() as
    | string
    | undefined;

  useEffect(() => {
    setDisplayError(error);
  }, [error]);

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
    setDisplayError(e.target.value.trim() ? undefined : error);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    setDisplayError(e.target.value.trim() ? undefined : error);
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onSubmit && e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      await onSubmit();
    }
  };

  return (
    <InputWrapper $width={width}>
      {label && (
        <Label bold htmlFor={id} tooltipText={labelTooltip} required={required}>
          {label}
        </Label>
      )}
      <InputContainer>
        {type === 'tel' ? (
          <TelephoneInput
            country="de"
            onlyCountries={onlyCountries}
            disableDropdown={onlyCountries?.length === 1}
            onChange={handleTelephoneChange}
            inputProps={{
              ...propsWithoutValues,
              ref: inputRef,
              required,
              'aria-invalid': Boolean(displayError) || undefined,
              'aria-describedby':
                displayError && id ? `${id}-error` : undefined,
            }}
            $hasError={!!displayError}
            value={defaultTelephoneVal}
            countryCodeEditable={false}
            $height={height}
          />
        ) : (
          <Input
            ref={inputRef}
            $hasError={Boolean(displayError)}
            type={inputType}
            id={id}
            required={required}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            $height={height}
            aria-invalid={Boolean(displayError) || undefined}
            aria-describedby={displayError && id ? `${id}-error` : undefined}
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

      {!cannotError && (
        <InputError
          id={id ? `${id}-error` : undefined}
          visible={Boolean(displayError)}
          textAlign={width === InputWidth.Large ? 'right' : 'left'}
          {...errorProps}
        >
          {displayError}
        </InputError>
      )}
    </InputWrapper>
  );
};

export default TextInput;
