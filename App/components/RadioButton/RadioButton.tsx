import React, { ReactNode, useState } from 'react'
import {
  RadioButtonContainer,
  RadioButtonText,
  RadioButtonViewFilled,
  RadioButtonViewUnfilled,
} from './RadioButton.styled'

type Props = {
  checked?: boolean
  children?: ReactNode
}

const RadioButton = ({ checked = true, children = '' }: Props) => {
  const [pressed, setPressed] = useState(checked)
  return (
    <RadioButtonContainer onPress={() => setPressed(!pressed)}>
      {pressed ? <RadioButtonViewFilled /> : <RadioButtonViewUnfilled />}
      <RadioButtonText>{children}</RadioButtonText>
    </RadioButtonContainer>
  )
}

export default RadioButton
