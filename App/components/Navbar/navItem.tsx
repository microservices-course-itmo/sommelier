import React from 'react'
import SvgUri from 'react-native-svg-uri'
import * as Label from '../Typography'
import * as Styled from './navbar.styled'

export type Props = {
  icon: object
  onPress: () => void
  text?: string
  selected: boolean
}

const Item = ({ icon, text, onPress }: Props) => (
  <Styled.NavItemStyle onPress={onPress} selected={false}>
    <SvgUri source={icon} />
    {!!text && <Label.H4>{text}</Label.H4>}
  </Styled.NavItemStyle>
)

export default Item
