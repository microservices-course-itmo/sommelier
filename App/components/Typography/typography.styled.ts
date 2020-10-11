import styled from 'styled-components/native'
import theme from '../../theme/index'

type Props = {
  color?: keyof typeof theme.colors
  bold?: boolean
  italic?: boolean
  size?: keyof typeof theme.fontSizes
  crossedOut?: boolean
  fontFamily: keyof typeof theme.fonts
}

export const StyledH1 = styled.Text<Props>`
  color: ${({ color }) => color};
  font-size: 32px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  font-family: ${({ fontFamily }) => fontFamily};
`

export const StyledH2 = styled.Text<Props>`
  color: ${({ color }) => color};
  font-size: 24px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  font-family: ${({ fontFamily }) => fontFamily};
`

export const StyledH3 = styled.Text<Props>`
  color: ${({ color }) => color};
  font-size: 18.72px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  font-family: ${({ fontFamily }) => fontFamily};
`

export const StyledH4 = styled.Text<Props>`
  color: ${({ color }) => color};
  font-size: 16px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  font-family: ${({ fontFamily }) => fontFamily};
`

export const StyledH5 = styled.Text<Props>`
  color: ${({ color }) => color};
  font-size: 13.28px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  font-family: ${({ fontFamily }) => fontFamily};
`

export const StyledH6 = styled.Text<Props>`
  color: ${({ color }) => color};
  font-size: 10.72px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  font-family: ${({ fontFamily }) => fontFamily};
`

export const StyledText = styled.Text<Props>`
  color: ${({ color }) => color};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({size, theme}) => theme.fontSizes[size]};
  text-decoration: ${({ crossedOut }) =>
    crossedOut ? 'line-through' : 'none'};
`
