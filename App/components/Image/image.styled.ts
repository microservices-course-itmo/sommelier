import styled from 'styled-components/native'

type ImageContainerProps = {
  width?: number
  height?: number
  borderRadius?: number
}

export const ImageContainer = styled.Image<ImageContainerProps>`
  width: ${({ width }) => width || 0}px;
  height: ${({ height }) => height || 0}px;
  border-radius: ${({ borderRadius }) => borderRadius || 0}px;
`
