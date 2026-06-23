import React from 'react';
import styled, { useTheme } from 'styled-components';

import {
  FieldErrorBaseProps,
  TextTypes,
} from '@a-little-world/little-world-design-system-core';
import Text from '../Text/Text';
import { ExclamationIcon } from '../Icon';

const ERROR_ICON_SIZE = 14;

const FieldErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxxsmall};
  margin-top: ${({ theme }) => theme.spacing.xxxsmall};
`;

type FieldErrorProps = FieldErrorBaseProps & {
  className?: string;
  id?: string;
};

const FieldError: React.FC<FieldErrorProps> = ({
  text,
  withIcon = true,
  className,
  id,
}) => {
  const theme = useTheme();
  const color = theme.color.text.error;

  return (
    <FieldErrorWrapper className={className} id={id} role="alert">
      {withIcon && (
        <ExclamationIcon
          label="error"
          width={ERROR_ICON_SIZE}
          height={ERROR_ICON_SIZE}
          color={color}
        />
      )}
      <Text type={TextTypes.Body6} color={color}>
        {text}
      </Text>
    </FieldErrorWrapper>
  );
};

export default FieldError;
