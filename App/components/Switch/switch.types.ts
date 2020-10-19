import { ReactNode } from 'react'

export type Props = {
  children?: ReactNode
  type?: 'heart' | 'something'
  value?: boolean
  onChange?: (value: boolean, event: Event) => void
  onClick?: (value: boolean, event: Event) => void
  disabled?: boolean
}
