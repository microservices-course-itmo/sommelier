import React, { ReactNode } from 'react'
import * as Styled from './image.styled'

type Props = {
  children: ReactNode
  image: string
  width: number
  height: number
  border?: string
  borderRadius?: number
}

const Image = ({ children = '', image = '', width = 0, height = 0 }: Props) => {
  return (
    <Styled.ImageContainer
    // image={image}
    // width={width}
    // height={height}
    >
      <Styled.ImageText>{children}</Styled.ImageText>
    </Styled.ImageContainer>
  )
}

export default Image
