import styled from 'styled-components/native'
import { BoxProps } from './box.types'

export const BoxContainer = styled.View<BoxProps>`
  padding: ${({ theme, pX, pY }) =>
    `${pX ? theme.boxSizes[pX] : 0} ${pY ? theme.boxSizes[pY] : 0}`};
  margin: ${({ theme, mX, mY }) =>
    `${mX ? theme.boxSizes[mX] : 0} ${mY ? theme.boxSizes[mY] : 0}`};
  background-color: ${({ theme, backgroundColor }) =>
    !!backgroundColor && theme.colors[backgroundColor]};
  ${({ borderRadius }) => !!borderRadius && `border-radius: ${borderRadius}`};
  border-color: ${({ theme, borderColor }) =>
    !!borderColor && theme.colors[borderColor]};
`
