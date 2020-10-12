import React from 'react'
import * as Styled from './image.styled'

export type Props = {
  image: string
  width?: number
  height?: number
  border?: string
  borderRadius?: number
}

const Image = ({ image = '', width, height, border, borderRadius }: Props) => (
  <Styled.ImageContainer
    source={{ uri: image }}
    image={image}
    width={width}
    height={height}
    border={border}
    borderRadius={borderRadius}
  />
)

export default Image
