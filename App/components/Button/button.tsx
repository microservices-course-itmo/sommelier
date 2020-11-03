import React, { ReactNode } from 'react'
import * as Styled from './button.styled'
import * as Typography from '../Typography'
import theme from '../../theme'
import { COLOR_KEYS } from '../../theme/colors/index'

type Props = {
  onPress: () => void
  width?: number
  borderRadius?: number
  height?: number
  text: string
  fontSize?: keyof typeof theme.fontSizes
  color?: keyof typeof theme.colors
}

const Button = ({
  onPress = () => {},
  text,
  width,
  borderRadius,
  height,
  fontSize = 'hg',
  color = COLOR_KEYS.white,
}: Props) => (
  <Styled.ButtonContainer
    onPress={onPress}
    width={width}
    borderRadius={borderRadius}
    height={height}
  >
    <Styled.ButtonTextContainer>
      <Typography.Text color={color} size={fontSize}>
        {text}
      </Typography.Text>
    </Styled.ButtonTextContainer>
  </Styled.ButtonContainer>
)

export default Button
