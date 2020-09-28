import React from 'react';
import { number, select } from '@storybook/addon-knobs';
import {  } from '@storybook/addon-actions'
import MyImage from './image';
import { border } from './enums/border';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    display: flex; 
`;

export default {
  title: 'Image',
};

export const imageKnob = () => {
  <StyledWrapper>
    <MyImage
      width={number('width', 256)}
      height={number('height', 256)}
      border={select('border', border, border.SOLID)}
      borderRadius={number('borderRadius', 0)}
    ></MyImage>
  </StyledWrapper>
}