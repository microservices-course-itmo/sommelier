import React from 'react';
import styled from 'styled-components';

import ColorBox from './colorBox';
import { colors } from './colors';

const PaletteWrapper = styled.div`
  background-color: #fff;
  padding: 8px;
  border: 1px solid gainsboro;
  border-right: 4px;
  display: flex;
  flex-wrap: wrap;
`;

export default {
  title: 'Colors',
};

export const palette = () => (
  <PaletteWrapper>
    {(Object.keys(colors) as Array<keyof typeof colors>).map(color => (
      <ColorBox color={colors[color]} colorName={color} key={color} />
    ))}
  </PaletteWrapper>
)