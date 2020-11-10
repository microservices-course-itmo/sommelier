import React from 'react'
import * as Styled from './image.styled'
import Box from '../Box/box'
import { BoxProps } from '../Box/box.types'
import { COLOR_KEYS } from '../../theme/colors'
import theme from '../../theme'

export type Props = {
  image: string
  width?: number
  height?: number
  borderRadius?: number
  borderColor?: keyof typeof theme.colors
} & BoxProps

const Image = (props: Props) => (
  <Box {...props}>
    <Styled.ImageContainer
      source={{ uri: props.image }}
      width={props.width}
      height={props.height}
    />
  </Box>
)

export default Image
