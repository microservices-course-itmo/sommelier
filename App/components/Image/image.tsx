import React from 'react'
import * as Styled from './image.styled'
import { BoxContainer } from '../Box/box.styled'
import { BorderType } from '../Box/box.types'

export type Props = {
  image: string
  width?: number
  height?: number
  border?: BorderType
  borderRadius?: number
}

const Image = ({ image = '', width, height, border, borderRadius }: Props) => (
  <BoxContainer border={border}>
    <Styled.ImageContainer
      source={{ uri: image }}
      width={width}
      height={height}
      borderRadius={borderRadius}
    />
  </BoxContainer>
)

export default Image
