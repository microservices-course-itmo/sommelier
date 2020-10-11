import styled from 'styled-components/native'
import { Props } from './image'
import { border as borderType } from './types/border'

export const ImageContainerProps = styled.Image<Props>`
  width: ${({ width }) => width || 0}px;
  height: ${({ height }) => height || 0}px;
  border: ${({ border }) => border || ''};
  border-radius: ${({ borderRadius }) => borderRadius || 0}px;
`
