import React from "react";
import styled from "styled-components";
import Widget from "./Widget";
import { AttachementIcon } from "../Icon";
import TextTypes from "../Text/TextTypes";



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

interface AttachementWidgetProps {
    header?: string;
    isPicture?: boolean;
    attachementtitel?: string;
}

const AttachementWidget = ({
    header,
    isPicture,
    attachementtitel,

}: AttachementWidgetProps)=>{
    return(
        <Widget header={header}>
            <ContentContainer>
                <StyledAttachementIcon>
                    <AttachementIcon label={''} labelId={''} width={30} height={30} />
                </StyledAttachementIcon>
                {isPicture ? (
                    <PictureContainer></PictureContainer>	
                ) : (
                    <TitelText>{attachementtitel}</TitelText>
                )}
            </ContentContainer>
        </Widget>
    );
};

export default AttachementWidget;