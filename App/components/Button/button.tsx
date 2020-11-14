import React, { ReactNode } from 'react'
import * as Styled from './button.styled'

type Props = {
  onPress: () => void
  children: ReactNode
}

const Button = ({ onPress = () => {}, children = '' }: Props) => (
  <Styled.ButtonContainer onPress={onPress} data-test='sommelier-button'>
    <Styled.ButtonText>{children}</Styled.ButtonText>
  </Styled.ButtonContainer>
)

export default Button
