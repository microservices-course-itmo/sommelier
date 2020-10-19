import styled from 'styled-components/native'
import theme from '../../theme/index'

type HeaderProps = {
  color: keyof typeof theme.colors
  bold?: boolean
  italic?: boolean
  fontFamily?: keyof typeof theme.fonts
}

type TextProps = HeaderProps & {
  size: keyof typeof theme.fontSizes
  crossedOut?: boolean
}

export const StyledH1 = styled.Text<HeaderProps>`
  color: ${({ color, theme }) => theme.colors[color]};
  font-size: 32px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  ${({ fontFamily, theme }) =>
    fontFamily && `font-family:${theme.fonts[fontFamily]}`};
`

export const StyledH2 = styled.Text<HeaderProps>`
  color: ${({ color, theme }) => theme.colors[color]};
  font-size: 24px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  ${({ fontFamily, theme }) =>
    fontFamily && `font-family:${theme.fonts[fontFamily]}`};
`

export const StyledH3 = styled.Text<HeaderProps>`
  color: ${({ color, theme }) => theme.colors[color]};
  font-size: 18.72px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  ${({ fontFamily, theme }) =>
    fontFamily && `font-family:${theme.fonts[fontFamily]}`};
`

export const StyledH4 = styled.Text<HeaderProps>`
  color: ${({ color, theme }) => theme.colors[color]};
  font-size: 16px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  ${({ fontFamily, theme }) =>
    fontFamily && `font-family:${theme.fonts[fontFamily]}`};
`

export const StyledH5 = styled.Text<HeaderProps>`
  color: ${({ color, theme }) => theme.colors[color]};
  font-size: 13.28px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  ${({ fontFamily, theme }) =>
    fontFamily && `font-family:${theme.fonts[fontFamily]}`};
`

export const StyledH6 = styled.Text<HeaderProps>`
  color: ${({ color, theme }) => theme.colors[color]};
  font-size: 10.72px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  ${({ fontFamily, theme }) =>
    fontFamily && `font-family:${theme.fonts[fontFamily]}`};
`

export const StyledText = styled.Text<TextProps>`
  color: ${({ color, theme }) => theme.colors[color]};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  ${({ fontFamily, theme }) =>
    fontFamily && `font-family:${theme.fonts[fontFamily]}`};
  font-size: ${({ size, theme }) => theme.fontSizes[size]};
  text-decoration: ${({ crossedOut }) =>
    crossedOut ? 'line-through' : 'none'};
`
