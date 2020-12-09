import React, { ReactNode, useState } from 'react'
import Checked from '../../../assets/images/checked.svg'
import {
  CheckboxContainer,
  CheckboxText,
  UncheckedCB,
  CheckedCB,
} from './checkbox.styled'

type Props = {
  checked: boolean
  children: ReactNode
}

const Checkbox = ({ checked, children }: Props) => {
  const [pressed, setPressed] = useState(checked)
  return (
    <CheckboxContainer>
      {pressed ? (
        <CheckedCB onPress={() => setPressed(!pressed)}>
          <Checked />
        </CheckedCB>
      ) : (
        <UncheckedCB onPress={() => setPressed(!pressed)} />
      )}
      <CheckboxText>{children}</CheckboxText>
    </CheckboxContainer>
  )
}

export default Checkbox
