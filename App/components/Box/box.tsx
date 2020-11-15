import React from 'react'
import * as Styled from './box.styled'
import { Props } from './box.types'

const Box = ({
  pX,
  pY,
  mX,
  mY,
  children,
  borderColor,
  borderRadius,
  backgroundColor,
}: Props) => (
  <Styled.BoxContainer
    pX={pX}
    pY={pY}
    mX={mX}
    mY={mY}
    borderColor={borderColor}
    borderRadius={borderRadius}
    backgroundColor={backgroundColor}
  >
    {children}
  </Styled.BoxContainer>
)

export default Box
