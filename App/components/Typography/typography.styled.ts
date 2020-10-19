import styled from 'styled-components/native'
import { StyledHeaderProps, StyledTextProps } from './typography.types'

export const StyledHeader = styled.Text<StyledHeaderProps>`
  ${({ size, theme }) => theme.headerSizes[size]};
  color: ${({ color, theme }) => !!color && theme.colors[color]};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  text-decoration: ${({ crossedOut }) =>
    crossedOut ? 'line-through' : 'none'};
`

export const StyledText = styled.Text<StyledTextProps>`
  font-size: ${({ size, theme }) => theme.fontSizes[size]};
  color: ${({ color, theme }) => !!color && theme.colors[color]};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  text-decoration: ${({ crossedOut }) =>
    crossedOut ? 'line-through' : 'none'};
`
