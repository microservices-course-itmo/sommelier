import styled from 'styled-components/native'
import { BoxProps } from './box.types'

export const BoxContainer = styled.View<BoxProps>`
  padding: ${({ theme, pX, pY }) =>
    pX && pY && `${theme.boxSizes[pX]} ${theme.boxSizes[pY]}`};
  margin: ${({ theme, mX, mY }) =>
    mX && mY && `${theme.boxSizes[mX]} ${theme.boxSizes[mY]}`};
  background-color: ${({ theme, backgroundColor }) =>
    !!backgroundColor && theme.colors[backgroundColor]};
  ${({ borderRadius }) => !!borderRadius && `border-radius: ${borderRadius}`};
  border-color: ${({ theme, borderColor }) =>
    !!borderColor && theme.colors[borderColor]};
`
