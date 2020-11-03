import React from 'react'
import * as Styled from './button.styled'
import theme from '../../theme'
import { COLOR_KEYS } from '../../theme/colors'

type Props = {
  width?: number
  height?: number
  borderRadius?: number
  shadowWidth?: number
  shadowHeight?: number
  shadowOpacity?: number
  shadowColor?: keyof typeof theme.colors
  top?: number
}

const UnderButton = ({
  width,
  height,
  borderRadius,
  shadowWidth,
  shadowHeight,
  shadowOpacity,
  top,
  shadowColor = COLOR_KEYS.shadowButton,
}: Props) => (
  <Styled.UnderButtonContainer
    width={width}
    height={height}
    borderRadius={borderRadius}
    shadowWidth={shadowWidth}
    shadowHeight={shadowHeight}
    shadowOpacity={shadowOpacity}
    top={top}
    shadowColor={shadowColor}
  />
)

export default UnderButton
