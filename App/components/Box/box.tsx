import React, { ReactNode } from 'react'
import theme from '../../theme'

import * as Styled from './box.styled'

export type borderType = {
  borderStyle?: keyof typeof theme.borderStyles
  borderColor?: keyof typeof theme.colors
  borderWidth?: number
}

export type Props = {
  children: ReactNode
  color?: keyof typeof theme.colors
  backgroundColor?: keyof typeof theme.colors
  m?: number
  mh?: number
  mv?: number
  ml?: number
  mr?: number
  mt?: number
  mb?: number
  p?: number
  ph?: number
  pv?: number
  pl?: number
  pr?: number
  pt?: number
  pb?: number
  border?: borderType
  borderRadius?: number
  boxShadow?: string
}

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
}: Props) => (
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
