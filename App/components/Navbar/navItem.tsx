import React, { ReactNode } from 'react'
import * as Label from '../Typography'
import * as Styled from './navbar.styled'
import { FONT_SIZE_KEYS } from '../../theme/fontSizes'
import { COLOR_KEYS } from '../../theme/colors'

export type Props = {
  onPress: () => void
  text?: string
  icon: ReactNode
}

const Item = ({ text, onPress, icon }: Props) => (
  <Styled.ItemContainer onPress={onPress} selected={false}>
    <Styled.NavItemStyle>{icon}</Styled.NavItemStyle>
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
