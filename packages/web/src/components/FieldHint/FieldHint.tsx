import React from 'react';
import styled, { useTheme } from 'styled-components';

import {
  FieldHintBaseProps,
  TextTypes,
} from '@a-little-world/little-world-design-system-core';
import Text from '../Text/Text';
import { InfoIcon } from '../Icon';

const HINT_ICON_SIZE = 14;

const FieldHintWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxxsmall};
  margin-top: ${({ theme }) => theme.spacing.xxxsmall};
`;

type FieldHintProps = FieldHintBaseProps & {
  className?: string;
  id?: string;
};

const FieldHint: React.FC<FieldHintProps> = ({
  text,
  withIcon = true,
  className,
  id,
}) => {
  const theme = useTheme();
  const color = theme.color.text.secondary;

  return (
    <FieldHintWrapper className={className} id={id}>
      {withIcon && (
        <InfoIcon
          label="hint"
          width={HINT_ICON_SIZE}
          height={HINT_ICON_SIZE}
          color={color}
        />
      )}
      <Text type={TextTypes.Body6} color={color}>
        {text}
      </Text>
    </FieldHintWrapper>
  );
};

export default FieldHint;
