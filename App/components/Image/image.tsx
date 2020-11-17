import React from 'react'
import * as Styled from './image.styled'
import Box from '../Box/box'
import { BoxProps } from '../Box'

export type ImageProps = {
  image: string
  width?: number
  height?: number
} & BoxProps

const Image = (props: ImageProps) => {
  const { image, width, height } = props
  return (
    <Box {...props}>
      <Styled.ImageContainer
        source={{ uri: image }}
        width={width}
        height={height}
        testID='sommelier-image'
      />
    </Box>
  )
}

export default Image
