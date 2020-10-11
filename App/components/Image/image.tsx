import React, { ReactNode } from 'react'
import { ImageSourcePropType } from 'react-native'
import * as Styled from './image.styled'
import { border } from './types/border'

export type Props = {
  image: string
  width: number
  height: number
  border?: string
  borderRadius?: number
}

const Image = ({ image = '', width, height, border, borderRadius }: Props) => {
  return (
    <Styled.ImageContainerProps
      children=''
      source={{ uri: image }}
      image={image}
      width={width}
      height={height}
      border={border}
      borderRadius={borderRadius}
    ></Styled.ImageContainerProps>
  )
}

export default Image
