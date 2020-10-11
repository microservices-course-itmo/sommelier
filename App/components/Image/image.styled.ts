import styled from 'styled-components/native'
import { Props } from './image'
import { Border } from './enums/Border'

// export const ImageTry = styled.TouchableOpacity`
//   background-color: ${({ theme }) => theme.colors.primary};
//   padding-vertical: 14;
//   border-radius: 6;
//   border-width: 1;
//   border-color: ${({ theme }) => theme.colors.primary};
//   margin-vertical: 7;
// `

export const ImageContainer = styled.Image<Props>`
  ${({ width }) => (width || width === 0 ? `width: ${width}px;` : '')}
  ${({ height }) => (height || height === 0 ? `height: ${height}px;` : '')}
  ${({ border }) =>
    border && isBorderValid(border) ? `border: ${border};` : ''}
  ${({ borderRadius }) =>
    borderRadius || borderRadius === 0
      ? `border-radius: ${borderRadius}px;`
      : ''}
`

const isBorderValid = (border: string): boolean => {
  const borderProps: string[] = border.split(' ')
  const borderWidth: string = borderProps[0]
  const borderStyle: string = borderProps[1]
  return /\dpx/.test(borderWidth) && borderStyle in Border
}
