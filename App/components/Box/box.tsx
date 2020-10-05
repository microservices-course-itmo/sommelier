import React, { ReactNode } from 'react'
import * as Styled from './box.styled'

export type Props = {
  children: ReactNode

  color?: string | undefined

  m?: number | undefined

  mh?: number | undefined

  mv?: number | undefined

  ml?: number | undefined

  mr?: number | undefined

  mt?: number | undefined

  mb?: number | undefined

  p?: number | undefined

  ph?: number | undefined

  pv?: number | undefined

  pl?: number | undefined

  pr?: number | undefined

  pt?: number | undefined

  pb?: number | undefined

  border?: string | undefined

  borderRadius?: string | undefined

  boxShadow?: string | undefined
}

const Box = ({
  children = '',
  color,
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
  boxShadow,
}: Props) => (
  <Styled.BoxContainer
    color={color}
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
    boxShadow={boxShadow}
  >
    {children}
  </Styled.BoxContainer>
)

export default Box
