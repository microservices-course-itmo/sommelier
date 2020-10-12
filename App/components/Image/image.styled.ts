import styled from 'styled-components/native'

type ImageContainerProps = {
  image: string
  width?: number
  height?: number
  border?: string
  borderRadius?: number
}

export const ImageContainer = styled.Image<ImageContainerProps>`
  width: ${({ width }) => width || 0}px;
  height: ${({ height }) => height || 0}px;
  border: ${({ border }) => border || 'none'};
  border-radius: ${({ borderRadius }) => borderRadius || 0}px;
`
