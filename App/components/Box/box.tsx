import React from 'react'
import * as Styled from './box.styled'
import { BoxProps } from './box.types'

const Box = ({
  children = '',
  backgroundColor = 'transparent',
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
  borderRadius = 0,
}: BoxProps) => (
    <Styled.BoxContainer
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
      border={Object.assign({
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 0,
      }, border)}
      borderRadius={borderRadius}
    >
      {children}
    </Styled.BoxContainer>
  )

export default Box
