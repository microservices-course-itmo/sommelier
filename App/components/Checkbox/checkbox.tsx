import React, { ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import NativeCheckbox from '@react-native-community/checkbox'
import { CheckboxContainer, CheckboxText } from './checkbox.styled'

type Props = {
  checked: boolean
  children: ReactNode
}

const Checkbox = ({ checked, children }: Props) => (
  <CheckboxContainer>
    <NativeCheckbox
      value={checked}
      tintColors={{ true: '#A22841', false: '#757575' }}
    />
    <CheckboxText>{children}</CheckboxText>
  </CheckboxContainer>
)

export default Checkbox
