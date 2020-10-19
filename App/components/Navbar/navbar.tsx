import React, { ReactNode } from 'react'
import { View } from 'react-native'

type Props = {
  children: ReactNode | ReactNode[]
}

const Navbar = ({ children }: Props) => <View>{children}</View>

export default Navbar
