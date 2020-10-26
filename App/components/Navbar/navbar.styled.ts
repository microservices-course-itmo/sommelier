import styled from 'styled-components/native'

type NavItemProps = {
  selected: boolean
}

export const NavbarContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 55.47px;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: center;
`

export const ItemsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`

export const NavItemStyle = styled.TouchableOpacity<NavItemProps>`
  width: 17px;
  height: 17px;
  color: ${({ selected, theme }) =>
    selected ? theme.colors.primaryRed : theme.colors.primaryGray};
`
