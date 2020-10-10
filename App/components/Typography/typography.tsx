import React, { ReactNode } from 'react'
import * as Styled from './typography.styled'
import theme from '../../theme/index'
import { ReactElement } from 'react'

type Props = {
  children: ReactNode
  color: string
  bold?: boolean
  italic: boolean
  size?: keyof typeof theme.fontSizes
  crossedOut?: boolean
  fontFamily: string
}

export const H1 = ({ color, children, bold, italic, fontFamily }: Props) => (
  <Styled.StyledH1
    color={color}
    bold={bold}
    italic={italic}
    fontFamily={fontFamily}
  >
    {children}
  </Styled.StyledH1>
)

export const H2 = ({ color, children, bold, italic, fontFamily }: Props) => (
  <Styled.StyledH2
    color={color}
    bold={bold}
    italic={italic}
    fontFamily={fontFamily}
  >
    {children}
  </Styled.StyledH2>
)

export const H3 = ({ color, children, bold, italic, fontFamily }: Props) => (
  <Styled.StyledH3
    color={color}
    bold={bold}
    italic={italic}
    fontFamily={fontFamily}
  >
    {children}
  </Styled.StyledH3>
)

export const H4 = ({ color, children, bold, italic, fontFamily }: Props) => (
  <Styled.StyledH4
    color={color}
    bold={bold}
    italic={italic}
    fontFamily={fontFamily}
  >
    {children}
  </Styled.StyledH4>
)

export const H5 = ({ color, children, bold, italic, fontFamily }: Props) => (
  <Styled.StyledH5
    color={color}
    bold={bold}
    italic={italic}
    fontFamily={fontFamily}
  >
    {children}
  </Styled.StyledH5>
)

export const H6 = ({ color, children, bold, italic, fontFamily }: Props) => (
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
  size,
  crossedOut,
  fontFamily,
}: Props): ReactElement => (
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
