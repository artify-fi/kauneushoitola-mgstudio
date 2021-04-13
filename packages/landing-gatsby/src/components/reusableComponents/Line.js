import React from 'react';
import { paddingRight } from 'styled-system';

const ColoredLine = ({ color, width }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 5,
      width: width,
    }}
  />
);

export default ColoredLine;
