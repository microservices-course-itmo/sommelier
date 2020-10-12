import { ReactNode } from 'react'
import theme from '../../theme'

export type BorderType = {
  borderStyle?: keyof typeof theme.borders
  borderColor?: keyof typeof theme.colors
  borderWidth?: number
}

export type BoxProps = {
  children: ReactNode
  color?: keyof typeof theme.colors
  backgroundColor?: keyof typeof theme.colors
  m?: number
  mh?: number
  mv?: number
  ml?: number
  mr?: number
  mt?: number
  mb?: number
  p?: number
  ph?: number
  pv?: number
  pl?: number
  pr?: number
  pt?: number
  pb?: number
  border?: BorderType
  borderRadius?: number
  boxShadow?: string
}
