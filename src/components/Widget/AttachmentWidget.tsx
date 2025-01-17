import React from 'react';
import styled from 'styled-components';

import { AttachmentIcon } from '../Icon';
import Text from '../Text/Text';
import TextTypes from '../Text/TextTypes';
import Widget from './Widget';

export const ImageSizes = {
  xsmall: '72px',
  small: '128px',
  medium: '154px',
  large: '180px',
  flex: '100%',
};

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Abstand zwischen Icon und Text/Button */
  width: 100%; /* Sorgt dafür, dass die Elemente die komplette Breite nutzen */
  gap: ${({ theme }) => theme.spacing.small};
`;

const PictureContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.small};
`;

const AttachmentAnchor = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.color.gradient.orange10};
  color: ${({ theme }) => theme.color.text.primary};
  padding: 10px 20px;
  border-radius: 5px;
  border: 
  text-align: center;
  cursor: pointer;
`;

const Image = styled.img`
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: end;
  justify-content: center;
  width: 100%;
  height: auto;
  max-width: 400px;
  object-fit: cover;
`;

interface AttachmentWidgetProps {
  header?: string;
  attachmentTitle?: string;
  attachmentLink?: string;
  imageSrc?: string;
}

const AttachmentWidget = ({
  header,
  attachmentTitle,
  attachmentLink,
  imageSrc,
}: AttachmentWidgetProps) => {
  return (
    <Widget header={header}>
      <ContentContainer>
        <AttachmentIcon
          label={'attachment icon'}
          labelId={'attachmentIcon'}
          width={24}
          height={24}
        />
        {imageSrc ? (
          <PictureContainer>
            <Image src={imageSrc} />
          </PictureContainer>
        ) : (
          <AttachmentAnchor href={attachmentLink}>
            {attachmentTitle}
          </AttachmentAnchor>
        )}
      </ContentContainer>
    </Widget>
  );
};

export default AttachmentWidget;
