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
import React, { ChangeEvent } from 'react';

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

  const isControlled = value !== undefined;
  const [hasInternalValue, setHasInternalValue] = React.useState(
    Boolean(defaultValue),
  );
  const activeError =
    Boolean(error) && !(isControlled ? false : hasInternalValue);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setHasInternalValue(e.target.value.length > 0);
    }
    onChange?.(e);
  };

  const handleTelephoneChange = (
    _value: string,
    _country: string,
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    if (!isControlled) {
      setHasInternalValue(e.target.value.length > 0);
    }
    onChange?.(e);
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
        <Label bold htmlFor={id} tooltipText={labelTooltip}>
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
            inputProps={{ ...propsWithoutValues, ref: inputRef }}
            $hasError={activeError}
            value={defaultTelephoneVal}
            countryCodeEditable={false}
            $height={height}
          />
        ) : (
          <Input
            ref={inputRef}
            $hasError={activeError}
            type={inputType}
            id={id}
            onChange={handleChange}
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

      {!cannotError && (
        <InputError
          visible={activeError}
          textAlign={width === InputWidth.Large ? 'right' : 'left'}
          {...errorProps}
        >
          {error}
        </InputError>
      )}
    </InputWrapper>
  );
};

export default TextInput;
