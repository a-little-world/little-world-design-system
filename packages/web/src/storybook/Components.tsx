import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxxsmall};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.color.text.primary};

  > * {
    margin: 0px !important;
  }
`;

const Details = styled.div`
  font-family: 'Signika Negative', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  line-height: 1.5;
`;

export const TypographyItem = ({ item, details }: any) => (
  <Item>
    {item}
    <Details>{details}</Details>
  </Item>
);
