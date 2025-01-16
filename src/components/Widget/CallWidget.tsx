import React from 'react';
import styled, { useTheme } from 'styled-components';

import { CallIncomingIcon, CallOutgoingIcon } from '../Icon';
import Text from '../Text/Text';
import TextTypes from '../Text/TextTypes';
import Widget, { WidgetProps, WidgetSizes } from './Widget';

const CallDescription = styled(Text)`
  color: ${({ theme }) => theme.color.text.secondary};
`;

const CallLink = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.radius.small};
  cursor: pointer;
`;

interface CallWidgetProps extends WidgetProps {
  description: string;
  isMissed?: boolean;
  isOutgoing?: boolean;
  returnCallLink?: string;
  header?: string;
}

const CallWidget = ({
  description,
  header,
  isMissed,
  isOutgoing,
  returnCallLink,
  ...widgetProps
}: CallWidgetProps) => {
  const theme = useTheme();
  return (
    <Widget width={WidgetSizes.Medium} {...widgetProps}>
      <CallLink href={returnCallLink}>
        {isOutgoing ? (
          <CallOutgoingIcon
            label={''}
            labelId={''}
            width={24}
            height={24}
            borderColor={theme.color.surface.secondary}
            color={
              isMissed ? theme.color.status.error : theme.color.text.primary
            }
            circular
          />
        ) : (
          <CallIncomingIcon
            label={''}
            labelId={''}
            width={24}
            height={24}
            borderColor={theme.color.surface.secondary}
            color={
              isMissed ? theme.color.status.error : theme.color.text.primary
            }
            circular
          />
        )}

        <div>
          <Text type={TextTypes.Heading6} bold>
            {header}
          </Text>
          <CallDescription disableParser>
            {description || 'N/A'}
          </CallDescription>
        </div>
      </CallLink>
    </Widget>
  );
};

export default CallWidget;
