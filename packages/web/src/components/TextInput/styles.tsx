import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styled, { css } from 'styled-components';

import Button from '../Button/Button';
import { INPUT_ERROR_CSS } from '../InputError/InputError';
import {
  InputHeight,
  InputWidth,
} from '@a-little-world/little-world-design-system-core';
import { pixelate } from '../../utils/styles';

export const InputWrapper = styled.div<{ $width: InputWidth }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ $width }) => pixelate($width)};
  position: relative;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const INPUT_CSS = css<{ $height?: InputHeight }>`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.color.border.subtle};
  background: ${({ theme }) => theme.color.surface.primary};
  color: ${({ theme }) => theme.color.text.primary};
  border-radius: 6px;
  box-sizing: border-box;
  padding: ${({ theme, $height }) =>
    $height === InputHeight.Small ? '5px 8px' : theme.spacing.xxsmall};

  margin-bottom: ${({ theme }) => theme.spacing.xxxxsmall};
  font-size: 1rem;
  height: unset;
  line-height: 1.25;
`;

export const Input = styled.input<{
  $hasError: boolean;
  $height?: InputHeight;
}>`
  ${INPUT_CSS}
`;

export const TelephoneInput = styled(PhoneInput)<{
  $hasError: boolean;
  $height?: InputHeight;
}>`
  > input.form-control {
    ${INPUT_CSS}
    padding-left: 52px;

    ${({ $hasError }) => $hasError && INPUT_ERROR_CSS}
  }

  .flag-dropdown {
    overflow: hidden;
    border: 2px solid
      ${({ theme, $hasError }) =>
        $hasError ? theme.color.border.error : theme.color.border.subtle};
  }

  .flag-dropdown.open {
    overflow: visible;
  }

  .flag-dropdown,
  .flag-dropdown.open {
    background: none;
    border-radius: 6px 0 0 6px;
  }

  .react-tel-input .country-list {
    background: ${({ theme }) => theme.color.surface.elevated};
    background-color: ${({ theme }) => theme.color.surface.elevated};
    color: ${({ theme }) => theme.color.text.primary};
    border-radius: ${({ theme }) => theme.radius.xxxsmall};
  }

  .react-tel-input .country-list .country.highlight {
    background-color: ${({ theme }) => theme.color.surface.quaternary};
  }

  .react-tel-input .flag-dropdown.open .selected-flag {
    background: none;
  }

  .react-tel-input .selected-flag {
    padding: 0 0 0 14px;
    scale: 1.3;
    width: 51px;
    transition: background ease 0.2s;

    > .flag {
      margin-top: -6px;
    }
  }

  .react-tel-input .selected-flag:focus {
    background: none;
  }

  .flag-dropdown .selected-flag:hover {
    background: ${({ theme }) => theme.color.border.subtle};
  }

  .react-tel-input .flag-dropdown.open .selected-flag {
    &:hover {
      background: none;
      filter: brightness(0.8);
    }
  }

  .react-tel-input .selected-flag,
  .react-tel-input .flag-dropdown.open .selected-flag {
    border-radius: 8px 0 0 8px;
  }
`;

export const ShowPasswordToggle = styled(Button)`
  position: absolute;
  right: ${({ theme }) => theme.spacing.xxsmall};
  top: calc(50% - 1px);
  transform: translateY(-50%);
`;
