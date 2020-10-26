import React, { ReactNode } from 'react'
import * as Styled from './navbar.styled'

type Props = {
  children: ReactNode | ReactNode[]
}

const Navbar = ({ children }: Props) => (
  <Styled.NavbarContainer>
    <Styled.ItemsContainer>{children}</Styled.ItemsContainer>
  </Styled.NavbarContainer>
)

export default Navbar
