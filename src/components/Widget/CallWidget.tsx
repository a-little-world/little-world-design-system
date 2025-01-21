import React from 'react';
import styled, { useTheme } from 'styled-components';

import { CallIncomingIcon, CallOutgoingIcon } from '../Icon';
import Text from '../Text/Text';
import TextTypes from '../Text/TextTypes';
import Widget, { Preview, WidgetProps, WidgetSizes } from './Widget';

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
  text-decoration: none;
  color: ${({ theme }) => theme.color.text.primary};
`;

const CallIcon = ({
  isPreview,
  isOutgoing,
  isMissed,
}: {
  isPreview?: boolean;
  isOutgoing?: boolean;
  isMissed?: boolean;
}) => {
  const theme = useTheme();

  return isOutgoing ? (
    <CallOutgoingIcon
      label={''}
      labelId={''}
      width={isPreview ? 12 : 24}
      height={isPreview ? 12 : 24}
      borderColor={theme.color.surface.secondary}
      color={isMissed ? theme.color.status.error : theme.color.text.primary}
      circular={!isPreview}
    />
  ) : (
    <CallIncomingIcon
      label={''}
      labelId={''}
      width={isPreview ? 12 : 24}
      height={isPreview ? 12 : 24}
      borderColor={theme.color.surface.secondary}
      color={isMissed ? theme.color.status.error : theme.color.text.primary}
      circular={!isPreview}
    />
  );
};

interface CallWidgetProps extends Omit<WidgetProps, 'children'> {
  description: string;
  isPreview?: boolean;
  isMissed?: boolean;
  isOutgoing?: boolean;
  returnCallLink?: string;
}

const CallWidget = ({
  description,
  header,
  isMissed,
  isOutgoing,
  isPreview,
  returnCallLink,
  ...widgetProps
}: CallWidgetProps) => {
  if (isPreview)
    return (
      <Preview>
        <CallIcon
          isMissed={isMissed}
          isOutgoing={isOutgoing}
          isPreview={isPreview}
        />
        <Text>{header}</Text>
      </Preview>
    );

  return (
    <Widget width={WidgetSizes.Medium} {...widgetProps}>
      <CallLink href={returnCallLink}>
        <CallIcon isMissed={isMissed} isOutgoing={isOutgoing} />
        <div>
          <Text type={TextTypes.Heading6} bold>
            {header}
          </Text>
          {!isPreview && (
            <CallDescription disableParser>
              {description || 'N/A'}
            </CallDescription>
          )}
        </div>
      </CallLink>
    </Widget>
  );
};

export default CallWidget;
