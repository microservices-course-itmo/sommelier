import { ReactNode } from 'react'
import { GestureResponderEvent } from 'react-native'

export type Props = {
  children?: ReactNode
  type?: 'heart' | 'something'
  value?: boolean
  onChange?: (value: boolean) => void
  onClick?: (value: boolean, event: GestureResponderEvent) => void
  disabled?: boolean
}
