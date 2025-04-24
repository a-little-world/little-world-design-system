import React from 'react';
import styled, { useTheme } from 'styled-components';

import { AttachmentIcon, CameraIcon, DownloadIcon } from '../Icon';
import Modal from '../Modal/Modal';
import Text from '../Text/Text';
import Widget, { Preview, WidgetProps, WidgetSizes } from './Widget';

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
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xxsmall};
  text-align: left;
  cursor: pointer;
  width: 100%;
  text-decoration: none;
`;

const ImageButton = styled.button`
  cursor: pointer;
  padding: 0;
  background: none;
  border: none;
  font-size: 1rem;
`;

const Image = styled.img`
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.radius.small};
  display: flex;
  align-items: end;
  justify-content: center;
  width: 100%;
  height: auto;
  object-fit: cover;
  max-height: 100%;
  max-width: 920px;
`;

interface AttachmentWidgetProps extends Omit<WidgetProps, 'children'> {
  attachmentTitle?: string;
  attachmentLink?: string;
  imageSrc?: string;
  isPreview?: boolean;
}

const AttachmentWidget = ({
  attachmentTitle,
  attachmentLink,
  imageSrc,
  isPreview,
}: AttachmentWidgetProps) => {
  const theme = useTheme();
  const defaultTitle = imageSrc ? 'Photo' : 'File';
  const title = attachmentTitle || defaultTitle;
  const [viewImage, setViewImage] = React.useState(false);

  if (isPreview)
    return (
      <Preview>
        {imageSrc ? (
          <CameraIcon
            label={'attachment icon'}
            labelId={'attachmentIcon'}
            width={16}
          />
        ) : (
          <AttachmentIcon
            label={'attachment icon'}
            labelId={'attachmentIcon'}
            width={12}
          />
        )}
        <Text disableParser>{title}</Text>
      </Preview>
    );

  return (
    <Widget width={WidgetSizes.Large} padding={imageSrc && '0px'}>
      {imageSrc ? (
        <>
          <Modal open={viewImage} onClose={() => setViewImage(false)}>
            <Image src={imageSrc} alt={title} />
          </Modal>
          <ImageButton onClick={() => setViewImage(true)}>
            <Image src={imageSrc} alt={title} />
          </ImageButton>
        </>
      ) : (
        <ContentContainer>
          <AttachmentIcon
            label={'attachment icon'}
            labelId={'attachmentIcon'}
            width={20}
            height={20}
            color={theme.color.text.tertiary}
          />
          <AttachmentDownload href={attachmentLink} download target="_blank">
            <Text disableParser>{title}</Text>
            <DownloadIcon
              label={'download icon'}
              labelId={'downloadIcon'}
              width={20}
              height={20}
              color={theme.color.text.title}
            />
          </AttachmentDownload>
        </ContentContainer>
      )}
    </Widget>
  );
};

export default AttachmentWidget;
