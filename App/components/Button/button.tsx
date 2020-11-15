import React, { ReactNode } from 'react'
import * as Styled from './button.styled'

export type ButtonProps = {
  onPress: () => void
  children: ReactNode
}

const Button = ({ onPress = () => {}, children = '' }: ButtonProps) => (
  <Styled.ButtonContainer onPress={onPress}>
    <Styled.ButtonText>{children}</Styled.ButtonText>
  </Styled.ButtonContainer>
)

export default Button
