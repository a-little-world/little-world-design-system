import React from "react";
import styled from "styled-components";
import Widget from "./Widget";
import { AttachementIcon } from "../Icon";
import TextTypes from "../Text/TextTypes";


export const ImageSizes = {
    xsmall: '72px',
    small: '128px',
    medium: '154px',
    large: '180px',
    flex: '100%',
};

const StyledAttachementIcon = styled.div`
    color: ${({ theme }) => theme.color.text.primary};
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Abstand zwischen Icon und Text/Button */
  width: 100%; /* Sorgt dafür, dass die Elemente die komplette Breite nutzen */
  gap: ${({ theme }) => theme.spacing.small};
`;

const TitelText = styled.p`
  font-size: ${TextTypes.Body3};
  color: ${({ theme }) => theme.color.text.primary};
`;

const PictureContainer = styled.div`
display: flex;
align-items: center;
width: 100%;
gap: ${({ theme }) => theme.spacing.small};
`;

const AttachementAnchor = styled.a`
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
  max-width: 400px;
  border-radius: 30px;
  object-fit: cover;

  ${({ theme }) =>
    `@media (min-width: ${theme.breakpoints.small}) {
    }`}
`;

interface AttachementWidgetProps {
    header?: string;
    isPicture?: boolean;
    attachementtitel?: string;
    attachementLink?: string;
    imageSrc?: string;
}

const AttachementWidget = ({
    header,
    isPicture,
    attachementtitel,
    attachementLink,
    imageSrc,

}: AttachementWidgetProps)=>{
    return(
        <Widget header={header}>
            <ContentContainer>
                <StyledAttachementIcon>
                    <AttachementIcon label={''} labelId={''} width={30} height={30} />
                </StyledAttachementIcon>
                {isPicture ? (
                    <PictureContainer>
                        <Image>{imageSrc}</Image>
                    </PictureContainer>	
                ) : (

                    <AttachementAnchor href={attachementLink}>
                    <TitelText>{attachementtitel}</TitelText>
                    </AttachementAnchor>
                )}
            </ContentContainer>
        </Widget>
    );
};

export default AttachementWidget;