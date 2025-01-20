import React from 'react';
import styled, { useTheme } from 'styled-components';

import { AttachmentIcon, DownloadIcon } from '../Icon';
import { ArrowDownIcon } from '../Icon/variants/ArrowDown';
import Text from '../Text/Text';
import TextTypes from '../Text/TextTypes';
import Widget, { WidgetProps, WidgetSizes } from './Widget';

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
  width: 100%;
  gap: ${({ theme }) => theme.spacing.xxsmall};
  padding: ${({ theme }) => theme.spacing.xxsmall};
`;

const AttachmentDownload = styled.a`
  display: inline-flex;
  color: ${({ theme }) => theme.color.text.primary};
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.small};
  text-align: center;
  cursor: pointer;
  width: 100%;
`;

const Image = styled.img`
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.radius.xxsmall};
  display: flex;
  align-items: end;
  justify-content: center;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

interface AttachmentWidgetProps extends Omit<WidgetProps, 'children'> {
  attachmentTitle?: string;
  attachmentLink?: string;
  imageSrc?: string;
}

const AttachmentWidget = ({
  attachmentTitle,
  attachmentLink,
  imageSrc,
}: AttachmentWidgetProps) => {
  const theme = useTheme();
  return (
    <Widget width={WidgetSizes.Large} padding={imageSrc && '0px'}>
      {imageSrc ? (
        <Image src={imageSrc} />
      ) : (
        <ContentContainer>
          <AttachmentIcon
            label={'attachment icon'}
            labelId={'attachmentIcon'}
            width={24}
            height={24}
            color={theme.color.text.quaternary}
          />
          <AttachmentDownload href={attachmentLink} download>
            <Text>{attachmentTitle}</Text>
            <DownloadIcon
              label={'download icon'}
              labelId={'downloadIcon'}
              width={24}
              height={24}
              color={theme.color.text.title}
            />
          </AttachmentDownload>
        </ContentContainer>
      )}
    </Widget>
  );
};

export default AttachmentWidget;
