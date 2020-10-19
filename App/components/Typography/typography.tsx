import React, { ReactNode, ReactElement } from 'react'
import * as Styled from './typography.styled'
import theme from '../../theme/index'
import { COLOR_KEYS } from '../../theme/colors/index'
import { FONT_KEYS } from '../../theme/fonts/index'

type HeaderProps = {
  children: ReactNode
  color?: keyof typeof theme.colors
  bold?: boolean
  italic?: boolean
  fontFamily?: keyof typeof theme.fonts
}

type TextProps = HeaderProps & {
  size?: keyof typeof theme.fontSizes
  crossedOut?: boolean
}

export const H1 = ({
  children,
  bold,
  italic,
  fontFamily,
  color = COLOR_KEYS.black,
}: HeaderProps) => (
  <Styled.StyledH1
    color={color}
    bold={bold}
    italic={italic}
    fontFamily={fontFamily}
  >
    {children}
  </Styled.StyledH1>
)

export const H2 = ({
  color = COLOR_KEYS.black,
  children,
  bold,
  italic,
  fontFamily,
}: HeaderProps) => (
  <Styled.StyledH2
    color={color}
    bold={bold}
    italic={italic}
    fontFamily={fontFamily}
  >
    {children}
  </Styled.StyledH2>
)

export const H3 = ({
  color = COLOR_KEYS.black,
  children,
  bold,
  italic,
  fontFamily,
}: HeaderProps) => (
  <Styled.StyledH3
    color={color}
    bold={bold}
    italic={italic}
    fontFamily={fontFamily}
  >
    {children}
  </Styled.StyledH3>
)

export const H4 = ({
  color = COLOR_KEYS.black,
  children,
  bold,
  italic,
  fontFamily,
}: HeaderProps) => (
  <Styled.StyledH4
    color={color}
    bold={bold}
    italic={italic}
    fontFamily={fontFamily}
  >
    {children}
  </Styled.StyledH4>
)

export const H5 = ({
  color = COLOR_KEYS.black,
  children,
  bold,
  italic,
  fontFamily,
}: HeaderProps) => (
  <Styled.StyledH5
    color={color}
    bold={bold}
    italic={italic}
    fontFamily={fontFamily}
  >
    {children}
  </Styled.StyledH5>
)

export const H6 = ({
  color = COLOR_KEYS.black,
  children,
  bold,
  italic,
  fontFamily,
}: HeaderProps) => (
  <Styled.StyledH6
    color={color}
    bold={bold}
    italic={italic}
    fontFamily={fontFamily}
  >
    {children}
  </Styled.StyledH6>
)

export const Text = ({
  children,
  color = COLOR_KEYS.black,
  bold,
  italic,
  size = 'md',
  crossedOut,
  fontFamily,
}: TextProps): ReactElement => (
  <Styled.StyledText
    color={color}
    bold={bold}
    italic={italic}
    fontFamily={fontFamily}
    size={size}
    crossedOut={crossedOut}
  >
    {children}
  </Styled.StyledText>
)
