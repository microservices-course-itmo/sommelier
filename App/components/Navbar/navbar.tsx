import React, { ReactNode } from 'react'
import * as Styled from './navbar.styled'
import * as Label from '../Typography'
import { COLOR_KEYS } from '../../theme/colors'
import { FONT_SIZE_KEYS } from '../../theme/fontSizes'

export type NavbarProps = {
  children: ReactNode | ReactNode[]
}

export const Navbar = ({ children }: NavbarProps) => (
  <Styled.NavbarContainer data-test='sommelier-navbar'>
    <Styled.ItemsContainer>{children}</Styled.ItemsContainer>
  </Styled.NavbarContainer>
)

export type NavbarItemProps = {
  onPress: () => void
  text?: string
  icon: ReactNode
}

export const Item = ({ text, onPress, icon }: NavbarItemProps) => (
  <Styled.ItemContainer onPress={onPress} data-test='sommelier-nav-item'>
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
