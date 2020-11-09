import React, { ReactNode, useState } from 'react'
import CheckBox from '@react-native-community/checkbox'
import { CheckboxContainer, CheckboxText } from './checkbox.styled'

type Props = {
  checked: boolean
  children: ReactNode
}

const Checkbox = ({ checked, children }: Props) => {
  const [pressed, setPressed] = useState(checked)
  return (
    <CheckboxContainer onPress={() => setPressed(!pressed)}>
      <CheckBox
        value={pressed}
        tintColors={{ true: '#A22841', false: '#757575' }}
        onValueChange={(value) => setPressed(value)}
      />
      <CheckboxText>{children}</CheckboxText>
    </CheckboxContainer>
  )
}
export default Checkbox
