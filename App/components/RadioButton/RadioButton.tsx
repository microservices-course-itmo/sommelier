import React, { ReactNode } from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { RadioButtonContainer, RadioButtonText } from './RadioButton.styled'

type Props = {
  checked?: boolean
  children?: ReactNode
  onPress?: () => void
}

const RadioButton = ({
  checked = true,
  children = 'Red wine',
  onPress = () => {},
}: Props) => {
  return (
    <RadioButtonContainer>
      <TouchableOpacity style={styles.circle} onPress={onPress}>
        {checked ? <View style={styles.checkedCircle} /> : <View />}
      </TouchableOpacity>
      <RadioButtonText>{children}</RadioButtonText>
    </RadioButtonContainer>
  )
}

const styles = StyleSheet.create({
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#757575',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 40,
  },
  checkedCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: '#A22841',
    backgroundColor: '#A22841',
  },
})

export default RadioButton
