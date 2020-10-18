import React from 'react'
import * as Styled from './box.styled'
import { BoxProps } from './box.types'
import { COLOR_KEYS } from '../../theme/colors'

const Box = ({
  children = '',
  backgroundColor = COLOR_KEYS.transparent,
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
    border={{
      borderColor: border?.borderColor || 'black',
      borderStyle: border?.borderStyle || 'solid',
      borderWidth: border?.borderWidth || 0,
    }}
    borderRadius={borderRadius}
  >
    {children}
  </Styled.BoxContainer>
)

export default Box
