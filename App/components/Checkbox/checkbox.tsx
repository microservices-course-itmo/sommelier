import React, { ReactNode } from 'react'
import NativeCheckbox from '@react-native-community/checkbox'
import { CheckboxContainer, CheckboxText } from './checkbox.styled'

export type CheckBoxProps = {
  checked: boolean
  children: ReactNode
}

const Checkbox = ({ checked, children }: CheckBoxProps) => (
  <CheckboxContainer>
    <NativeCheckbox
      value={checked}
      tintColors={{ true: '#A22841', false: '#757575' }}
    />
    <CheckboxText>{children}</CheckboxText>
  </CheckboxContainer>
)

export default Checkbox
