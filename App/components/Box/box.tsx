import React from 'react'
import * as Styled from './box.styled'
import { BoxProps } from './box.types'

const Box = ({
  children = '',
  color,
  backgroundColor,
  m,
  mh,
  mv,
  ml,
  mr,
  mt,
  mb,
  p,
  ph,
  pv,
  pl,
  pr,
  pt,
  pb,
  border,
  borderRadius,
}: BoxProps) => (
  <Styled.BoxContainer
    color={color}
    backgroundColor={backgroundColor}
    m={m}
    mh={mh}
    mv={mv}
    ml={ml}
    mr={mr}
    mt={mt}
    mb={mb}
    p={p}
    ph={ph}
    pv={pv}
    pl={pl}
    pr={pr}
    pt={pt}
    pb={pb}
    border={border}
    borderRadius={borderRadius}
  >
    {children}
  </Styled.BoxContainer>
)

export default Box
