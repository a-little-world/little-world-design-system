import React from 'react';
import styled from 'styled-components';

import Button, { ButtonVariations } from '../Button/Button';
import { PhoneIcon, PhoneSlashIcon } from '../Icon';
import Text from '../Text/Text';
import TextTypes from '../Text/TextTypes';
import Widget from './Widget';

const StyledPhoneIcon = styled.div`
  color: ${({ theme }) => theme.color.text.primary};
`;

const DurationText = styled.p`
  font-size: ${TextTypes.Body3};
  color: ${({ theme }) => theme.color.text.primary};
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Abstand zwischen Icon und Text/Button */
  width: 100%; /* Sorgt dafür, dass die Elemente die komplette Breite nutzen */
  gap: ${({ theme }) => theme.spacing.small};
`;

interface CallWidgetProps {
  duration?: string;
  isMissed?: boolean;
  onReturnCall?: () => void;
  header?: string;
  returnCallText?: string;
}

const CallWidget = ({
  duration,
  header,
  isMissed,
  onReturnCall,
  returnCallText,
}: CallWidgetProps) => {
  return (
    <Widget header={header}>
      <ContentContainer>
        <StyledPhoneIcon>
          {isMissed ? (
            <PhoneSlashIcon label={''} labelId={''} width={30} height={30} />
          ) : (
            <PhoneIcon label={''} labelId={''} width={30} height={30} />
          )}
        </StyledPhoneIcon>
        {isMissed ? (
          <Button onClick={onReturnCall} variation={ButtonVariations.Option}>
            {returnCallText}
          </Button>
        ) : (
          <DurationText>{duration || 'N/A'}</DurationText>
        )}
      </ContentContainer>
    </Widget>
  );
};

export default CallWidget;
