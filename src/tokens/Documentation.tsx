import React from 'react';
import styled from 'styled-components';

import tokens from './index';

const Section = ({ title }: { title: string }) => {
  const vals = Object.entries(tokens['spacing']);
  // console.log({ vals });
  return (
    <div>
      {vals.map(([key, value]) => (
        <div key={key}>
          <h3>{key}</h3>
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
};

export default Section;
