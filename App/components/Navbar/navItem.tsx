import React from 'react'
import SvgUri from 'react-native-svg-uri'
import * as Label from '../Typography'
import * as Styled from './navbar.styled'
import { FONT_SIZE_KEYS } from '../../theme/fontSizes'
import { FONT_KEYS } from '../../theme/fonts'
import { COLOR_KEYS } from '../../theme/colors'

export type Props = {
  children: object
  onPress: () => void
  text?: string
  selected: boolean
}

const Item = ({ children, text, onPress }: Props) => (
  <Styled.ItemContainer onPress={onPress} selected={false}>
    <Styled.NavItemStyle>{children}</Styled.NavItemStyle>
    {!!text && (
      <Label.Text
        color={COLOR_KEYS.primaryGray}
        bold={false}
        italic={false}
        size={FONT_SIZE_KEYS.sm}
      >
        {text}
      </Label.Text>
    )}
  </Styled.ItemContainer>
)

export default Item
