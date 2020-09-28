import React, { ReactElement, ReactNode } from 'react'
import * as Styled from './box.styled';

export type BoxProps = {
  children: ReactNode,
  color?: string,
  backgroundColor?: string,
  border?: string,
  borderRadius?: string,
  m?: number,
  ml?: number,
  mr?: number,
  mt?: number,
  mb?: number,
  mh?: number,
  mv?: number,
  p?: number,
  pl?: number,
  pr?: number,
  pt?: number,
  pb?: number,
  ph?: number,
  pv?: number,
}

const Box = (props: BoxProps): ReactElement => (
    <Styled.StyledBox
        {...props}
    >
        {props.children}
    </Styled.StyledBox>
);

export default Box;