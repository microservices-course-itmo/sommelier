import React from 'react'
import * as Styled from './image.styled'
import { BoxContainer } from '../Box/box.styled'
import theme from '../../theme'

export type Props = {
  image: string
  width?: number
  height?: number
  border?: string
  borderRadius?: number
}

const Image = ({
  image = '',
  width,
  height,
  border,
  borderRadius: radius,
}: Props) => {
  let borderRadius = radius
  if (!borderRadius) {
    borderRadius = Number(border?.split(' ')[0])
  }
  const borderColor = border?.split(' ')[2] as keyof typeof theme.colors
  return (
    <BoxContainer borderRadius={borderRadius} borderColor={borderColor}>
      <Styled.ImageContainer
        source={{ uri: image }}
        width={width}
        height={height}
      />
    </BoxContainer>
  )
}

export default Image
