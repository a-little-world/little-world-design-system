import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxxsmall};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const Details = styled.div``;

export const TypographyItem = ({ item, details }: any) => (
  <Item>
    {item}
    <Details>{details}</Details>
  </Item>
);
