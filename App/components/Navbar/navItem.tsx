import React from 'react'
import SvgUri from 'react-native-svg-uri'
import { TouchableOpacity, Text } from 'react-native'
import menuItem from '../../../assets/images/menuItem1.svg'

type Props = {
  icon: string
  onPress: () => void
  text?: string
}

const Item = ({ icon = '', text, onPress = () => {} }: Props) => (
  <TouchableOpacity onPress={onPress}>
    <SvgUri source={{ uri: icon }} />
    {!!text && <Text>{text}</Text>}
  </TouchableOpacity>
)

export default Item
