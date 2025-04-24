import React from 'react';
import styled from 'styled-components';

import tokens from '../tokens';

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.xxxsmall};
  margin-bottom: ${tokens.spacing.small};
`;

const Details = styled.div``;

export const TypographyItem = ({ item, details }: any) => (
  <Item>
    {item}
    <Details>{details}</Details>
  </Item>
);
