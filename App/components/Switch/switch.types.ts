import { ReactNode } from 'react'
import { GestureResponderEvent } from 'react-native'
import theme from '../../theme'

export type Props = {
  children?: ReactNode
  switchType?: keyof typeof theme.switchTypes
  value?: boolean
  onChange?: (value: boolean) => void
  onClick?: (value: boolean, event: GestureResponderEvent) => void
  disabled?: boolean
}
