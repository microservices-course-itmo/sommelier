import React, { ReactNode, ReactElement } from 'react'
import * as Styled from './typography.styled'
import theme from '../../theme/index'

type HeaderProps = {
  children: ReactNode
  color?: keyof typeof theme.colors
  bold?: boolean
  italic?: boolean
  fontFamily: keyof typeof theme.fonts
}

type TextProps = HeaderProps & {
  size?: keyof typeof theme.fontSizes
  crossedOut?: boolean
}

export const H1 = ({
  color,
  children,
  bold,
  italic,
  fontFamily,
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
  color,
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
  color,
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
  color,
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
  color,
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
  color,
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
  color,
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
