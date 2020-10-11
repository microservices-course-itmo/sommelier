import React, { ReactNode } from 'react'
import { ImageSourcePropType } from 'react-native'
import * as Styled from './image.styled'

export type Props = {
  children: ReactNode
  image: string
  width: number
  height: number
  border?: string | undefined
  borderRadius?: number | undefined
}

const Image = ({
  children = '',
  image = '',
  width = 0,
  height = 0,
  border,
  borderRadius,
}: Props) => {
  return (
    <Styled.ImageContainer
      source={{ uri: image }}
      image={image}
      width={width}
      height={height}
      border={border}
      borderRadius={borderRadius}
    >
      {children}
    </Styled.ImageContainer>
  )
}

export default Image
